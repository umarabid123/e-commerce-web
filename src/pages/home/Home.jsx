import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/product_card/ProductCrad'
import axios from 'axios'

const Home = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const cardApis = async () => {
            const cardData = await fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProductData(json))
                
                console.log("product Data: ", productData);
                
        }

    cardApis()
    }, [])

    return (
        <div className='flex justify-between gap-y-10 flex-wrap'>
            {productData.map((item, i) => {
                return (
                    <ProductCard product={item} key={i} />
                )
            })}
        </div>
    )
}

export default Home