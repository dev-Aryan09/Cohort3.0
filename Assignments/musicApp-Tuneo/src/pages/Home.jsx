import React from "react";
import {
  Play,
  Pause,
  Heart,
  MoreHorizontal,
  Clock3,
  ChevronRight,
  Sparkles,
  Music2,
  Headphones,
  Radio,
  ListMusic,
} from "lucide-react";

const recentlyPlayed = [
  {
    id: 1,
    title: "Midnight Drive",
    artist: "Neon Echo",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "After Hours",
    artist: "Velvet Sky",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Lost in Rhythm",
    artist: "Nova Pulse",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Blue Lights",
    artist: "Coastline",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80",
  },
];

const playlists = [
  {
    id: 1,
    title: "Late Night Coding",
    description: "Focus beats for deep work.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Daily Mix",
    description: "A mix based on your recent listening.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Chill Frequency",
    description: "Soft sounds for a slower mood.",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=500&q=80",
  },
];

const trendingTracks = [
  {
    id: 1,
    title: "Electric Heart",
    artist: "Luna Vale",
    album: "Pulse",
    duration: "3:42",
    image:
      "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 2,
    title: "Sunset Avenue",
    artist: "Kairo",
    album: "City Lights",
    duration: "4:08",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 3,
    title: "Static Dreams",
    artist: "Orbit",
    album: "Frequency",
    duration: "3:27",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 4,
    title: "Golden Noise",
    artist: "Echo Lane",
    album: "Reflections",
    duration: "2:58",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=120&q=80",
  },
];

const Home = () => {
  const isPlaying = false;

  const handlePlay = () => {
    // Your audio logic
  };

  const handleLike = () => {
    // Your like logic
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] px-4 py-6 text-[#F8FAFC] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-350 space-y-10">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#161B26]/70 p-6 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#00F5D4]/10 blur-[110px]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
                <Sparkles size={14} />
                Made for your mood
              </div>

              <p className="mb-2 text-sm font-medium text-[#94A3B8]">
                Good afternoon
              </p>

              <h1 className="max-w-2xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Welcome back.
                <span className="block text-[#94A3B8]">
                  What do you want to hear?
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-5 text-[#94A3B8]">
                Jump back into your recent tracks or discover something new
                based on what you have been listening to.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="flex h-11 items-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-500 cursor-pointer"
                >
                  <Play size={17} fill="currentColor" />
                  Play something
                </button>

                <button
                  type="button"
                  className="flex h-11 items-center gap-2 rounded-full border border-white/8 bg-white/4 px-5 text-sm font-medium text-[#F8FAFC] transition hover:bg-white/8 cursor-pointer"
                >
                  <Radio size={17} />
                  Start radio
                </button>
              </div>
            </div>

            {/* RIGHT QUICK ACTIONS */}
            <div className="grid grid-cols-2 gap-3">
              <button className="group rounded-2xl border border-white/8 bg-[#0B0E14]/40 p-4 text-left transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-[#161B26]">
                <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                  <Music2 size={20} />
                </div>

                <p className="text-sm font-semibold text-white">Your Library</p>

                <p className="mt-1 text-xs text-[#64748B]">
                  Based on your taste
                </p>
              </button>

              <button className="group rounded-2xl border border-white/8 bg-[#0B0E14]/40 p-4 text-left transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-[#161B26]">
                <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00F5D4]/10 text-[#00F5D4]">
                  <Headphones size={20} />
                </div>

                <p className="text-sm font-semibold text-white">Continue</p>

                <p className="mt-1 text-xs text-[#64748B]">
                  Pick up where you left
                </p>
              </button>

              <button className="group rounded-2xl border border-white/8 bg-[#0B0E14]/40 p-4 text-left transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-[#161B26]">
                <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F72585]/10 text-[#F72585]">
                  <Heart size={20} />
                </div>

                <p className="text-sm font-semibold text-white">Liked Songs</p>

                <p className="mt-1 text-xs text-[#64748B]">Your favorites</p>
              </button>

              <button className="group rounded-2xl border border-white/8 bg-[#0B0E14]/40 p-4 text-left transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-[#161B26]">
                <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300">
                  <ListMusic size={20} />
                </div>

                <p className="text-sm font-semibold text-white">Playlists</p>

                <p className="mt-1 text-xs text-[#64748B]">Your collections</p>
              </button>
            </div>
          </div>
        </section>

        {/* ================= RECENTLY PLAYED ================= */}
        <section>
          <SectionHeading
            title="Recently played"
            subtitle="Jump back into what you were listening to."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {recentlyPlayed.map((track) => (
              <article
                key={track.id}
                className="group rounded-2xl border border-white/6 bg-[#161B26]/55 p-3 transition duration-300 hover:-translate-y-1 hover:border-white/12 hover:bg-[#1A202C]"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={track.image}
                    alt={`${track.title} cover`}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={`Play ${track.title}`}
                    className="absolute bottom-3 right-3 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-violet-600 text-white opacity-0 shadow-xl shadow-black/30 transition duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    {isPlaying ? (
                      <Pause
                        size={18}
                        fill="currentColor"
                        className="cursor-pointer"
                      />
                    ) : (
                      <Play
                        size={18}
                        fill="currentColor"
                        className="cursor-pointer"
                      />
                    )}
                  </button>
                </div>

                <div className="px-1 pb-1 pt-3">
                  <h3 className="truncate text-sm font-semibold text-white">
                    {track.title}
                  </h3>

                  <p className="mt-1 truncate text-xs text-[#94A3B8]">
                    {track.artist}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= MADE FOR YOU ================= */}
        <section>
          <SectionHeading
            title="Made for you"
            subtitle="Playlists shaped around your listening habits."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {playlists.map((playlist) => (
              <article
                key={playlist.id}
                className="group flex gap-4 rounded-2xl border border-white/6 bg-[#161B26]/50 p-3 transition hover:border-white/12 hover:bg-[#1A202C]"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={playlist.image}
                    alt={`${playlist.title} playlist`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-violet-400">
                    tuneO mix
                  </p>

                  <h3 className="truncate text-base font-semibold">
                    {playlist.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#94A3B8]">
                    {playlist.description}
                  </p>

                  <button
                    type="button"
                    className="mt-3 flex w-fit items-center gap-1.5 text-xs font-medium text-violet-400 hover:text-violet-300 cursor-pointer"
                  >
                    Open playlist
                    <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= TRENDING TRACKS ================= */}
        <section>
          <SectionHeading
            title="Trending now"
            subtitle="Tracks getting attention right now."
          />

          <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#161B26]/45">
            {/* TABLE HEADER */}
            <div className="hidden grid-cols-[40px_minmax(0,1.5fr)_minmax(120px,1fr)_80px_90px] items-center gap-4 border-b border-white/6 px-5 py-3 text-xs uppercase tracking-widest text-[#64748B] md:grid">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <span>
                <Clock3 size={15} />
              </span>
              <span />
            </div>

            <div>
              {trendingTracks.map((track, index) => (
                <article
                  key={track.id}
                  className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/5 px-4 py-3 transition last:border-none hover:bg-white/4 md:grid-cols-[40px_minmax(0,1.5fr)_minmax(120px,1fr)_80px_90px] md:gap-4 md:px-5"
                >
                  {/* NUMBER / PLAY */}
                  <div className="flex items-center justify-center text-sm text-[#64748B]">
                    <span className="group-hover:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <button
                      type="button"
                      onClick={handlePlay}
                      className="hidden text-violet-400 group-hover:block"
                      aria-label={`Play ${track.title}`}
                    >
                      <Play
                        size={17}
                        fill="currentColor"
                        className="cursor-pointer"
                      />
                    </button>
                  </div>

                  {/* TRACK */}
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={track.image}
                      alt={`${track.title} artwork`}
                      className="h-11 w-11 shrink-0 rounded-lg object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-white">
                        {track.title}
                      </h3>

                      <p className="mt-0.5 truncate text-xs text-[#94A3B8]">
                        {track.artist}
                      </p>
                    </div>
                  </div>

                  {/* ALBUM */}
                  <p className="hidden truncate text-sm text-[#94A3B8] md:block">
                    {track.album}
                  </p>

                  {/* DURATION */}
                  <span className="hidden font-mono text-xs tabular-nums text-[#64748B] md:block">
                    {track.duration}
                  </span>

                  {/* ACTIONS */}
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      onClick={handleLike}
                      aria-label={`Like ${track.title}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white/5 hover:text-[#F72585]"
                    >
                      <Heart size={16} />
                    </button>

                    <button
                      type="button"
                      aria-label={`More options for ${track.title}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white/5 hover:text-white"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
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
        className="hidden items-center gap-1 text-xs font-medium text-[#94A3B8] transition hover:text-violet-400 sm:flex cursor-pointer"
      >
        See all
        <ChevronRight size={15} />
      </button>
    </div>
  );
};

export default Home;
