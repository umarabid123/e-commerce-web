import React from 'react';

const ProductCard = ({ product }) => {

  function handleUpdate(){

  }
  function handleDelete(){
    
  }
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      className="w-full h-48 object-cover object-center"
      src={product.image}
      alt={product.title}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
      <p className="mt-2 text-gray-600">{product.description}</p>
  
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-700 font-bold text-lg">${product.price}</span>
        <span className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
  
      <div className="mt-4 flex items-center">
        <span className="text-yellow-500">
          {[...Array(Math.floor(product.rating.rate))].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 inline-block fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.425 8.207 1.197-5.938 5.79L19.84 24 12 19.897 4.159 24l1.901-8.998-5.938-5.79 8.207-1.197L12 .587z" />
            </svg>
          ))}
        </span>
        <span className="ml-2 text-gray-700">
          {product.rating.rate} ({product.rating.count} reviews)
        </span>
      </div>
  
      {/* Update and Delete Buttons */}
      <div className="mt-6 flex justify-center gap-3 items-end">
        <button
          onClick={() => handleUpdate(product.id)} // Update function call
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(product.id)} // Delete function call
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default ProductCard;