import React, { Component } from 'react'
import { Image, Text, View, Dimensions, ScrollView } from 'react-native'

const total = require('../Image/total.png')
const vs = require('../Image/vs.png')
const vs2 = require('../Image/vs2.png')
const declined = require('../Image/declined.png')
const community = require('../Image/community.png')

const { width } = Dimensions.get('window')

const styles = {
  image: {
    width,
    height: 450,
  },
}

const StatisticsPage = () => {
  return (
    <ScrollView>
      <Image style={styles.image} resizeMode="contain" source={total} />
      <Image style={styles.image} resizeMode="contain" source={declined} />
      <Image style={styles.image} resizeMode="contain" source={community} />
      <Image style={styles.image} resizeMode="contain" source={vs} />
      <Image style={styles.image} resizeMode="contain" source={vs2} />
    </ScrollView>
  )
}

export default StatisticsPage
