import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products action
export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("data in fetchProducts action", data);
        return data;
    }
);

// Delete product action
export const deleteProductApiAction = createAsyncThunk(
    "product/deleteProduct",
    async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log("data in deleteProduct action", data);
        return { id }; // Return the id of the deleted product for local update
    }
);

// Add product action
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (product) => {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log("data in addProduct action", data);
        return data;
    }
);

// Update product action
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ id, product }) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        console.log("data in updateProduct action", data);
        return data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        // Manually delete a product from the local state (if not using the API)
        deleteProduct: (state, action) => {
            const id = action.payload;
            console.log("id in deleteProduct reducer", id);
            state.products = state.products.filter((product) => product.id !== id);
        },
    },
    extraReducers: (builder) => {
        // Handle fetch products
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log("Fetched products in reducer", action.payload);
            state.products = action.payload;
        });

        // Handle delete product API response
        builder.addCase(deleteProductApiAction.fulfilled, (state, action) => {
            console.log("Delete product in reducer", action.payload);
            const { id } = action.payload;
            state.products = state.products.filter((product) => product.id !== id);
        });

        // Handle add product
        builder.addCase(addProduct.fulfilled, (state, action) => {
            console.log("Add product in reducer", action.payload);
            state.products = [action.payload, ...state.products]; // Prepend the new product
        });

        // Handle update product
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            console.log("Update product in reducer", action.payload);
            const updatedProduct = action.payload;
            const index = state.products.findIndex(product => product.id === updatedProduct.id);
            if (index !== -1) {
                // Update the product in the state array
                state.products[index] = updatedProduct;
            }
        });
    },
});

// Export the manual delete action for local updates
export const { deleteProduct } = productSlice.actions;

export default productSlice.reducer;

