import Home from '../pages/Home'
import Products from '../pages/products.js'
import Aboutus from '../pages/About-us'
import Callus from '../pages/Call-us'
import SharedLayout from '../components/layout/Sharedlayout'
import ProductSharedLayout from '../components/layout/ProductsSharedlayout'
import Singleproduct from '../pages/Singleproduct'
import Dashboard from '../pages/Dashboard'
const { Routes, Route } = require("react-router-dom")

const WebRoutes = () => {
    return(
        <Routes>
            <Route>
                <Route path="/" element={<SharedLayout/>} >
                    <Route index element={<Home />} />
                    <Route path="/products" element={<ProductSharedLayout />} >
                        <Route index element={<Products />} />
                        <Route path=":productid" element={<Singleproduct />} />
                    </Route>
                    <Route path='/about-us' element={<Aboutus />} />
                    <Route path="/call-us" element={<Callus />} />
                </Route>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="*" element={<p>This page not found</p>} />
            </Route>
        </Routes>
    )
}

export default WebRoutes;