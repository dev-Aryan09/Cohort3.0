import React, { useState } from "react";
import {
  AudioWaveform,
  Home,
  Compass,
  Library,
  Heart,
  Search,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Discover",
    path: "/discover",
    icon: Compass,
  },
  {
    label: "Library",
    path: "/library",
    icon: Library,
  },
  {
    label: "Liked Songs",
    path: "/liked",
    icon: Heart,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* ================= MOBILE NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-[#0B0E14]/90 backdrop-blur-xl lg:hidden">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* LOGO */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-950/30">
              <AudioWaveform size={21} />
            </div>

            <span className="text-xl font-bold tracking-[-0.04em]">
              tune<span className="text-violet-400">O</span>
            </span>
          </NavLink>

          {/* HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/8 bg-[#161B26]/70 text-[#F8FAFC] transition hover:bg-white/8"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* ================= MOBILE DROPDOWN ================= */}
        <div
          className={`overflow-hidden border-t border-white/8 bg-[#0B0E14]/95 transition-all duration-300 ${
            menuOpen
              ? "max-h-130 opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="px-4 py-4 sm:px-6">
            {/* SEARCH */}
            {/* <div className="relative mb-4">
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                type="search"
                placeholder="Search music..."
                className="h-11 w-full rounded-xl border border-white/8 bg-[#161B26]/70 pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#64748B] focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/10"
              />
            </div> */}

            {/* LINKS */}
            <nav className="space-y-1" aria-label="Mobile navigation">
              {navItems.map(({ label, path, icon: Icon }) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-violet-500/10 text-violet-400"
                        : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />

                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>

            {/* PROFILE */}
            <div className="mt-4 border-t border-white/8 pt-4">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-white/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                  <User size={17} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">Your Profile</p>

                  <p className="text-xs text-[#64748B]">View account</p>
                </div>
              </button>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-white/8 text-xs text-[#94A3B8] transition hover:bg-white/5 hover:text-white">
                  <Settings size={15} />
                  Settings
                </button>

                <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-white/8 text-xs text-[#94A3B8] transition hover:border-red-500/20 hover:bg-red-500/5 hover:text-red-400">
                  <LogOut size={15} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className="hidden border-l border-white/8 bg-[#0D1119] lg:block">
        <div className="sticky top-0 flex h-screen flex-col px-5 py-6">
          {/* LOGO */}
          <NavLink
            to="/"
            aria-label="tuneO home"
            className="mb-9 flex items-center gap-3 px-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-950/30">
              <AudioWaveform size={21} />
            </div>

            <span className="text-xl font-bold tracking-[-0.04em]">
              tune<span className="text-violet-400">O</span>
            </span>
          </NavLink>

          {/* SEARCH */}
          {/* <div className="relative mb-7">
            <Search
              size={17}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]"
            />

            <input
              type="search"
              placeholder="Search music..."
              aria-label="Search music"
              className="h-10 w-full rounded-xl border border-white/8 bg-[#161B26]/70 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-[#64748B] focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/10"
            />
          </div> */}

          {/* MENU LABEL */}
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#64748B]">
            Menu
          </p>

          {/* NAVIGATION */}
          <nav aria-label="Main navigation" className="space-y-1">
            {navItems.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-violet-500/10 text-violet-400"
                      : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />

                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          {/* PUSH PROFILE TO BOTTOM */}
          <div className="mt-auto">
            <div className="mb-4 h-px bg-white/8" />

            {/* PROFILE */}
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition hover:bg-white/5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                <User size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[#F8FAFC]">
                  Your Profile
                </p>

                <p className="truncate text-xs text-[#64748B]">View account</p>
              </div>
            </button>

            {/* BOTTOM ACTIONS */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                aria-label="Settings"
                className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/8 text-xs text-[#94A3B8] transition hover:bg-white/5 hover:text-white"
              >
                <Settings size={15} />
                Settings
              </button>

              <button
                type="button"
                aria-label="Logout"
                className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/8 text-xs text-[#94A3B8] transition hover:border-red-500/20 hover:bg-red-500/5 hover:text-red-400"
              >
                <LogOut size={15} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
