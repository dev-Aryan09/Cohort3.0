import React from "react";

const ProductsCard = ({ product, del }) => {
  return (
    <div className="p-1 border-2 h-fit rounded flex flex-col gap-2 bg-gray-200">
      <div className="w-50 h-50">
        <img src={product.image} alt="slipper men" />
      </div>
      <div>
        <h1 className="font-semibold">{product.title.substring(0, 15)}</h1>
        <p className="text-sm">Category</p>
        <p className="text-green-600">{product.price}</p>
      </div>
      <button
        onClick={() => {
          del(product.id);
        }}
        className="p-1 bg-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default ProductsCard;
