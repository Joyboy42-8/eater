import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return(
        <main className="Layout">
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}