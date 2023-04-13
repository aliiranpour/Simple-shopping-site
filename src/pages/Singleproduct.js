import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
    const { productid } = useParams();
    const [products, setProducts] = useState();
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`https://642b032ab11efeb759a8885a.mockapi.io/onlineshop/${productid}`)
            const data = await res.json();
            console.log(data)
            setProducts(data)
        };
        fetchProducts();
        console.log(products)
    }, []);
    return (
        <>
            {
                products ? (
                    <h1>{products?.name}</h1>
                    ) : (
                    <div>loading...</div>
                )
            }

        </>
    )
}

export default Singleproduct;