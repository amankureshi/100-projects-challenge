import { useState } from "react"

export typr State = "state" | "run" | "finish"

const useEngine = () => {
    const [state, setState] = useState<State>("start")
    return { state }
}
export default useEngine;