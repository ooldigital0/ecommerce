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
                <button className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <NavLink to={`/category/ebook`}>Guía Ayurveda</NavLink>
                </button>
                <button className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <NavLink to={`/category/ebook`}>Guía Astrología</NavLink>
                </button>
                <button className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <NavLink to={`/category/ebook`}>Guía Lunar</NavLink>
                </button>
                <button className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <NavLink to={`/category/ebook`}>Guía Tzolkin</NavLink>
                </button>
            </div>
            <CartWidget/>
            <span></span>
        </nav>
    )
}

export default NavBar
