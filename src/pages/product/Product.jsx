import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../store/slices/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = ({ product }) => {
	const [formData, setFormData] = useState({
		title: "",
		price: "",
		description: "",
		image: "",
		category: "",
		rating: {
			rate: "",
			count: "",
		},
	});

	const dispatch = useDispatch();

	// Populate form with product data when product prop changes
	useEffect(() => {
		if (product) {
			setFormData({
				title: product.title,
				price: product.price,
				description: product.description,
				image: product.image,
				category: product.category,
				rating: {
					rate: product.rating.rate,
					count: product.rating.count,
				},
			});
		}
	}, [product]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "rate" || name === "count") {
			setFormData({
				...formData,
				rating: {
					...formData.rating,
					[name]: value,
				},
			});
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (product) {
			// Dispatch the action to update the product
			dispatch(updateProduct({ ...formData, id: product.id }));
			// Show success toast notification for update
			toast.success("Product updated successfully!");
		} else {
			// Dispatch the action to add the product
			dispatch(addProduct(formData));
			// Show success toast notification for add
			toast.success("Product added successfully!");
		}

		// Clear the form
		setFormData({
			title: "",
			price: "",
			description: "",
			image: "",
			category: "",
			rating: {
				rate: "",
				count: "",
			},
		});
	};

	return (
		<div className="add-product-container mx-auto p-8">
			<h2 className="text-3xl font-extrabold mb-6 text-gray-700">
				{product ? "Update Product" : "Add a New Product"}
			</h2>

			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			>
				{/* Product Title */}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="title"
					>
						Product Title
					</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>

				{/* Product Price */}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="price"
					>
						Price
					</label>
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>

				{/* Product Description */}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="description"
					>
						Description
					</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					></textarea>
				</div>

				{/* Product Image */}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="image"
					>
						Image URL
					</label>
					<input
						type="text"
						name="image"
						value={formData.image}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				{/* Category */}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="category"
					>
						Category
					</label>
					<input
						type="text"
						name="category"
						value={formData.category}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				{/* Rating - Rate */}
				{/* <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rate">
                        Rating (Rate)
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        name="rate"
                        value={formData.rating.rate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div> */}

				{/* Rating - Count */}
				{/* <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="count">
                        Rating (Count of Reviews)
                    </label>
                    <input
                        type="number"
                        name="count"
                        value={formData.rating.count}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div> */}

				{/* Submit Button */}
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:shadow-outline"
					>
						{product ? "Update Product" : "Add Product"}
					</button>
				</div>
			</form>

			{/* Toast Container */}
			<ToastContainer />
		</div>
	);
};

export default AddProduct;
