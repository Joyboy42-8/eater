import { motion } from "framer-motion";
import { useFetch } from "../components/Hooks";

export default function Menu() {
    const { data, loading, error } = useFetch("https://free-food-menus-api-two.vercel.app/burgers");

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