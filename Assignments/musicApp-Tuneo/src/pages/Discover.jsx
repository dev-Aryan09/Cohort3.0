import React from "react";
import {
  Search,
  Play,
  Heart,
  ChevronRight,
  Sparkles,
  Music2,
  Flame,
  Disc3,
  Radio,
  Headphones,
} from "lucide-react";

const genres = [
  {
    id: 1,
    name: "Pop",
    emoji: "✨",
    accent: "from-pink-500/25 to-violet-500/10",
  },
  {
    id: 2,
    name: "Hip-Hop",
    emoji: "🎤",
    accent: "from-orange-500/20 to-red-500/10",
  },
  {
    id: 3,
    name: "Rock",
    emoji: "🎸",
    accent: "from-red-500/20 to-zinc-500/10",
  },
  {
    id: 4,
    name: "Chill",
    emoji: "🌙",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: 5,
    name: "Electronic",
    emoji: "⚡",
    accent: "from-violet-500/25 to-fuchsia-500/10",
  },
  {
    id: 6,
    name: "Jazz",
    emoji: "🎷",
    accent: "from-amber-500/20 to-yellow-500/10",
  },
];

const featuredPlaylists = [
  {
    id: 1,
    title: "Neon Nights",
    subtitle: "Late night electronic energy.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Fresh Finds",
    subtitle: "New sounds worth discovering.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Slow Sundays",
    subtitle: "Soft melodies for quiet moments.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
  },
];

const artists = [
  {
    id: 1,
    name: "Nova Ray",
    genre: "Alt Pop",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Kairo",
    genre: "Electronic",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Luna Vale",
    genre: "Indie",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Echo Lane",
    genre: "R&B",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
];

const newReleases = [
  {
    id: 1,
    title: "Static Dreams",
    artist: "Orbit",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Blue Horizon",
    artist: "Mira",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Afterglow",
    artist: "Velvet Sky",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Pulse",
    artist: "Neon Echo",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80",
  },
];

const Discover = () => {
  const handlePlay = () => {
    // Your playback logic
  };

  const handleLike = () => {
    // Your like logic
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] px-4 py-6 text-[#F8FAFC] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-350 space-y-10">
        {/* ================= HEADER ================= */}
        <section>
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-violet-400">
              <Sparkles size={16} />
              Explore tuneO
            </div>

            <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Discover your next favorite sound
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#94A3B8]">
              Browse new releases, trending artists, genres and playlists made
              for every kind of mood.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative max-w-2xl">
            <Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
            />

            <input
              type="search"
              placeholder="Search artists, tracks, albums or genres..."
              aria-label="Search music"
              className="h-12 w-full rounded-2xl border border-white/8 bg-[#161B26]/70 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-[#64748B] hover:border-white/[0.14] focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/10"
            />
          </div>
        </section>

        {/* ================= FEATURED BANNER ================= */}
        <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-violet-700/25 via-[#161B26]/80 to-[#00F5D4]/10 p-6 sm:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
                <Flame size={14} />
                Trending collection
              </div>

              <h2 className="max-w-xl text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Sounds everyone is playing right now
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-[#94A3B8]">
                A rotating collection of popular tracks, breakout artists and
                fresh releases.
              </p>

              <button
                type="button"
                className="mt-6 flex h-11 items-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-semibold transition hover:bg-violet-500"
              >
                <Play size={17} fill="currentColor" />
                Play collection
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/8 bg-white/4">
                <Disc3 size={40} className="text-violet-400" />
              </div>

              <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/8 bg-white/4">
                <Radio size={40} className="text-[#00F5D4]" />
              </div>

              <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/8 bg-white/4">
                <Headphones size={40} className="text-[#F72585]" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= GENRES ================= */}
        <section>
          <SectionHeading
            title="Browse by genre"
            subtitle="Find a sound that matches your mood."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
            {genres.map((genre) => (
              <button
                key={genre.id}
                type="button"
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br ${genre.accent} p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-white/16`}
              >
                <span className="text-3xl">{genre.emoji}</span>

                <h3 className="mt-8 text-sm font-semibold text-white">
                  {genre.name}
                </h3>

                <p className="mt-1 text-xs text-[#94A3B8]">
                  Explore {genre.name}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* ================= FEATURED PLAYLISTS ================= */}
        <section>
          <SectionHeading
            title="Featured playlists"
            subtitle="Curated collections worth exploring."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredPlaylists.map((playlist) => (
              <article
                key={playlist.id}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-[#161B26]/60 transition hover:-translate-y-1 hover:border-white/[0.14]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={playlist.image}
                    alt={`${playlist.title} playlist`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={`Play ${playlist.title}`}
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-white shadow-xl transition hover:scale-105 hover:bg-violet-500"
                  >
                    <Play size={18} fill="currentColor" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-white">{playlist.title}</h3>

                  <p className="mt-1 text-sm text-[#94A3B8]">
                    {playlist.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= TRENDING ARTISTS ================= */}
        <section>
          <SectionHeading
            title="Trending artists"
            subtitle="Artists gaining attention right now."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {artists.map((artist) => (
              <article
                key={artist.id}
                className="group rounded-2xl border border-white/6 bg-[#161B26]/50 p-4 text-center transition hover:-translate-y-1 hover:border-white/12 hover:bg-[#1A202C]"
              >
                <div className="mx-auto aspect-square max-w-45 overflow-hidden rounded-full">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-white">
                  {artist.name}
                </h3>

                <p className="mt-1 text-xs text-[#94A3B8]">{artist.genre}</p>

                <button
                  type="button"
                  className="mt-4 rounded-full border border-white/8 px-4 py-2 text-xs font-medium text-[#94A3B8] transition hover:border-violet-500/30 hover:text-violet-400"
                >
                  View artist
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ================= NEW RELEASES ================= */}
        <section>
          <SectionHeading
            title="New releases"
            subtitle="Fresh music added recently."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {newReleases.map((release) => (
              <article
                key={release.id}
                className="group rounded-2xl border border-white/6 bg-[#161B26]/55 p-3 transition hover:-translate-y-1 hover:border-white/12 hover:bg-[#1A202C]"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={release.image}
                    alt={`${release.title} cover`}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <button
                      type="button"
                      onClick={handleLike}
                      aria-label={`Like ${release.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:text-[#F72585]"
                    >
                      <Heart size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label={`Play ${release.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white transition hover:scale-105 hover:bg-violet-500"
                    >
                      <Play size={16} fill="currentColor" />
                    </button>
                  </div>
                </div>

                <div className="px-1 pb-1 pt-3">
                  <h3 className="truncate text-sm font-semibold text-white">
                    {release.title}
                  </h3>

                  <p className="mt-1 truncate text-xs text-[#94A3B8]">
                    {release.artist}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
          {title}
        </h2>

        <p className="mt-1 text-sm text-[#94A3B8]">{subtitle}</p>
      </div>

      <button
        type="button"
        className="hidden items-center gap-1 text-xs font-medium text-[#94A3B8] transition hover:text-violet-400 sm:flex"
      >
        See all
        <ChevronRight size={15} />
      </button>
    </div>
  );
};

export default Discover;
