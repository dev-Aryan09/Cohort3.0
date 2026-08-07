import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";

const ProductRowCard = ({ product }) => {
  const { handleAddToCart } = useContext(MyStore);
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-2 transition-all duration-300 hover:border-lime-400 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-200">
          <img
            src={product.image}
            alt={product.title}
            className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
          />
        </div>

        <div>
          <h3 className="line-clamp-1 text-sm font-semibold text-neutral-800">
            {product.title}
          </h3>

          <p className="mt-1 text-sm font-semibold text-lime-500">
            ${product.price}
          </p>
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-100 transition hover:bg-lime-400 hover:text-black cursor-pointer"
        title="Add to cart"
      >
        <ShoppingBag size={14} />
      </button>
    </div>
  );
};

export default ProductRowCard;
