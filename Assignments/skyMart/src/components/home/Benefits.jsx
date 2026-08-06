import { Zap, ShieldCheck, BadgePercent } from "lucide-react";

import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <BenefitCard
          title="Fast Delivery"
          description="Same-day delivery on selected products."
          icon={<Zap className="text-lime-400" />}
          iconBg="bg-lime-950"
        />

        <BenefitCard
          title="Secure Payments"
          description="100% encrypted and protected checkout."
          icon={<ShieldCheck className="text-sky-400" />}
          iconBg="bg-sky-950"
        />

        <BenefitCard
          title="Best Prices"
          description="Great deals with price-match guarantee."
          icon={<BadgePercent className="text-purple-400" />}
          iconBg="bg-purple-950"
        />
      </div>
    </section>
  );
};

export default Benefits;
