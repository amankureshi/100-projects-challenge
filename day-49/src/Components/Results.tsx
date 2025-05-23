import { motion } from 'framer-motion';

const Results = ({
    errors,
    accuracyPercentage,
    total,
    className,
}: {
    errors: number;
    accuracyPercentage: number;
    total: number;
    className?: string;
}) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.3 };
    return (
        <motion.ul className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}>
            <motion.li className="text-xl font-semibold">Results</motion.li>
            <motion.li>Accuracy:{accuracyPercentage}</motion.li>
            <motion.li className="text-red-500">Errors: {errors} </motion.li>
            <motion.li>Typed:{total}</motion.li>
            <motion.li></motion.li>
        </motion.ul>
    )
}
export default Results;