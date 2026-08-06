import { ArrowRight } from "lucide-react";
import ProductRowCard from "./ProductRowCard";
import { useNavigate } from "react-router";

const ProductListSection = ({ title, icon, products }) => {
  const navigate = useNavigate();
  return (
    <section className="rounded-[30px] bg-white p-6">
      {/* Header */}

      <div className="mb-4 flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2">
          {icon}

          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <button
          onClick={() => {
            navigate("/main/shop");
          }}
          className="flex items-center gap-2 text-xs font-semibold text-lime-500 hover:text-lime-600 cursor-pointer"
        >
          See All
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Products */}

      <div className="space-y-4">
        {products.slice(0, 5).map((product) => (
          <ProductRowCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
