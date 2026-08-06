import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  return (
    <div className="group cursor-pointer rounded-3xl bg-white px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-3 text-4xl transition group-hover:scale-110">
          {category.icon}
        </div>

        <h3 className="font-semibold text-neutral-800">{category.name}</h3>

        <p className="mt-1 text-sm text-neutral-400">{category.items} items</p>
      </div>

      <div className="mt-3 flex justify-center opacity-0 transition group-hover:opacity-100">
        <ArrowRight size={18} className="text-lime-500" />
      </div>
    </div>
  );
};

export default CategoryCard;
