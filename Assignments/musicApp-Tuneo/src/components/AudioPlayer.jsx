import React from "react";
import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat2,
  Shuffle,
  Volume2,
  VolumeX,
  ListMusic,
  Heart,
  MoreHorizontal,
} from "lucide-react";

const AudioPlayer = () => {
  const isPlaying = false;
  const isMuted = false;
  const progress = 32;
  const volume = 70;

  const handlePlayPause = () => {
    // Your logic
  };
  const handlePrevious = () => {
    // Your logic
  };
  const handleNext = () => {
    // Your logic
  };
  const handleProgressChange = () => {
    // Your logic
  };
  const handleVolumeChange = () => {
    // Your logic
  };

  return (
    <section
      aria-label="Music player"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/8 bg-[#0B0E14]/95 px-3 py-3 backdrop-blur-2xl sm:px-4 lg:right-65"
    >
      <div className="mx-auto max-w-375">
        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {/* TRACK INFO */}
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80"
              alt="Current track cover"
              className="h-11 w-11 shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-white">
                Midnight Drive
              </h3>

              <p className="truncate text-xs text-[#94A3B8]">Neon Echo</p>
            </div>

            <button
              type="button"
              aria-label="Like current track"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white/5 hover:text-[#F72585]"
            >
              <Heart size={16} />
            </button>

            <button
              type="button"
              aria-label="More options"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white/5 hover:text-white"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* MAIN CONTROLS */}
          <div className="mt-3 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Shuffle"
              className="text-[#64748B] transition hover:text-white"
            >
              <Shuffle size={17} />
            </button>

            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous track"
              className="text-[#94A3B8] transition hover:text-white"
            >
              <SkipBack size={20} fill="currentColor" />
            </button>

            <button
              type="button"
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B0E14] transition hover:scale-105"
            >
              {isPlaying ? (
                <Pause size={19} fill="currentColor" />
              ) : (
                <Play size={19} fill="currentColor" className="ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next track"
              className="text-[#94A3B8] transition hover:text-white"
            >
              <SkipForward size={20} fill="currentColor" />
            </button>

            <button
              type="button"
              aria-label="Repeat"
              className="text-[#64748B] transition hover:text-white"
            >
              <Repeat2 size={17} />
            </button>
          </div>

          {/* PROGRESS */}
          <div className="mt-3 flex items-center gap-2">
            <span className="w-8 text-right font-mono text-[10px] tabular-nums text-[#64748B]">
              1:24
            </span>

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              aria-label="Track progress"
              className="player-slider h-1 flex-1 cursor-pointer appearance-none rounded-full bg-white/12"
            />

            <span className="w-8 font-mono text-[10px] tabular-nums text-[#64748B]">
              3:42
            </span>
          </div>

          {/* EXTRA CONTROLS */}
          <div className="mt-3 flex items-center justify-between border-t border-white/6 pt-3">
            <button
              type="button"
              aria-label="Open queue"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white/5 hover:text-white"
            >
              <ListMusic size={17} />
            </button>

            <div className="flex flex-1 items-center gap-2 px-3">
              <button
                type="button"
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="text-[#64748B] transition hover:text-white"
              >
                {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>

              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Volume"
                className="player-slider h-1 flex-1 cursor-pointer appearance-none rounded-full bg-white/12"
              />
            </div>

            <button
              type="button"
              aria-label="More options"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white/5 hover:text-white"
            >
              <MoreHorizontal size={17} />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden items-center gap-4 md:grid md:grid-cols-[minmax(180px,1fr)_minmax(320px,1.4fr)_minmax(180px,1fr)]">
          {/* TRACK INFO */}
          <div className="flex min-w-0 items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=150&q=80"
              alt="Current track cover"
              className="h-14 w-14 shrink-0 rounded-xl object-cover"
            />

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-[#F8FAFC]">
                Midnight Drive
              </h3>

              <p className="mt-0.5 truncate text-xs text-[#94A3B8]">
                Neon Echo
              </p>
            </div>

            <button
              type="button"
              aria-label="Like current track"
              className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#64748B] transition hover:bg-white/5 hover:text-[#F72585]"
            >
              <Heart size={16} />
            </button>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center gap-4">
              <button
                type="button"
                aria-label="Shuffle"
                className="text-[#64748B] hover:text-white"
              >
                <Shuffle size={17} />
              </button>

              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous track"
                className="text-[#94A3B8] hover:text-white"
              >
                <SkipBack size={20} fill="currentColor" />
              </button>

              <button
                type="button"
                onClick={handlePlayPause}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B0E14]"
              >
                {isPlaying ? (
                  <Pause size={19} fill="currentColor" />
                ) : (
                  <Play size={19} fill="currentColor" />
                )}
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next track"
                className="text-[#94A3B8] hover:text-white"
              >
                <SkipForward size={20} fill="currentColor" />
              </button>

              <button
                type="button"
                aria-label="Repeat"
                className="text-[#64748B] hover:text-white"
              >
                <Repeat2 size={17} />
              </button>
            </div>

            <div className="flex w-full max-w-xl items-center gap-3">
              <span className="w-9 text-right font-mono text-[11px] tabular-nums text-[#64748B]">
                1:24
              </span>

              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="player-slider h-1 flex-1 cursor-pointer appearance-none rounded-full bg-white/12"
              />

              <span className="w-9 font-mono text-[11px] tabular-nums text-[#64748B]">
                3:42
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-2">
            <button className="flex h-8 w-8 items-center justify-center text-[#64748B] hover:text-white">
              <MoreHorizontal size={18} />
            </button>

            <button className="flex h-8 w-8 items-center justify-center text-[#64748B] hover:text-white">
              <ListMusic size={18} />
            </button>

            <button className="flex h-8 w-8 items-center justify-center text-[#64748B] hover:text-white">
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="player-slider h-1 w-24 cursor-pointer appearance-none rounded-full bg-white/12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayer;
