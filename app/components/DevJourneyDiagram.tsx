"use client";

import Link from "next/link";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
} from "react";

/* ================================
   Layout constants
================================= */
const CANVAS_H = 560;
const LEFT_NUDGE_PX = -40;
const TOP_NUDGE_CLASS = "-mt-20 md:-mt-28";

const CARD_W = 240;
const CARD_H = 128;

/* ---- line anchor tuning (0..1 inside the card) ---- */
const SOURCE_X_RATIO = 0.78; // start nearer the right edge of the source card
const TARGET_X_RATIO = 0.22; // land nearer the left edge of the target card
const ANCHOR_Y_RATIO = 0.52; // vertical anchor inside each card

/* ================================
   Nodes (extra space Beginner → Early)
================================= */
type NodeDef = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  x: number;  // % from left
  y: number;  // % from top
};

const NODES: NodeDef[] = [
  { id: "beginner", title: "Beginner Dev",         subtitle: "Start coding, grasp core concepts", href: "/beginner",               x:  1, y: 70 },
  { id: "early",    title: "Early Blockchain Dev", subtitle: "Smart contracts, tokens, tooling",  href: "/early-stage",            x: 24, y: 64 },
  { id: "eth",      title: "Ethereum Dev",         subtitle: "Solidity, EVM dApps, DeFi",          href: "/ethereum",               x: 48, y: 30 },
  { id: "sol",      title: "Solana Dev",           subtitle: "Rust/Anchor, accounts, SPL",         href: "/solana",                 x: 48, y: 82 },
  { id: "cross",    title: "Cross-Chain Dev",      subtitle: "Neon composability, bridges",        href: "/cross-chain",            x: 71, y: 48 },
  { id: "beyond",   title: "Beyond",               subtitle: "ZK, infra, GTM & grants",            href: "/beyond-advanced-topics", x: 94, y: 48 },
];

// edges: from → to
const EDGES: Array<[string, string]> = [
  ["beginner", "early"],
  ["early", "eth"],
  ["early", "sol"],
  ["eth", "cross"],
  ["sol", "cross"],
  ["cross", "beyond"],
];

/* ================================
   Helpers
================================= */
function cubicPoints(
  sx: number, sy: number, ex: number, ey: number, leftToRight: boolean, midOffsetX = 0
) {
  const dx = ex - sx;
  const baseMid = (sx + ex) / 2 + midOffsetX;

  const MIN_BOW = 60;
  const sign = leftToRight ? 1 : -1;
  const midX = Math.abs(dx) < MIN_BOW ? baseMid + sign * (MIN_BOW - Math.abs(dx)) : baseMid;

  return { cx1: midX, cy1: sy, cx2: midX, cy2: ey };
}

// x(t), y(t) for cubic Bézier
function cubicEval(
  p0x: number, p0y: number,
  p1x: number, p1y: number,
  p2x: number, p2y: number,
  p3x: number, p3y: number,
  t: number
) {
  const mt = 1 - t;
  const a = mt * mt * mt;
  const b = 3 * mt * mt * t;
  const c = 3 * mt * t * t;
  const d = t * t * t;
  const x = a * p0x + b * p1x + c * p2x + d * p3x;
  const y = a * p0y + b * p1y + c * p2y + d * p3y;
  return { x, y };
}

// derivative for direction at t
function cubicDeriv(
  p0x: number, p0y: number,
  p1x: number, p1y: number,
  p2x: number, p2y: number,
  p3x: number, p3y: number,
  t: number
) {
  const mt = 1 - t;
  const dx =
    3 * mt * mt * (p1x - p0x) +
    6 * mt * t   * (p2x - p1x) +
    3 * t  * t   * (p3x - p2x);
  const dy =
    3 * mt * mt * (p1y - p0y) +
    6 * mt * t   * (p2y - p1y) +
    3 * t  * t   * (p3y - p2y);
  return { dx, dy };
}

// split cubic at t (De Casteljau) → left cubic control points
function splitCubicLeft(
  p0x: number, p0y: number,
  p1x: number, p1y: number,
  p2x: number, p2y: number,
  p3x: number, p3y: number,
  t: number
) {
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const q0x = lerp(p0x, p1x, t), q0y = lerp(p0y, p1y, t);
  const q1x = lerp(p1x, p2x, t), q1y = lerp(p1y, p2y, t);
  const q2x = lerp(p2x, p3x, t), q2y = lerp(p2y, p3y, t);

  const r0x = lerp(q0x, q1x, t), r0y = lerp(q0y, q1y, t);
  const r1x = lerp(q1x, q2x, t), r1y = lerp(q1y, q2y, t);

  const sx = lerp(r0x, r1x, t), sy = lerp(r0y, r1y, t); // split point

  // left cubic: P0, Q0, R0, S
  return { cx1: q0x, cy1: q0y, cx2: r0x, cy2: r0y, ex: sx, ey: sy };
}

// compute mid-offsets to fan multiple lines to same target
function computeMidOffsets(edges: Array<[string, string]>) {
  const buckets = new Map<string, string[]>();
  edges.forEach(([from, to]) => {
    if (!buckets.has(to)) buckets.set(to, []);
    buckets.get(to)!.push(from);
  });
  const offsets = new Map<string, number>();
  buckets.forEach((froms, to) => {
    if (froms.length === 1) {
      offsets.set(`${froms[0]}->${to}`, 0);
    } else {
      const STEP = 80;
      const n = froms.length;
      froms.forEach((f, i) => {
        const pos = i - (n - 1) / 2;
        offsets.set(`${f}->${to}`, pos * STEP);
      });
    }
  });
  return offsets;
}

/* ================================
   Node layers
================================= */
function NodeBack({ active }: { active: boolean }) {
  return (
    <div
      className={[
        "absolute inset-0 rounded-3xl border",
        "bg-[rgba(255,255,255,0.06)] border-white/10",
        active ? "ring-2 ring-fuchsia-500/60" : "ring-0",
        "pointer-events-none",
        "z-[10]",
      ].join(" ")}
    />
  );
}

function NodeFront({
  n, idx, setHover,
}: { n: NodeDef; idx: number; setHover: (v: string | null) => void }) {
  return (
    <Link
      href={n.href}
      onMouseEnter={() => setHover(n.id)}
      onMouseLeave={() => setHover(null)}
      onFocus={() => setHover(n.id)}
      onBlur={() => setHover(null)}
      aria-label={`Stage ${idx + 1}: ${n.title}`}
      className="absolute inset-0 z-[90] rounded-3xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70"
    >
      <div className="h-full w-full px-6 py-5">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] text-[12px] font-bold text-white shadow">
            {idx + 1}
          </span>
        </div>
        <div className="mt-2">
          <h3 className="text-[16px] font-semibold text-white leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]">
            {n.title}
          </h3>
          <p className="mt-1 text-[12px] text-white/70 line-clamp-2">{n.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

/* ================================
   Main component
================================= */
export default function DevJourneyDiagram() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // wrapper refs to measure actual position/size
  const nodeRefs = useMemo(
    () =>
      Object.fromEntries(
        NODES.map((n) => [n.id, React.createRef<HTMLDivElement>()])
      ) as Record<string, React.RefObject<HTMLDivElement>>,
    []
  );

  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const midOffsets = useMemo(() => computeMidOffsets(EDGES), []);
  const edgeActive = (from: string) => hoveredNode === from;

  // measured boxes
  const [boxes, setBoxes] = useState<
    Record<string, { x: number; y: number; w: number; h: number; cx: number; cy: number }>
  >({});

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const crect = container.getBoundingClientRect();
      const next: Record<string, any> = {};
      NODES.forEach((n) => {
        const el = nodeRefs[n.id].current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = r.left - crect.left;
        const y = r.top - crect.top;
        const w = r.width;
        const h = r.height;
        next[n.id] = { x, y, w, h, cx: x + w / 2, cy: y + h / 2 };
      });
      setBoxes(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    NODES.forEach((n) => {
      if (nodeRefs[n.id].current) ro.observe(nodeRefs[n.id].current!);
    });
    return () => ro.disconnect();
  }, [nodeRefs]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const crect = container.getBoundingClientRect();

    canvas.style.width = `${crect.width}px`;
    canvas.style.height = `${CANVAS_H}px`;
    canvas.width = Math.floor(crect.width * dpr);
    canvas.height = Math.floor(CANVAS_H * dpr);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, crect.width, CANVAS_H);

    const drawArrowSegmented = (
      sx: number, sy: number,
      cx1: number, cy1: number,
      cx2: number, cy2: number,
      ex: number, ey: number,
      tHead: number,          // 0..1 position of head along the curve
      active: boolean
    ) => {
      // Visuals (slightly transparent)
      ctx.globalAlpha = active ? 0.55 : 0.42;

      const headPt = cubicEval(sx, sy, cx1, cy1, cx2, cy2, ex, ey, tHead);
      const grad = ctx.createLinearGradient(sx, sy, headPt.x, headPt.y);
      grad.addColorStop(0, "rgba(115, 253, 234, 0.60)");
      grad.addColorStop(1, "rgba(122, 209, 248, 0.45)");

      ctx.lineWidth = active ? 4.2 : 3.0;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = grad;

      // Split left cubic at tHead and draw only left side
      const left = splitCubicLeft(sx, sy, cx1, cy1, cx2, cy2, ex, ey, tHead);

      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.bezierCurveTo(left.cx1, left.cy1, left.cx2, left.cy2, left.ex, left.ey);
      ctx.stroke();

      // Arrowhead at headPt using tangent direction
      const tangent = cubicDeriv(sx, sy, cx1, cy1, cx2, cy2, ex, ey, tHead);
      const len = Math.hypot(tangent.dx, tangent.dy) || 1;
      const ux = tangent.dx / len, uy = tangent.dy / len;

      const size = 10, wing = 6;
      const bx = headPt.x - ux * size, by = headPt.y - uy * size;
      const ox = -uy, oy = ux;

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(headPt.x, headPt.y);
      ctx.lineTo(bx + ox * wing, by + oy * wing);
      ctx.lineTo(bx - ox * wing, by - oy * wing);
      ctx.closePath();
      ctx.fill();

      ctx.globalAlpha = 1;
    };

    // draw edges with heads guaranteed between the two tiles
    EDGES.forEach(([from, to]) => {
      const A = boxes[from];
      const B = boxes[to];
      if (!A || !B) return;

      const leftToRight = A.cx <= B.cx;

      // --- use anchors inside the cards instead of centers ---
      const sx = A.x + A.w * (leftToRight ? SOURCE_X_RATIO : 1 - SOURCE_X_RATIO);
      const sy = A.y + A.h * ANCHOR_Y_RATIO;

      const ex = B.x + B.w * (leftToRight ? TARGET_X_RATIO : 1 - TARGET_X_RATIO);
      const ey = B.y + B.h * ANCHOR_Y_RATIO;

      // smooth controls
      const midOffsetX = 0;
      let { cx1, cy1, cx2, cy2 } = cubicPoints(sx, sy, ex, ey, leftToRight, midOffsetX);

      // Fan multiple inbound lines to same target
      const key = `${from}->${to}`;
      const extra = midOffsets.get(key) ?? 0;
      cx1 += extra; cx2 += extra;

      // Find t where x(t) == gateX (vertical line between cards)
      const leftEdgeOfTo = B.x;
      const rightEdgeOfFrom = A.x + A.w;
      const gateX = (rightEdgeOfFrom + leftEdgeOfTo) / 2;

      // Binary search t on cubic x(t) ≈ gateX
      let lo = 0.02, hi = 0.98, t = leftToRight ? 0.85 : 0.15;
      for (let i = 0; i < 30; i++) {
        const mid = (lo + hi) / 2;
        const { x } = cubicEval(sx, sy, cx1, cy1, cx2, cy2, ex, ey, mid);
        if (leftToRight) {
          if (x < gateX) lo = mid; else hi = mid;
        } else {
          if (x > gateX) lo = mid; else hi = mid;
        }
        t = (lo + hi) / 2;
      }

      drawArrowSegmented(sx, sy, cx1, cy1, cx2, cy2, ex, ey, t, edgeActive(from));
    });
  }, [boxes, midOffsets, hoveredNode]);

  return (
    <div className={`w-full ${TOP_NUDGE_CLASS}`}>
      {/* Desktop / Tablet */}
      <div className="relative hidden md:block overflow-visible">
        <div
          ref={containerRef}
          className="relative mx-auto max-w-7xl overflow-visible"
          style={{ height: CANVAS_H }}
        >
          {/* Tile wrappers */}
          {NODES.map((n, i) => (
            <div
              key={n.id}
              ref={nodeRefs[n.id]}
              className="absolute"
              style={{
                left: `calc(${n.x}% + ${LEFT_NUDGE_PX}px)`,
                top: `${n.y}%`,
                width: CARD_W,
                height: CARD_H,
              }}
            >
              {/* background BELOW canvas */}
              <NodeBack active={hoveredNode === n.id} />
              {/* text ABOVE canvas */}
              <NodeFront n={n} idx={i} setHover={setHoveredNode} />
            </div>
          ))}

          {/* Canvas BETWEEN background (z-10) and text (z-90) → behind letters */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[30] pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile: simple vertical list */}
      <div className="md:hidden">
        <ol className="mx-auto max-w-md space-y-4">
          {NODES.map((n, idx) => (
            <li key={n.id} className="relative">
              {idx < NODES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-6 top-[calc(100%+2px)] h-6 w-px bg-emerald-300/40"
                />
              )}
              <Link
                href={n.href}
                aria-label={`Stage ${idx + 1}: ${n.title}`}
                className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-5
                           hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-fuchsia-500/70"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] text-[12px] font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="text-base font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]">
                      {n.title}
                    </div>
                    <p className="mt-1 text-[13px] text-white/70">{n.subtitle}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
