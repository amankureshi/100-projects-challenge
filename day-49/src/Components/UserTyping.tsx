const UserTyping = () => ({
    userInput,
    className,
}: {
    userInput: string;
    className?: string;
}) => {
    const typedCharacters = userInput.split("")
    return (
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return <span key={`${char}_${index}`}>{char}</span>
            })}
        </div>
    )
}

export default UserTyping
