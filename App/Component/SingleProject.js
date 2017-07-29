import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { FormLabel } from 'react-native-elements'
import _ from 'lodash'

import currencyFormatter from 'currency-formatter'

const SingleProject = props => {
  const { results } = props

  /* const k = Object.keys(results).map(key =>*/
  const k = _.keys(results).sort().map(key =>
    <View key={key}>
      <FormLabel>{key}</FormLabel>
      <Text style={{ marginLeft: 20, marginTop: 5 }}>{results[key]}</Text>
    </View>,
  )

  return (
    <ScrollView>
      {k}
    </ScrollView>
  )
}

export default SingleProject
