import { View, Stylesheet } from 'react-native'
import React from 'react'

const Ex1 = () => {
    return (
        <View>
            <View style={[styles.box, { backgroundColor: 'red' }]} />
            <View style={[styles.box, { backgroundColor: 'black' }]} />
            <View style={[styles.box, { backgroundColor: 'red' }]} />
            <View style={[styles.box, { backgroundColor: 'black' }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 100,
        width: '100%'
    },
})


export default Ex1