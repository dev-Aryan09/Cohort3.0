import React from "react";

const StatCard = ({ icon, title, value, subtitle, bg, color }) => {
  return (
    <div className="rounded-3xl border border-white bg-[#151515] p-6 transition">
      <div className="flex  gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg}`}
        >
          {icon}
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-white">{value}</h2>

          <h3 className="text-sm text-neutral-400">{title}</h3>

          <p className="text-xs text-neutral-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
