import { motion } from "framer-motion";
import { ChessKing } from "lucide-react";

export default function Home() {
    return (
        <main className="Main Home">
            <Hero />
            <History />
            <Argument />
            <Avis />
        </main>
    );
}

function Avis() {
  return (
    <section className="Avis">
      <img
        src="/Portrait of person holding fast food burger _ AI-generated image.jfif"
        alt="User Image"
      />
      <section>
        <p>
          Hands down, the best burger i've ever
          had! Perfectly grilled and busrting with
          flavor.
        </p>
        <div>
          <h4>- Jamie Warden</h4>
          <aside>
            <span>1</span>
            <span>/5</span>
          </aside>
        </div>
      </section>
    </section>
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
    return (
      <section className="Grid">
        <motion.section className="History">
          <img
            src="/téléchargement__1_-removebg-preview.png"
            alt="Burger"
            className="HistoryImage"
          />
          <div className="HistoryText">
            <h3>Flavor That Makes History</h3>
            <p>
              Every bite is bold, smoky, and
              unforgettable.
            </p>
          </div>
        </motion.section>
        <motion.section className="HistoryTwo">
          <h3>Free Fries Every Order!</h3>
          <div className="Badge"><ChessKing size={32} /></div>
          <img src="/Photo_a_burger_with_bacon_and_cheese_on_a_wooden_table-removebg-preview.png"
            alt="Burger" />
        </motion.section>
        <motion.section className="HistoryThree">
          <h3>Discover the Best Burgers in Town !</h3>
          <img src="/téléchargement-removebg-preview.png"
            alt="Burger" />
        </motion.section>
      </section>
    );
}


function Argument() {
    return (
      <section className="Argument">
        <div>
          COMPARE TO THESE KINGS, YOUR TEETH
          INTO SMOKY FLAVOUR HOT JUICY BURGER
          STACKED HIGH. EVERY BITE BURSTING WITH
          MELTED CHEESE, CRISPY BACON, AND JUICY
          STEAK FLAVOUR. THE BURGER THAT NEVER
          DISAPPOINTS — SAVOUR THE PERFECT BLEND
          OF SPICES AND FRESHLY TOASTED BUNS. IT'S
          THE KING OF BURGERS!
        </div>
        <img src="/Burger__1_-removebg-preview.png" alt="Burger Dispatched" />
      </section>
    );
}