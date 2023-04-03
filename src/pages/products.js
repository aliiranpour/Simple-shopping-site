import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () =>{
const [products , setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            const res = await fetch("https://642b032ab11efeb759a8885a.mockapi.io/onlineshop2");
            const data = await res.json();
            setProducts(data.products);
        };
        fetchProducts();
    } , [])
    return(
        <>
            {products.map(p =>{
                return(
                    <article key={products.id}>
                        <h5>{products.name}</h5>
                        <Link to= {`/products/${products.id}`}>more info</Link>
                    </article>
                )
            })}
        </>
    )
}

export default Products;