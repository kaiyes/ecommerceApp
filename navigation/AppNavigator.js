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

import Colors from '../constants/Colors'

const DetailScreen = createStackNavigator(
  {
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
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.grey,
          borderBottomWidth: 0,
        },
        headerTintColor: Colors.black,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    headerMode: 'none',
  }
)

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
