import React, { Component } from 'react'
import { compose, withState } from 'recompose'
import { View } from 'react-native'
import SQLite from 'react-native-sqlite-storage'

import FundNameList from '../Component/FundNameList.js'

const sql_single_funding_total =
  'select Project_Event_Title as name, sum(Granted_Total_Amount) as value from WCC_Grant_Funding_By_Fund where Funding_Pool_Name like ? order by Granted_Total_Amount desc'

class SingleFundNameListComponent extends Component {
  componentDidMount() {
    this.props.db.executeSql(
      sql_single_funding_total,
      ['Built Heritage Incentive Fund'],
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
      <View style={{ paddingTop: 20 }}>
        <FundNameList results={this.props.result} />
      </View>
    )
  }
}

const SingleFundNameListContainer = compose(
  withState('result', 'setResult', []),
)(SingleFundNameListComponent)

export default SingleFundNameListContainer
