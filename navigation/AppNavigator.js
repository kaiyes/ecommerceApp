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

import AuthLoadingScreen from '../screens/AuthLoading'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

import Colors from '../constants/Colors'

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.moderateYellow,
        borderBottomWidth: 0,
        shadowColor: Colors.moderateYellow,
        elevation: 0,
      },
      headerTintColor: Colors.black,
    },
  },
})

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

const DrawerNav = createDrawerNavigator({
  Home: DetailScreen,
  Settings: SettingsScreen,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNav,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
)
