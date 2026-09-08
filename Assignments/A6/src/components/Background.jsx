import React from "react";

const Background = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative overflow-hidden rounded-3xl h-100 bg-[#111] border border-white/8 p-8 sm:p-12 mb-10">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-volt/8 rounded-full blur-3xl" />
            <div className="absolute   bottom-0 left-1/4 w-60  bg-volt/4 rounded-full blur-3xl" />

            <div
              className="absolute  inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(200, 244, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(200, 244, 0) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
