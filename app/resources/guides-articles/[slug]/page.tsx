// app/resources/guides-articles/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Link from "next/link";
import { ArrowLeft, Clock, User, BookOpen } from "lucide-react";

export const runtime = "nodejs";
export const dynamic = "force-static";

type FM = {
  title?: string;
  slug?: string;
  description?: string;
  authors?: string[];
  category?: string;
  tags?: string[];
  level?: string;
  dateAdded?: string;
  readTime?: string;
  cover?: string;
  url?: string; // if set, we probably shouldn't be here—but it's okay
};

const DIR = path.join(process.cwd(), "app", "resources", "guides-articles");

function toStr(v: unknown, d = ""): string {
  return typeof v === "string" ? v : d;
}
function toArr(v: unknown): string[] {
  return Array.isArray(v) ? v.map(String) : [];
}

function calcReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 240)); // ~240 wpm
  return `${mins} min read`;
}

export async function generateStaticParams() {
  const files = (await fs.promises.readdir(DIR)).filter((f) => f.endsWith(".md"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(DIR, f), "utf8");
    const { data } = matter(raw);
    const fm = data as FM;
    const slug =
      toStr(fm.slug) ||
      f.replace(/\.md$/i, "").toLowerCase().replace(/[^a-z0-9\-]+/g, "-");
    
    // only generate internal pages for files with NO external url
    if (toStr(fm.url)) return null;
    return { slug };
  }).filter(Boolean) as { slug: string }[];
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const files = (await fs.promises.readdir(DIR)).filter((f) => f.endsWith(".md"));

  // find by frontmatter slug OR filename
  let filePath: string | null = null;
  for (const f of files) {
    const raw = await fs.promises.readFile(path.join(DIR, f), "utf8");
    const { data } = matter(raw);
    const fm = data as FM;
    const fmSlug =
      toStr(fm.slug) ||
      f.replace(/\.md$/i, "").toLowerCase().replace(/[^a-z0-9\-]+/g, "-");
    if (fmSlug === params.slug) {
      filePath = path.join(DIR, f);
      break;
    }
  }
  if (!filePath) {
    // fallback: 404
    return (
      <div className="max-w-3xl mx-auto p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link href="/resources/guides-articles" className="text-[#73FDEA]">Back to Guides & Articles</Link>
      </div>
    );
  }

  const raw = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as FM;

  const title = toStr(fm.title, params.slug);
  const author = toArr(fm.authors)[0]?.replace(/^@/, "") || "Unknown";
  const readTime = toStr(fm.readTime) || calcReadTime(content);
  const level = toStr(fm.level, "Beginner");
  const date = toStr(fm.dateAdded);
  const cover = toStr(fm.cover);

  return (
    <article className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/resources/guides-articles"
          className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Guides & Articles
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white">{title}</h1>
          {fm.description && (
            <p className="text-white/80 mt-2">{fm.description}</p>
          )}

          <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-1"><User className="h-4 w-4" />{author}</span>
            {date && <span>• {new Date(date).toLocaleDateString()}</span>}
            <span>• <Clock className="h-4 w-4 inline-block mr-1" />{readTime}</span>
            <span className="inline-flex items-center gap-1"><BookOpen className="h-4 w-4" />{level}</span>
          </div>

          {cover && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cover} alt="" className="w-full h-auto" />
            </div>
          )}
        </header>

        <div className="prose prose-invert max-w-none prose-pre:bg-[#0b0b0b] prose-code:before:content-[''] prose-code:after:content-['']">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "append" }],
                ],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}
