import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Button, Header } from 'react-native-elements'
import BurgerIcon from '../components/BuregerIcon'

import Colors from '../constants/Colors'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-cog" size={26} color={tintColor} />
    ),
  }

  render() {
    return (
      <View style={styles.RootContainer}>
        <Header
          containerStyle={{
            backgroundColor: Colors.grey,
            borderBottomWidth: 0,
          }}
          rightComponent=<BurgerIcon
            toggleDrawer={() => {
              this.props.navigation.toggleDrawer()
            }}
          />
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  text: {
    fontFamily: 'space-mono',
  },
  button: {
    width: 100,
  },
})
