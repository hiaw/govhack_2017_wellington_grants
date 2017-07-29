import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { compose, withState } from 'recompose'
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux'
import SQLite from 'react-native-sqlite-storage'

import SingleFundNameListContainer from './SingleFundNameListContainer.js'
import FundNameListContainer from './FundNameListContainer.js'
import SingleProjectContainer from './SingleProjectContainer.js'
import StatisticsPage from '../Component/StatisticsPage.js'

class NavigationRouter extends Component {
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
      return (
        <Router>
          <Scene>
            <Scene
              key="all"
              title="Wellington Grants"
              db={this.props.db}
              component={FundNameListContainer}
            />
            <Scene
              key="single"
              db={this.props.db}
              component={SingleFundNameListContainer}
            />
            <Scene
              key="singleProject"
              db={this.props.db}
              component={SingleProjectContainer}
            />
            <Scene title="Statistics" key="stats" component={StatisticsPage} />
          </Scene>
        </Router>
      )
    }
    return null
  }
}

const NRouter = compose(withState('db', 'setDB', null))(NavigationRouter)

export default NRouter
