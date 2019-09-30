import React, { Component } from 'react'
import { Text, View } from 'react-native'
import GravityDemo from '../demo-gravity'
import FlyControl from '../fly-control'

export default class Container extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <GravityDemo children={<FlyControl/>}/>
      </View>
    )
  }
}