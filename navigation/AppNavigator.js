import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import { Button } from 'react-native-elements'

import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const DraweNav = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
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
