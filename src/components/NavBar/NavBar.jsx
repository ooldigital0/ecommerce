import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
            <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/ebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guía Ayurveda</NavLink>
                <NavLink to={`/category/ebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guía Astrología</NavLink>
                <NavLink to={`/category/ebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guía Lunar</NavLink>
                <NavLink to={`/category/ebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guía Tzolkin</NavLink>
                </div>
            <CartWidget/>    
        </nav>
    )
}
export default NavBar
