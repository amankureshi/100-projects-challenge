import cn from "classnames";
import Caret from "./Caret";

const UserTypings = ({
    userInput,
    words,
    className = "",
}: {
    userInput: string;
    words: string;
    className?: string;
}) => {
    const typedCharacters = userInput.split("");

    return (
        <div className={className}>
            {typedCharacters.map((char, index) => (
                <Character
                    key={`${char}_${index}`}
                    actual={char}
                    expected={words[index]}
                />
            ))}
            <Caret />
        </div>
    );
};

const Character = ({
    actual,
    expected,
}: {
    actual: string;
    expected: string;
}) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";

    return (
        <span
            className={cn({
                "text-pink-400": !isCorrect && !isWhiteSpace,
                "text-cyan-300": isCorrect && !isWhiteSpace,
                "bg-pink-500/30": !isCorrect && isWhiteSpace,
            })}
        >
            {expected}
        </span>
    );
};

export default UserTypings;