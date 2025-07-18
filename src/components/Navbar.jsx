import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Cart App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/cart" className="nav-link">Cart</Link>
                <Link to="/user" className="nav-link">User</Link>
            </div>
        </nav>
    )
}

export default NavBar