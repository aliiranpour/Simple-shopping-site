import { Outlet } from "react-router-dom"
import Searchbar from "../Searchbar/searchbar";

const ProductSharedLayout = () => {
    return(
        <>
            <Searchbar />
            <Outlet />
        </>
    )  
}

export default ProductSharedLayout;