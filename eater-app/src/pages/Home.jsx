import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="Main">
            <Hero />
        </main>
    );
}

function Hero() {
    return(
        <motion.section className="Hero" 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            whileTap={{ scale: 1.1, transition: { duration: 1 } }}
        >
            <img src="https://i.pinimg.com/1200x/a2/da/d9/a2dad9ca2e0d9ca51c28827e671cb146.jpg" alt="Burger One" className="HeroImage" />
            <p className="HeroText">Smoky Cheesy Burger</p>
        </motion.section>
    );
}