import React from 'react'
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import DetailsScreen from '../screens/DetailsScreen'

const DetailScreen = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
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
  Details: {
    screen: DetailsScreen,
  },
})

const DraweNav = createDrawerNavigator({
  Home: DetailScreen,
  Settings: {
    screen: SettingsScreen,
  },
})

export default createAppContainer(
  createSwitchNavigator({
    Main: DraweNav,
  })
)
