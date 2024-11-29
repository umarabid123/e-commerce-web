import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import { deleteProduct, fetchProducts, updateProduct } from "../../store/slices/productSlice"; // Add deleteProduct action
import AddProduct from '../product/Product';
import ProductCard from '../../components/product_card/ProductCrad';

const Home = () => {
    const products = useSelector(store => store.productSlice.products);
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products]);

    // Function to handle the product update
    const handleUpdate = (product) => {
        setSelectedProduct(product); 
    };

    // Function to handle form submission for updates
    const handleUpdateSubmit = (updatedProductData) => {
        if (selectedProduct) {
            dispatch(updateProduct({ id: selectedProduct.id, product: updatedProductData }));
            setSelectedProduct(null); 
        }
    };

    // Function to handle product deletion with a toast notification
    const handleDelete = (id) => {
        dispatch(deleteProduct(id)); // Dispatch delete action
        toast.success('Product deleted!', { // Show success toast
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="home relative">
            <div className="video relative">
                <video src="/bg-video-3.mp4" loop autoPlay muted className="h-[110vh] w-[100%] object-cover"></video>
                <div className="overlay absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 drop-shadow-lg mb-6">
                        Discover Your Style
                    </h1>
                    <p className="text-lg md:text-2xl font-medium max-w-2xl text-white opacity-90 leading-relaxed mb-8">
                        Step into the world of fashion with our exclusive and trendy collections.
                        Unleash your inner stylist and redefine elegance with every outfit.
                    </p>
                    <a href="#shop" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-full hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
                        Shop Now
                    </a>
                </div>
            </div>

            {/* Product Section Heading */}
            <div className="text-center mt-12 mb-6">
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 drop-shadow-lg">
                    Our Exclusive Products
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    Explore the latest trends handpicked just for you.
                </p>
                <div className="mt-4">
                    <span className="inline-block w-24 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"></span>
                    <p className="text-sm text-gray-500 italic">
                        Discover fashion that speaks to your soul.
                    </p>
                </div>
            </div>

            {/* Add Product Buton */}
            <div className="flex justify-center mt-8">
                <Link    
                    to="/products" 
                    className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-4 px-10 rounded-full shadow-xl transform transition-all duration-500 ease-in-out hover:scale-110"
                >
                    Add Product
                </Link>
            </div>

            {/* Product Cards */}
            <div className="content-container relative flex gap-x-20 gap-y-10 flex-wrap p-4 mt-8">
                {products.map((item) => (
                    <ProductCard
                        product={item} 
                        key={item.id} 
                        onUpdate={() => handleUpdate(item)} 
                        onDelete={() => handleDelete(item.id)} // Pass the delete function
                    />
                ))}
            </div>

            {/* Add or Update Product Form */}
            {selectedProduct && (
                <AddProduct 
                    selectedProduct={selectedProduct} 
                    onUpdateSubmit={handleUpdateSubmit} 
                />
            )}
        </div>
    );
};

export default Home;





