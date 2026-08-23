import React from "react";
import {
  Search,
  Plus,
  Play,
  Heart,
  ListMusic,
  Disc3,
  Mic2,
  Clock3,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";

const filters = [
  { id: 1, label: "All" },
  { id: 2, label: "Playlists" },
  { id: 3, label: "Albums" },
  { id: 4, label: "Artists" },
];

const libraryItems = [
  {
    id: 1,
    type: "playlist",
    title: "Late Night Coding",
    subtitle: "Playlist • 32 songs",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    type: "album",
    title: "Midnight Pulse",
    subtitle: "Album • Neon Echo",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    type: "artist",
    title: "Luna Vale",
    subtitle: "Artist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    type: "playlist",
    title: "Chill Frequency",
    subtitle: "Playlist • 18 songs",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    type: "album",
    title: "Static Dreams",
    subtitle: "Album • Orbit",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    type: "artist",
    title: "Kairo",
    subtitle: "Artist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
];

const likedTracks = [
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
    title: "Blue Horizon",
    artist: "Mira",
    album: "Skyline",
    duration: "4:08",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 3,
    title: "Afterglow",
    artist: "Velvet Sky",
    album: "Nocturne",
    duration: "3:21",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=120&q=80",
  },
];

const Library = () => {
  const handlePlay = () => {};
  const handleLike = () => {};

  return (
    <main className="min-h-screen bg-[#0B0E14] px-4 py-6 text-[#F8FAFC] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-350 space-y-10">
        {/* HEADER */}
        <section>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium text-violet-400">
                Your collection
              </p>

              <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Your Library
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#94A3B8]">
                Everything you have saved, liked, followed, or created in one
                place.
              </p>
            </div>

            <button
              type="button"
              className="flex h-11 w-fit items-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-semibold transition hover:bg-violet-500"
            >
              <Plus size={17} />
              Create playlist
            </button>
          </div>

          {/* SEARCH + FILTERS */}
          <div className="mt-7 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full max-w-xl">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                type="search"
                placeholder="Search your library..."
                aria-label="Search library"
                className="h-11 w-full rounded-xl border border-white/8 bg-[#161B26]/70 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-[#64748B] hover:border-white/14 focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    index === 0
                      ? "bg-violet-600 text-white"
                      : "border border-white/8 bg-white/4 text-[#94A3B8] hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* LIBRARY GRID */}
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                Saved music
              </h2>

              <p className="mt-1 text-sm text-[#94A3B8]">
                Playlists, albums and artists you have saved.
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] transition hover:text-violet-400"
            >
              Recently added
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {libraryItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-white/6 bg-[#161B26]/55 p-3 transition duration-300 hover:-translate-y-1 hover:border-white/12 hover:bg-[#1A202C]"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`aspect-square w-full object-cover transition duration-500 group-hover:scale-105 ${
                      item.type === "artist" ? "rounded-full p-4" : ""
                    }`}
                  />

                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={`Play ${item.title}`}
                    className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-violet-600 text-white opacity-0 shadow-lg transition duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Play size={17} fill="currentColor" />
                  </button>
                </div>

                <div className="px-1 pb-1 pt-3">
                  <div className="mb-1 flex items-center gap-2">
                    {item.type === "playlist" && (
                      <ListMusic size={14} className="text-violet-400" />
                    )}

                    {item.type === "album" && (
                      <Disc3 size={14} className="text-[#00F5D4]" />
                    )}

                    {item.type === "artist" && (
                      <Mic2 size={14} className="text-[#F72585]" />
                    )}

                    <span className="text-[10px] uppercase tracking-[0.12em] text-[#64748B]">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="truncate text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 truncate text-xs text-[#94A3B8]">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LIKED SONGS */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
              Liked songs
            </h2>

            <p className="mt-1 text-sm text-[#94A3B8]">
              Tracks you have added to your favorites.
            </p>
          </div>

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

            {likedTracks.map((track, index) => (
              <article
                key={track.id}
                className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/5 px-4 py-3 transition last:border-none hover:bg-white/4 md:grid-cols-[40px_minmax(0,1.5fr)_minmax(120px,1fr)_80px_90px] md:gap-4 md:px-5"
              >
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
                    <Play size={17} fill="currentColor" />
                  </button>
                </div>

                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={track.image}
                    alt={track.title}
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

                <p className="hidden truncate text-sm text-[#94A3B8] md:block">
                  {track.album}
                </p>

                <span className="hidden font-mono text-xs tabular-nums text-[#64748B] md:block">
                  {track.duration}
                </span>

                <div className="flex items-center justify-end gap-1">
                  <button
                    type="button"
                    onClick={handleLike}
                    aria-label={`Unlike ${track.title}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#F72585] transition hover:bg-white/5"
                  >
                    <Heart size={16} fill="currentColor" />
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
        </section>
      </div>
    </main>
  );
};

export default Library;
