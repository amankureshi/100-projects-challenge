import Caret from "./Caret";

const UserTyping = ({
    userInput,
    className,
    words,
}: {
    userInput: string;
    words: string;
    className?: string;
}) => {
    const typedCharacters = userInput.split("")

    return (
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return <Character key={`${char}_${index}`} actual={char} expected={words[index]} />
            })}
            <Caret />
        </div>
    )
}

const Character = ({ actual, expected }: { actual: string, expected: string }) => {
    return <span className="text-amber-300">{expected}</span>
}

export default UserTyping;
