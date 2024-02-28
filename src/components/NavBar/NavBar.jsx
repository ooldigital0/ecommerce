import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Guía Lunar</button>
                <button>Guía Ayurveda</button>
                <button>Sesiones</button>
            </div>
            <CartWidget/>    
        </nav>
    )
}
export default NavBar
