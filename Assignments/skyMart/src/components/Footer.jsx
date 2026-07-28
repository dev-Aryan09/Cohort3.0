import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d]">
      <div className="mx-auto flex h-28 max-w-7xl flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-semibold text-neutral-400">
          Sky<span className="text-lime-400">Mart</span>
        </h2>

        <p className="mt-2 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} SkyMart • Built with{" "}
          <span className="text-neutral-400">React + Tailwindcss + axios</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
