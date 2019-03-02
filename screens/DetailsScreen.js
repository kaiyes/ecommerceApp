import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Button, Header } from 'react-native-elements'

import Colors from '../constants/Colors'

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.RootContainer}>
        <Text style={styles.textContainer}>
          Details Screen
        </Text>
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
