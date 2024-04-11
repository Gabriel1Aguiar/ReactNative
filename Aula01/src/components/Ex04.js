import { View, Text } from 'react-native'
import React from 'react'

const Ex4 = () => {
    const lista = ["Gabriel", "João", "Maria"]

    return (
        <View>
            {
                lista.map((nome, index)=>(
                    <Text key={index}>{nome}</Text>
                ))
            }
        </View>
    )
}

export default Ex4