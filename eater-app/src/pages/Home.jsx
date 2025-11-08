import { motion } from "motion/react"

export default function Home() {
    return (
        <motion.h1 className="Title" 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            whileTap={{ scale: 1.1, transition: { duration: 1 } }}
        >
            Home Page
        </motion.h1>
    );
}