import { motion } from "framer-motion";
import { useFetch } from "../components/Hooks";
import { toast } from "react-toastify";

export default function Menu() {
    const { data, loading, error } = useFetch("https://free-food-menus-api-two.vercel.app/burgers");

    if(loading) return toast.info("Loading Burgers !")
    if(error) return toast.error(error.message);

    // "id": "the-gramercy-tavern-burger-4-pack",
    // "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    // "name": "Gramercy Tavern",
    // "dsc": "The Gramercy Tavern Burger - 4 Pack",
    // "price": 99,
    // "rate": 5,
    // "country": "New York, NY"

    return (
      <main className="Main">
        <motion.h1
          className="Title"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
        >
          Menu Page
        </motion.h1>
        <ul>
          {data.map((burger) => (
            <li>
              {burger.name} ({burger.price} $)
              {"⭐".repeat(burger.rate)}
            </li>
          ))}
        </ul>
      </main>
    );
}