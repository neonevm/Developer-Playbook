import Link from "next/link";
import { BookOpen, Code, Github, Twitter, MessageCircle, GraduationCap } from "lucide-react";
import DevJourneyDiagram from "./components/DevJourneyDiagram";

// Cards below the diagram
const contentTypes = [
  {
    title: "Curated Resources",
    description: "External resources like blog posts, videos, or documentation",
    icon: BookOpen,
    color: "from-[#24e4b3] to-[#E200F1]",
    href: "/resources/curated-links",
  },
  {
    title: "Guides & Articles",
    description: "Tutorials, deep dives, and personal dev journeys",
    icon: Code,
    color: "from-[#E200F1] to-[#8e1cf1]",
    href: "/resources/guides-articles",
  },
  {
    title: "Code Samples & Templates",
    description: "Snippets or GitHub links that help you bootstrap your projects or show implementation",
    icon: Github,
    color: "from-[#8e1cf1] to-[#340ceb]",
    href: "/resources/code-examples",
  },
  {
    title: "Courses & Grants",
    description: "Courses, bootcamps, grants, accelerator programs, and more growth opportunities",
    icon: GraduationCap,
    color: "from-[#340ceb] to-[#24e4b3]",
    href: "/resources/courses-grants",
  },
];

const featuredContributors = [
  { name: "@Jules_Gallen", role: "DevRel", twitter: "Jules_Gallen", avatar: "👨‍💻" },
  { name: "@mnedelchev_", role: "Solidity Team Lead", twitter: "mnedelchev_", avatar: "👨‍💻" },
  { name: "@Your Twitter", role: "Software Engineer", twitter: "link", avatar: "👨‍💻" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-white sm:text-5xl md:text-6xl mb-8">
              Developer&apos;s Playbook
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              Developer’s Playbook is a collection of resources that developers found genuinely helpful in their
              learning journeys. 
            </p>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              It’s open-source and community-driven — you can use it to learn, or contribute what
              helped you. Pick the stage you are at to find or add interesting resources.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Journey (the diagram) */}
      <section className="py-8 bg-black">
        {/* isolate + overflow-visible ensures arrows aren’t clipped and z-index behaves */}
        <div className="relative isolate overflow-visible">
          <DevJourneyDiagram />
        </div>
      </section>

      {/* What to contribute */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Want to contribute?</h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentTypes.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 text-center hover:bg-[#2a2a2a] transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-[#73FDEA] transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-white/80">{type.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured contributors */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-white">Backed by True Web3 Builders</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContributors.map((c) => (
              <div
                key={c.name}
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 text-center hover:bg-[#2a2a2a] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{c.avatar}</div>
                <h4 className="text-lg font-display font-semibold text-white mb-2">{c.name}</h4>
                <p className="text-white/80 mb-2">{c.role}</p>
                <div className="flex justify-center space-x-2">
                  <a
                    href={`https://twitter.com/${c.twitter}`}
                    className="text-white/80 hover:text-[#73FDEA] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Ready for extra perks?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contributing to this project is also a way to build your GitHub proof-of-work through more commits and get access to the private Discord
              channel with mentorship, resume reviews, grant advice, and other actionable tactics to help you grow as a
              dev or tech founder.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/neonlabsorg/Developer-Playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
            >
              Contribute Now
            </a>
            <a
              href="https://discord.gg/Y6E3FZAguZ"
              className="bg-white/20 border border-white/30 text-white hover:bg-white/30 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Developer&apos;s Playbook</h4>
              <p className="text-white/80">From devs, by devs, to devs. Building the future of blockchain development.</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Learning Journeys</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/beginner" className="hover:text-[#73FDEA] transition-colors duration-300">
                    Beginner Dev
                  </Link>
                </li>
                <li>
                  <Link href="/early-stage" className="hover:text-[#73FDEA] transition-colors duration-300">
                    Early Stage
                  </Link>
                </li>
                <li>
                  <Link href="/ethereum" className="hover:text-[#73FDEA] transition-colors duration-300">
                    Ethereum Dev
                  </Link>
                </li>
                <li>
                  <Link href="/solana" className="hover:text-[#73FDEA] transition-colors duration-300">
                    Solana Dev
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a
                    href="https://github.com/neonlabsorg/Developer-Playbook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#73FDEA] transition-colors duration-300"
                  >
                    Contribute
                  </a>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#73FDEA] transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <a href="https://discord.gg/Y6E3FZAguZ" className="hover:text-[#73FDEA] transition-colors duration-300">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/Neon_EVM" className="text-white/70 hover:text-[#73FDEA] transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/neonlabsorg/Developer-Playbook"
                  className="text-white/70 hover:text-[#73FDEA] transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © 2025 Neon EVM Developer&apos;s Playbook. Built with ❤️ by Neon EVM and the blockchain developer
              community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
