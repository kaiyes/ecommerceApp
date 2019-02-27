import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Button, Header, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import BurgerIcon from '../components/BuregerIcon'

import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
  state = {
    categoryItems: [
      {
        name: 'Bed room',
        icon: 'ios-bed',
        type: 'ionicon',
      },
      {
        name: 'Living Room',
        icon: 'game-controller',
        type: 'entypo',
      },
      {
        name: 'Dining Room',
        icon: 'silverware-spoon',
        type: 'material-community',
      },
      {
        name: 'Toilet',
        icon: 'toilet',
        type: 'material-community',
      },
    ],
  }

  render() {
    let { categoryItems } = this.state
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
        <Text style={styles.headerText}>Explore</Text>
        <ScrollView horizontal>
          {categoryItems.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.categoryBox}
                key={index}
              >
                <Icon
                  name={item.icon}
                  type={item.type}
                  size={30}
                  color={Colors.black}
                  style={styles.categoryIcon}
                />
                <Text style={styles.categoryText}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingLeft: 10,
  },
  headerText: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 40,
  },
  button: {
    width: 100,
  },
  categoryBox: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow,
  },
  categoryText: {
    fontFamily: 'space-mono',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 5,
  },
  categoryIcon: {
    marginBottom: 5,
  },
})
