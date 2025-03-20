import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [currTheme,setCurrTheme]=useState(localStorage.getItem("theme") || "light")

    useEffect(()=>{
        document.documentElement.className=currTheme;
        localStorage.setItem("theme", currTheme)

    },[currTheme])
    const ToggleTheme = ()=>{
        setCurrTheme((prevTheme)=>{
            const setNewTheme = prevTheme === "light"?"dark":"light"
            console.log("theme", setNewTheme)
            return setNewTheme;
        })
    }
  return (
        <ThemeContext.Provider value={{currTheme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
  )
}

