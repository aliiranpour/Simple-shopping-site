import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
    const {productid} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            return fetch("https://642b032ab11efeb759a8885a.mockapi.io/onlineshop" +  productid)
                    .then ((Response) => Response.json())
                    .then ((products) => setProducts(products))
        };
        fetchProducts();
    }, []);

    // console.log(products.name)
    return(
        <h1>{products.name}</h1>
    )
}

export default Singleproduct;