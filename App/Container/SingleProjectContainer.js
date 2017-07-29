import React, { Component } from 'react'
import { compose, withState } from 'recompose'
import { View } from 'react-native'
import SQLite from 'react-native-sqlite-storage'

import SingleProject from '../Component/SingleProject.js'

const sql_single_project =
  'select * from WCC_Grant_Funding_By_Fund where Project_Event_Title like ?'

class SingleProjectComponent extends Component {
  componentDidMount() {
    this.props.db.executeSql(
      sql_single_project,
      [this.props.title],
      results => {
        const data = results.rows.item(0)
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
        <SingleProject results={this.props.result} />
      </View>
    )
  }
}

const SingleProjectContainer = compose(withState('result', 'setResult', []))(
  SingleProjectComponent,
)

export default SingleProjectContainer
