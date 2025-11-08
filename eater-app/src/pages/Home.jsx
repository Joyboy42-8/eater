import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="Main">
            <Hero />
            <History />
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
            <img src="/Burger-removebg-preview.png" alt="Burger One" className="HeroImage" />
            <p className="HeroText">Smoky Cheesy Burger</p>
        </motion.section>
    );
}

function History() {
    return(
        <section className="Grid">
            <motion.section className="History">
                <img src="/téléchargement__1_-removebg-preview.png" alt="Burger" className="HistoryImage" />
                <div className="HistoryText">
                    <h3>Flavor That Makes History</h3>
                    <p>
                        Every bite is bold, smoky, and unforgettable.
                    </p>
                </div>
            </motion.section>
            <motion.section className="HistoryTwo">
                <h3>Free Fries Every Order !</h3>
                <img src="/téléchargement__1_-removebg-preview.png" alt="Burger" />
            </motion.section>
            <motion.section className="HistoryThree">
                <h3>Discover the Best Burgers in Town !</h3>
                <img src="/téléchargement__1_-removebg-preview.png" alt="Burger" />
            </motion.section>
        </section>
    );
}