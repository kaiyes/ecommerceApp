import React from 'react'
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const DraweNav = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name="md-menu"
          size={26}
          color={tintColor}
        />
      ),
    },
  },
  Settings: {
    screen: SettingsScreen,
  },
})

export default createAppContainer(
  createSwitchNavigator({
    Main: DraweNav,
  })
)
