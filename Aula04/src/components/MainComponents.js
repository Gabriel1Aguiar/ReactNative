import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const MainComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <View style={[styles.container, theme === 'escuro' ? styles.escuro : styles.claro]} >
      <Text style={theme === 'claro' ? styles.textoEscuro : styles.textoClaro}>
        O tema atual é: {theme}
      </Text>
      <Button title="Mudar tema" onPress={toggleTheme} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    escuro: {
        backgroundColor: '#333',
    },
    claro: {
        backgroundColor: '#FFF',
    },
    textoEscuro: {
        color: '#FFF',
    },
    textoClaro: {
        color: '#333',
    },
})

export default MainComponent