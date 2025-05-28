import { motion } from "framer-motion";
import { formatPercentage } from "../utils/Helper";
import type { State } from "../Hooks/useEngine";

const Results = ({
    state,
    errors,
    accuracyPercentage,
    total,
    className,
}: {
    state: State,
    errors: number;
    accuracyPercentage: number;
    total: number;
    className?: string;
}) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.3 };

    if (state !== "finish") {
        return null
    }

    return (
        <motion.ul
            className={`flex justify-between items-center text-amber-300 font-result text-[18px] ${className}`}
        >
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0 }}
                className="text-xl font-semibold"
            >
                Results
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 0.5 }}
            >
                Accuracy:{formatPercentage(accuracyPercentage)}
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 1 }}
                className="text-red-500"
            >
                Errors: {errors}{" "}
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ ...duration, delay: 1.4 }}
            >
                Typed:{total}
            </motion.li>
        </motion.ul>
    );
};
export default Results;
