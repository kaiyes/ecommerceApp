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
import _ from 'lodash'

import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
  state = {
    categoryItems: [
      {
        name: 'Bed room',
        icon: 'ios-bed',
        type: 'ionicon',
        selected: true,
      },
      {
        name: 'Living Room',
        icon: 'game-controller',
        type: 'entypo',
        selected: false,
      },
      {
        name: 'Dining Room',
        icon: 'silverware-spoon',
        type: 'material-community',
        selected: false,
      },
      {
        name: 'Toilet',
        icon: 'toilet',
        type: 'material-community',
        selected: false,
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
                style={
                  item.selected
                    ? styles.categoryBox1
                    : styles.categoryBox2
                }
                key={index}
                onPress={() => {
                  let itemArr = categoryItems
                  itemArr.map((item, index) => {
                    item.selected = false
                  })
                  let thisItem = _.findIndex(itemArr, {
                    name: item.name,
                  })
                  itemArr[thisItem].selected = true
                  this.setState({
                    categoryItems: itemArr,
                  })
                }}
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
    marginBottom: 10,
  },
  button: {
    width: 100,
  },
  categoryBox1: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow,
  },
  categoryBox2: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
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
