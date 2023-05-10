import { useState, createContext } from "react"

export const ThemeContext = createContext()

const PlayContextProvider = ({children}) => {
    const [checked, setChecked] = useState(null)

    const data = {
        checked,
        setChecked
    }


    return (
    <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
)
}

export default PlayContextProvider