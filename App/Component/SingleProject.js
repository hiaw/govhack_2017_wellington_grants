import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { FormLabel } from 'react-native-elements'

import currencyFormatter from 'currency-formatter'

const SingleProject = props => {
  const { results } = props

  console.log(results)

  const k = Object.keys(results).map(key =>
    <View>
      <FormLabel>{key}</FormLabel>
      <Text>{results[key]}</Text>
    </View>,
  )

  return (
    <ScrollView>
      {k}
    </ScrollView>
  )
}

export default SingleProject
