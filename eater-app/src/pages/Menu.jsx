import { motion } from "framer-motion";

export default function Menu() {
    return(
        <main className="Main">
            <motion.h1 className="Title" 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            whileTap={{ scale: 1.1, transition: { duration: 1 } }}
            >
                Menu Page
            </motion.h1>
        </main>
    );
}