import { NavLink } from "react-router";
import Brand from "../components/Brand";
import { Home, Menu, ShoppingBag } from "lucide-react";

export default function Header() {
    return(
        <header className="Header">
            <Brand />
            <Nav />
        </header>
    );
}

export function Nav() {
    return (
        <nav className="Nav">
            <NavLink to="/" className="Link">
                <Home />
                Home
            </NavLink>
            <NavLink to="/menu" className="Link">
                <Menu />
                Menu
            </NavLink>
            <NavLink to="/cart" className="Link">
                <ShoppingBag />
                Cart
            </NavLink>
        </nav>
    );
}