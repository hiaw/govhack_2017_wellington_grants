import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { FlatList, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import currencyFormatter from 'currency-formatter'

const SingleFundRow = props => {
  const { name, value } = props.item
  return (
    <ListItem
      title={name}
      subtitle={currencyFormatter.format(value, { code: 'USD' })}
    />
  )
}

const keyExtractor = item => item.fid

const SingleFundNameList = props => {
  const { results } = props

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={results}
      renderItem={SingleFundRow}
    />
  )
}

export default SingleFundNameList
