import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slices/productSlice';

export default function AddProduct({ selectedProduct, onUpdateSubmit }) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg");
    const [category, setCategory] = useState("");

    useEffect(() => {
        // Pre-fill form fields if selectedProduct exists
        if (selectedProduct) {
            setTitle(selectedProduct.title);
            setPrice(selectedProduct.price);
            setDescription(selectedProduct.description);
            setImage(selectedProduct.image);
            setCategory(selectedProduct.category);
        }
    }, [selectedProduct]);

    const onClickAddProduct = () => {
        const product = {
            title,
            price,
            description,
            image,
            category,
        };
        console.log("product", product);
        
        // Check if updating or adding a new product
        if (selectedProduct) {
            onUpdateSubmit(product); // Call the update function
        } else {
            dispatch(addProduct(product)); // Add a new product
        }
        
        // Reset fields after submission
        setTitle("");
        setPrice("");
        setDescription("");
        setImage("https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg");
        setCategory("");
    };

    return (
        <div>
            <h1>{selectedProduct ? "Update Product" : "Add a Product"}</h1>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <button onClick={onClickAddProduct}>{selectedProduct ? "Update" : "Add"}</button>
        </div>
    );
}
