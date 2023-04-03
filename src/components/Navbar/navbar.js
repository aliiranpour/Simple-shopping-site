import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import '../../assets/Style/components-style/Nav-bar.scss'

const Navbar = () => {
    return(
        <Nav className="navbar"> 
            <NavLink to="/" className={({isActive}) =>isActive ? 'active ' : 'navitem'}>خانه</NavLink>
            <NavLink to="Products" className={({isActive}) =>isActive ? 'active ' : 'navitem'}>محصولات</NavLink>
            <NavLink to="About-us" className={({isActive}) =>isActive ? 'active ' : 'navitem'}>درباره ما</NavLink>
            <NavLink to="Call-us" className={({isActive}) =>isActive ? 'active ' : 'navitem'}>تماس با ما</NavLink>
        </Nav>
    )
}

export default Navbar;