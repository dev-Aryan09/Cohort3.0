import { PackageSearch } from "lucide-react";

const NoProductsFound = ({ query, handleClear}) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      {/* Icon */}
      <div className="rounded-full p-6">
        <PackageSearch
          size={56}
          className="text-neutral-700"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-neutral-400">No products found</h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-sm text-neutral-700">
        No results found for{" "}
        <span className="font-semibold text-neutral-700">"{query}"</span>
      </p>

      {/* Button */}
      <button
        onClick={handleClear}
        className="mt-6 rounded-2xl border border-neutral-700  px-7 py-3 text-neutral-400 transition hover:border-lime-400 hover:bg-[#242424] cursor-pointer"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default NoProductsFound;
