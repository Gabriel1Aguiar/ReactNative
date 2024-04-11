import React, { createContext, useState } from 'react'

const ThemeContext = createContext({
    theme: 'claro',
    toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('claro')

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'claro' ? 'escuro' : 'claro'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext