import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Button, Header } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  }

  render() {
    return (
      <View style={styles.RootContainer}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{
            text: 'Home',
            style: { color: '#fff' },
          }}
        />
        <Text style={styles.text}>Home</Text>
        <Button
          title="Settings"
          buttonStyle={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Settings')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'space-mono',
  },
  button: {
    width: 100,
  },
})
