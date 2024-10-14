import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductApiAction } from '../../store/slices/productSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product, onUpdate }) => {
  const dispatch = useDispatch();

  // Handle Delete Toast notification after successful dispatch
  const handleDelete = (id) => {
    dispatch(deleteProductApiAction(id))
       
  };

  return (
    <div className="relative">
      {/* Toast Container for notifications */}
      <ToastContainer />

      {/* Product Card with 3D-like animations */}
      <div
        className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6 transition-all duration-700 ease-in-out transform hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:opacity-95 hover:translate-y-1"
        style={{ perspective: '1000px' }}
      >
        <img
          className="w-full h-48 object-cover object-center transition-transform duration-500 hover:scale-110 hover:rotate-y-6 hover:translate-z-5"
          src={product?.image}
          alt={product?.title}
          style={{ transformStyle: 'preserve-3d' }}
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
            {product?.title}
          </h2>
          <p className="mt-2 text-gray-600">{product?.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-700 font-bold text-lg">${product?.price}</span>
            <span className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
              {product?.category}
            </span>
          </div>

          <div className="mt-4 flex items-center">
            <span className="text-yellow-500">
              {[...Array(Math.floor(product?.rating?.rate || 0))].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 inline-block fill-current transition-transform duration-300 hover:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.425 8.207 1.197-5.938 5.79L19.84 24 12 19.897 4.159 24l1.901-8.998-5.938-5.79 8.207-1.197L12 .587z" />
                </svg>
              ))}
            </span>
            <span className="ml-2 text-gray-700">
              {product?.rating?.rate || "No rating"} ({product?.rating?.count || 0} reviews)
            </span>
          </div>

          {/* Update and Delete Buttons */}
          <div className="mt-6 flex justify-center gap-6 items-end">
            <button
              onClick={onUpdate}
              className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-110"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-2 px-6 rounded-full shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-110"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

