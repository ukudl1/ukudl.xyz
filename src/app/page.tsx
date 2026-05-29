"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Icons ───────────────────────────────────────────────────────────────────

const IconTwitter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconTelegram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const IconYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconTikTok = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.56a8.27 8.27 0 0 0 4.84 1.54V6.66a4.85 4.85 0 0 1-1.07.03z" />
  </svg>
);

const IconDiscord = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.03.05a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconZap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IconDoc = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#00e67644", flexShrink: 0 }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const personalLinks = [
  { id: "tg-contact", href: "https://t.me/ukudl1",                      icon: <IconTelegram />,  label: "Telegram",  handle: "Contact",      desc: "Write me directly · questions & collabs" },
  { id: "tg-crypto",  href: "https://t.me/cryptoarrws",                 icon: <IconTelegram />,  label: "Telegram",  handle: "Crypto Arrow", desc: "Crypto signals · market analysis" },
  { id: "tg-slight",  href: "https://t.me/slightcrypto",                icon: <IconTelegram />,  label: "Telegram",  handle: "Slight",       desc: "Thoughts · web3" },
  { id: "tiktok",     href: "https://www.tiktok.com/@ukudl",            icon: <IconTikTok />,    label: "TikTok",    handle: "@ukudl",       desc: "Short videos" },
  { id: "youtube",    href: "https://www.youtube.com/@UKUDL",           icon: <IconYouTube />,   label: "YouTube",   handle: "@UKUDL",       desc: "Videos · crypto" },
  { id: "instagram",  href: "https://www.instagram.com/ukudl.1/",       icon: <IconInstagram />, label: "Instagram", handle: "@ukudl.1",     desc: "Photos" },
  { id: "discord",    href: "https://discord.gg/cbnpZqJJRF",            icon: <IconDiscord />,   label: "Discord",   handle: "ukudl",        desc: "Community · chat · collab" },
];

const professionalLinks = [
  { id: "linkedin",  href: "https://www.linkedin.com/in/rostislav-biellon-b94aa0273/", icon: <IconLinkedIn />, label: "LinkedIn", handle: "Rostislav Biellon", badge: "Open to work" },
  { id: "github-p",  href: "https://github.com/ZexusGovernance",                       icon: <IconGitHub />,   label: "GitHub",   handle: "ZexusGovernance" },
];

const zexusLinks = [
  { id: "zexus-web",  href: "https://zexus.xyz/",                                          icon: <IconGlobe />,    label: "Zexus Website", handle: "zexus.xyz",          badge: "Live" },
  { id: "zexus-app",  href: "https://app.zexus.xyz/",                                      icon: <IconZap />,      label: "Zexus App",     handle: "app.zexus.xyz",      badge: "Soon" },
  { id: "zexus-docs", href: "https://zexus-governance.gitbook.io/whitepaper",              icon: <IconDoc />,      label: "Whitepaper",    handle: "gitbook.io" },
  { id: "zexus-x",    href: "https://x.com/ZexusGovernance",                               icon: <IconTwitter />,  label: "Zexus on X",    handle: "@ZexusGovernance" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface CardProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle?: string;
  badge?: string;
  desc?: string;
  delay?: number;
  onTrack: () => void;
}

function Card({ href, icon, label, handle, badge, desc, delay = 0, onTrack }: CardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onTrack}
      className="fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="link-card flex items-center gap-3 px-5 py-4"
        style={{ background: "linear-gradient(135deg, #0d1a0d 0%, #0a130a 100%)", border: "1px solid #00e67633" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--green-primary), transparent)", opacity: 0.3, pointerEvents: "none" }} />
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center animate-pulse-glow"
          style={{ background: "var(--bg-dark)", border: "1px solid #00e67644", color: "var(--green-primary)" }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-[15px] text-white">{label}</span>
            {handle && <span className="badge">{handle}</span>}
            {badge && <span className="badge">{badge}</span>}
          </div>
          {desc && <p className="text-[12px] mt-0.5 truncate" style={{ color: "#555" }}>{desc}</p>}
        </div>
        <IconArrow />
      </div>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Tab = "personal" | "professional";

export default function Home() {
  const [tab, setTab] = useState<Tab>("personal");

  const track = (id: string) => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
    }).catch(() => {});
  };

  return (
    <main
      className="grid-bg min-h-screen flex flex-col items-center py-10 px-4 pb-12"
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] opacity-[0.12]"
        style={{
          background: "radial-gradient(ellipse at center, #00e676 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative z-10 w-full max-w-[420px] flex flex-col gap-5">
        {/* ── Profile ── */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="animate-float">
            <div className="avatar-ring rounded-full overflow-hidden" style={{ width: 90, height: 90 }}>
              <Image src="/UKUDL.png" alt="UKUDL" width={90} height={90} className="object-cover" priority />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-[22px] font-bold tracking-tight text-white">UKUDL</h1>
            <p className="text-[13px] mt-1" style={{ color: "#555" }}>Builder · Web3 · Crypto native</p>

            <div
              className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full"
              style={{ background: "#0d1a0d", border: "1px solid var(--border-green)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green-primary)" }} />
              <span className="text-[11px] font-semibold" style={{ color: "var(--green-primary)" }}>
                Available for collab
              </span>
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div
          className="flex gap-2 p-1 rounded-2xl"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)" }}
        >
          <button className={`tab-btn flex-1 ${tab === "personal" ? "active" : "inactive"}`} onClick={() => setTab("personal")}>
            Personal
          </button>
          <button className={`tab-btn flex-1 ${tab === "professional" ? "active" : "inactive"}`} onClick={() => setTab("professional")}>
            Professional
          </button>
        </div>

        {/* ── Personal ── */}
        {tab === "personal" && (
          <div key="personal" className="flex flex-col gap-4">

            {/* ── Featured link ── */}
            <div className="flex flex-col gap-2">
              <div className="section-label px-1">Featured</div>
              <a
                href="https://x.com/ukudlX"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("featured-twitter")}
                className="fade-up"
                style={{ animationDelay: "60ms" }}
              >
                <div
                  className="rounded-2xl p-5 relative overflow-hidden transition-all duration-200 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #0d1a0d 0%, #0a130a 100%)",
                    border: "1px solid #00e67644",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--green-primary), transparent)", opacity: 0.5 }} />
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse-glow"
                      style={{ background: "var(--bg-dark)", border: "1px solid #00e67644", color: "var(--green-primary)" }}
                    >
                      <IconTwitter />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[15px] text-white">Follow on X</span>
                        <span className="badge">@ukudlX</span>
                      </div>
                      <span className="text-[12px]" style={{ color: "#555" }}>Thoughts · crypto · builds</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#00e67644", flexShrink: 0 }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* ── Socials ── */}
            <div className="flex flex-col gap-3">
              <div className="section-label px-1">Socials</div>
              {personalLinks.map((l, i) => (
                <Card key={l.id} {...l} delay={i * 55} onTrack={() => track(l.id)} />
              ))}
            </div>

            {/* ── Code ── */}
            <div className="flex flex-col gap-3">
              <div className="section-label px-1">Code</div>
              <Card
                href="https://github.com/ukudl1"
                icon={<IconGitHub />}
                label="GitHub"
                handle="ukudl1"
                delay={0}
                onTrack={() => track("github")}
              />
            </div>

          </div>
        )}

        {/* ── Professional ── */}
        {tab === "professional" && (
          <div key="professional" className="flex flex-col gap-5">

            {/* ── Stats chips ── */}
            <div className="flex gap-2 justify-center flex-wrap fade-up" style={{ animationDelay: "0ms" }}>
              {[
                { label: "Since", value: "2019" },
                { label: "In Web3", value: "7 yrs" },
                { label: "Based in", value: "🇩🇪 Germany" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-4 py-2 rounded-2xl"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-green)", minWidth: 72 }}
                >
                  <span className="text-[17px] font-bold" style={{ color: "var(--green-primary)" }}>{s.value}</span>
                  <span className="text-[10px] font-medium" style={{ color: "#444", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <div className="section-label px-1">Profiles</div>
              {professionalLinks.map((l, i) => (
                <Card key={l.id} {...l} delay={i * 55} onTrack={() => track(l.id)} />
              ))}
            </div>

            {/* Zexus block */}
            <div className="flex flex-col gap-3">
              <div className="section-label px-1">Zexus Governance</div>

              {/* Project info card */}
              <div className="zexus-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center animate-pulse-glow flex-shrink-0"
                    style={{ background: "var(--bg-dark)", border: "1px solid #00e67644", color: "var(--green-primary)" }}
                  >
                    <IconZap />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[15px] text-white">Zexus Governance</span>
                      <span className="badge">WEB3</span>
                    </div>
                    <span className="text-[12px]" style={{ color: "#555" }}>Decentralized governance protocol</span>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>
                  On-chain governance infrastructure enabling DAOs to vote, propose, and execute decisions trustlessly on-chain.
                </p>
              </div>

              {zexusLinks.map((l, i) => (
                <Card key={l.id} {...l} delay={i * 55} onTrack={() => track(l.id)} />
              ))}
            </div>
          </div>
        )}

        {/* ── Footer ── */}
        <div className="flex items-center justify-center pt-2">
          <span className="text-[11px]" style={{ color: "#2a2a2a" }}>
            ukudl.xyz · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
