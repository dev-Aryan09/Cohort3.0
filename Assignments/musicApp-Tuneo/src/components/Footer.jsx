import React from "react";
import { AudioWaveform, Music2, Heart, Headphones, Radio } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const exploreLinks = [
    { label: "Discover", path: "/discover" },
    { label: "Trending", path: "/trending" },
    { label: "New Releases", path: "/new-releases" },
    { label: "Genres", path: "/genres" },
  ];

  const libraryLinks = [
    { label: "Your Library", path: "/library" },
    { label: "Liked Songs", path: "/liked" },
    { label: "Playlists", path: "/playlists" },
    { label: "Recently Played", path: "/recent" },
  ];

  const supportLinks = [
    { label: "Help", path: "/help" },
    { label: "Privacy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="border-t border-white/8 bg-[#090C11] text-[#94A3B8]">
      <div className="mx-auto max-w-375 px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* ================= BRAND ================= */}

          <div className="max-w-sm">
            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2.5"
              aria-label="tuneO home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
                <AudioWaveform size={21} className="text-white" />
              </div>

              <span className="text-xl font-bold tracking-[-0.04em] text-white">
                tune<span className="text-violet-400">O</span>
              </span>
            </Link>

            <p className="text-sm leading-6">
              Your space to discover, collect and enjoy the music that matches
              your mood.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-[#161B26] text-[#94A3B8] transition hover:border-violet-500/30 hover:text-violet-400"
              >
                <Music2 size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-[#161B26] text-[#94A3B8] transition hover:border-violet-500/30 hover:text-violet-400"
              >
                <Headphones size={17} />
              </a>

              <a
                href="#"
                aria-label="Music community"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-[#161B26] text-[#94A3B8] transition hover:border-violet-500/30 hover:text-violet-400"
              >
                <Radio size={17} />
              </a>
            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#F8FAFC]">
              Explore
            </h3>

            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm transition hover:text-violet-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= YOUR MUSIC ================= */}

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#F8FAFC]">
              Your Music
            </h3>

            <ul className="space-y-3">
              {libraryLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm transition hover:text-violet-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SUPPORT ================= */}

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#F8FAFC]">
              Support
            </h3>

            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm transition hover:text-violet-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 tuneO. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Built for people who
            <Heart size={13} className="fill-[#F72585] text-[#F72585]" />
            music
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
