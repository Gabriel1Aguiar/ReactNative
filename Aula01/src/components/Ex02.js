import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Ex2 = () => {
    const [count, setCount] = useState(0)
    
    const adicionar = () => {
        setCount(count+1)
    }
    const diminuir = () => {
        setCount(count-1)
    }

    return (
        <View>
            <Button title='+' onPress={adicionar}/>
            <Text>Contador: {count}</Text>
            <Button title='-' onPress={diminuir}/>
        </View>
    )   
}

export default Ex2