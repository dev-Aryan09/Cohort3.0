import { Package, ShoppingCart, Star, Tag } from "lucide-react";
import StatCard from "./StatCard";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";

const HeroStats = () => {
  const { totalCartPrice, totalCartQuantity } = useContext(MyStore);
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        icon={<Package className="text-lime-400" />}
        value={totalCartQuantity}
        title="Cart Items"
        subtitle="In your bag"
        bg="bg-lime-950"
      />

      <StatCard
        icon={<ShoppingCart className="text-sky-400" />}
        value={`$${totalCartPrice / 100}`}
        title="Cart Value"
        subtitle="Ready to checkout"
        bg="bg-sky-950"
      />

      <StatCard
        icon={<Star className="text-yellow-400" />}
        value="5"
        title="Top Rated"
        subtitle="Highly rated"
        bg="bg-yellow-950"
      />

      <StatCard
        icon={<Tag className="text-purple-400" />}
        value="4"
        title="Categories"
        subtitle="To explore"
        bg="bg-purple-950"
      />
    </section>
  );
};

export default HeroStats;
