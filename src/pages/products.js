import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Productcard from "../components/layout/Productcardlayout";
import '../assets/Style/Pages-style/Products.scss'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            return fetch("https://642b032ab11efeb759a8885a.mockapi.io/onlineshop")
                    .then ((Response) => Response.json())
                    .then ((products) => setProducts(products))
        };
        fetchProducts();
    }, []);

    return (
        <div className="productlist">
            {products?.map((p) => {
                return (
                    <Link to={`/products/${p.id}`} className="productcard">
                        <article key={p.id} >
                            <Productcard id={p.id} name={p.name} avatar={p.avatar} price={p.price} />
                        </article>
                    </Link>
                )
            })}
        </div>
    )
}

export default Products;