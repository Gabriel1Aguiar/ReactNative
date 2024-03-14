import { View, Text } from 'react-native'
import React from 'react'

const DetailsScreen = ({route}) => {
    const {itemId, otherParam} = route.params
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Detalhes</Text>
      <Text>ID do item: {itemId}</Text>
      <Text>Descrição: {otherParam}</Text>
    </View>
  )
}

export default DetailsScreen