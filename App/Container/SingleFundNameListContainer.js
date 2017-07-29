import React, { Component } from 'react'
import { compose, withState } from 'recompose'
import { View } from 'react-native'
import SQLite from 'react-native-sqlite-storage'

import SingleFundNameList from '../Component/SingleFundNameList.js'

const sql_single_funding_total =
  'select fid, Project_Event_Title as name, Granted_Total_Amount as value from WCC_Grant_Funding_By_Fund where Funding_Pool_Name like ? order by Granted_Total_Amount desc'

class SingleFundNameListComponent extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.db.executeSql(
      sql_single_funding_total,
      [this.props.filter],
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
        <SingleFundNameList results={this.props.result} />
      </View>
    )
  }
}

const SingleFundNameListContainer = compose(
  withState('result', 'setResult', []),
)(SingleFundNameListComponent)

export default SingleFundNameListContainer
