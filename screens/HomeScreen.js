import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native'
import { Font } from 'expo'
import { Button, Header, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import BurgerIcon from '../components/BuregerIcon'
import _ from 'lodash'

import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
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
  async componentDidMount() {
    await Font.loadAsync({
      NoTime: require('../assets/fonts/NoTime.ttf'),
    })
    this.setState({
      fontLoaded: true,
    })
  }

  render() {
    let { categoryItems, fontLoaded } = this.state
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
        {fontLoaded ? (
          <Text style={styles.headerText}>Explore</Text>
        ) : null}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          {categoryItems.map((item, index) => {
            return (
              <TouchableOpacity
                style={
                  item.selected
                    ? styles.selectedBox
                    : styles.box
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
        <View style={styles.miscHolder}>
          <Text style={styles.countText}>120 Products</Text>
        </View>
        <View style={styles.productContainer}>
          <FlatList
            data={[1, 2, 3, 5, 6]}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image
                  source={require('../assets/images/chair.png')}
                  style={styles.productImage}
                />
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  RootContainer: {
    backgroundColor: Colors.grey,
  },
  headerText: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 5,
    marginLeft: 20,
  },
  scrollView: {
    height: 130,
    marginLeft: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  selectedBox: {
    height: 115,
    width: 115,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: Colors.primary,
  },
  box: {
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
  miscHolder: {
    flexDirection: 'row',
  },
  countText: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 20,
  },
  productContainer: {
    marginLeft: 20,
  },
  productCard: {
    width: 175,
    height: 200,
    marginRight: 22,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  productImage: {
    width: 90,
    height: 90,
    marginTop: 30,
  },
})
