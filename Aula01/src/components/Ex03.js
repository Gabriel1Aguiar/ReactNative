import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Ex3 = () => {
    const [texto, setTexto]  = useState('')

    return (
        <View>
            <TextInput value={texto} onChangeText={setTexto} placeholder='Digite algo aqui...'/>
            <Text>Texto Digitado: {texto}</Text>
        </View>
    )
}

export default Ex3