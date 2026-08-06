import { ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router";

// data/categories.js

const categories = [
  {
    id: 1,
    name: "Men's Clothing",
    icon: "📦",
    items: 4,
  },
  {
    id: 2,
    name: "Women's Clothing",
    icon: "📦",
    items: 6,
  },
  {
    id: 3,
    name: "Jewelery",
    icon: "📦",
    items: 4,
  },
  {
    id: 4,
    name: "Electronics",
    icon: "💻",
    items: 6,
  },
];

const CategorySection = () => {
  const navigate = useNavigate();
  return (
    <section>
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Shop by Category</h2>

        <button
          onClick={() => {
            navigate("/main/shop");
          }}
          className="flex items-center gap-2 text-sm font-semibold text-lime-400 hover:text-lime-300"
        >
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Grid */}

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
