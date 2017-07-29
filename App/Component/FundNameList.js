import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { FlatList, Text, View } from 'react-native'
import SQLite from 'react-native-sqlite-storage'

const sql_funding_total =
  'select Funding_Pool_Name, sum(Granted_Total_Amount) from WCC_Grant_Funding_By_Fund group by Funding_Pool_Name'

const SingleFundRow = props => {
  const { name, value } = props.item
  console.log(props)
  return <ListItem title={`${name} - ${value}`} />
}

const FundNameList = props => {
  const { results } = props

  return <FlatList data={results} renderItem={SingleFundRow} />
}

export default FundNameList
