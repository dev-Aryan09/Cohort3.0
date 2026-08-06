const BenefitCard = ({ icon, title, description, iconBg, iconColor }) => {
  return (
    <div className="group rounded-2xl border border-white bg-[#151515] p-5">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-white">{title}</h3>

          <p className="mt-1 text-xs text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
