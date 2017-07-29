import React, { Component } from 'react'
import { compose, withState } from 'recompose'
import { View } from 'react-native'
import { ListItem, Divider } from 'react-native-elements'
import SQLite from 'react-native-sqlite-storage'
import { Actions } from 'react-native-router-flux'

import FundNameList from '../Component/FundNameList.js'

const sql_funding_total =
  'select Funding_Pool_Name as name, sum(Granted_Total_Amount) as value from WCC_Grant_Funding_By_Fund group by Funding_Pool_Name order by sum(Granted_Total_Amount) desc'

class FundNameListComponent extends Component {
  componentDidMount() {
    this.props.db.executeSql(
      sql_funding_total,
      [],
      results => {
        const data = []
        var len = results.rows.length
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i)
          data.push(row)
        }
        this.props.setResult(data)
      },
      this.errorCB,
    )
  }

  errorCB(err) {
    console.log('SQL Error: ' + err)
  }

  render() {
    return (
      <View>
        <ListItem
          title="Statistics"
          onPress={() => {
            Actions.stats()
          }}
        />
        <Divider style={{ backgroundColor: 'blue' }} />
        <FundNameList results={this.props.result} />
      </View>
    )
  }
}

const FundNameListContainer = compose(withState('result', 'setResult', []))(
  FundNameListComponent,
)

export default FundNameListContainer
