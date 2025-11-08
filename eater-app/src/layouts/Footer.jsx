import { NavLink } from "react-router";
import { Nav } from "./Header";

export default function Footer() {
    return(
        <footer className="Footer">
            <Nav className="FooterNav" />
            <SocialLinks />
        </footer>
    );
}


function SocialLinks() {
    return(
        <div className="SocialLinks">
            <div>
                <a href="https://facebook.com" className="">Facebook</a>
                <a href="https://twitter.com" className="">Twitter</a>
                <a href="https://instagram.com" className="">Instagram</a>
            </div>
            <p className="Copyright">Eater App &copy; 2025 | Joyboy42-8</p>
        </div>
    );
}