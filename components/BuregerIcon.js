import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default class BurgerIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.toggleDrawer}>
        <Ionicons
          name="md-menu"
          size={26}
          color={Colors.black}
        />
      </TouchableOpacity>
    )
  }
}
