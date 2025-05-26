import { useCallback, useEffect, useRef, useState } from "react"


const useTypings = (enabled: boolean) => {
    const [curson, setCursor] = useState(0)
    const [typed, setTyped] = useState<string>("");
    const totalTyped = useRef(0)
    
    const keydownHandler = useCallback(()=>{},[])

    useEffect(() => {
        window.addEventListener("keydown", keydownHandler);

        return () => {
            window.removeEventListener("keydown", keydownHandler);
        };
    }, [keydownHandler]);
}

export default useTypings
