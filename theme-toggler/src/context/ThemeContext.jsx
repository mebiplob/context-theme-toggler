import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMood : 'light',
    darkMood : () => {},
    lightMood : () => {}
})


export const ThemeContextProvider = ThemeContext.Provider

const UseThemeContext = () => {
    return useContext(ThemeContext)
}

export default UseThemeContext