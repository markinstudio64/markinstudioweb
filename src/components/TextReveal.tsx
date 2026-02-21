import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    width?: string;
}

export const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: delay * i,
                ease: [0.22, 1, 0.36, 1]
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 0.8,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <span key={index} className="overflow-hidden mr-[0.2em] pb-[0.1em]">
                    <motion.span
                        variants={child}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

export const CharReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay * i,
                ease: [0.22, 1, 0.36, 1]
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: 0.6,
            },
        },
        hidden: {
            opacity: 0,
            y: "100%",
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <span key={index} className="overflow-hidden block">
                    <motion.span
                        variants={child}
                        className="inline-block whitespace-pre"
                    >
                        {letter}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};
