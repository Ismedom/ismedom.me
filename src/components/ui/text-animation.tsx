import { motion } from "framer-motion";

const TextAnimation = ({ text }: { text: string }) => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl font-bold text-center p-4"
        >
            {text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    variants={textVariants}
                    className="inline-block mx-1"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextAnimation;
