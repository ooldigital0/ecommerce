import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Infinita Serendipia</h3>
            </Link>
            <div className='Categories'>
                <NavLink to="/category/ebook" activeClassName="active" exact>Guía Ayurveda</NavLink>
                <NavLink to="/category/astrologia" activeClassName="active" exact>Guía Astrología</NavLink>
                <NavLink to="/category/lunar" activeClassName="active" exact>Guía Lunar</NavLink>
                <NavLink to="/category/tzolkin" activeClassName="active" exact>Guía Tzolkin</NavLink>
            </div>
            <CartWidget/>
            <span></span>
        </nav>
    )
}

export default NavBar
