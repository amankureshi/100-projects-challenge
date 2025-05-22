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
    return (
        <ul className={`flex flec-col items-center text-primary-400 space-y-3 ${className}`}>
            <li className="text-xl font-semibold">Results</li>
            <li>Accuracy:{accuracyPercentage}</li>
            <li className="text-red-500">Errors: {errors} </li>
            <li>Typed:{total}</li>
            <li></li>
        </ul>
    )
}
export default Results;