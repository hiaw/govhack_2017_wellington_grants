import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { compose, withState } from 'recompose'
import SQLite from 'react-native-sqlite-storage'

import FundNameListContainer from './FundNameListContainer.js'

class RootComponent extends Component {
  componentWillMount() {
    this.openDB()
  }

  // DB related
  successCB() {}

  errorCB(err) {
    console.log('SQL Error: ' + err)
  }

  openDB() {
    this.props.setDB(
      SQLite.openDatabase(
        { name: 'wellington2.db', createFromLocation: 1 },
        this.successCB,
        this.errorCB,
      ),
    )
  }

  render() {
    if (this.props.db) {
      return <FundNameListContainer db={this.props.db} />
    }
    return null
  }
}

const Root = compose(withState('db', 'setDB', null))(RootComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Root
