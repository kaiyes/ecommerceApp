import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  AsyncStorage,
} from 'react-native'
import { Font } from 'expo'
import { Button, Header, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import BurgerIcon from '../components/BuregerIcon'
import _ from 'lodash'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-cog" size={26} color={tintColor} />
    ),
  }

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
          directionalLockEnabled
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
          <Text
            style={styles.countText}
            onPress={async () => {
              await AsyncStorage.removeItem(
                '@userToken:token'
              )
              this.props.navigation.navigate('Auth')
            }}
          >
            120 Products
          </Text>
        </View>
        <FlatList
          style={styles.flatlist}
          data={[
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            15,
          ]}
          ListFooterComponent={() => (
            <View style={{ height: 150 }} />
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Details')
              }}
              style={styles.productCard}
            >
              <View style={styles.imageHolder}>
                <Image
                  source={require('../assets/images/chair.png')}
                  style={styles.productImage}
                />
              </View>
              <View style={styles.textHolder}>
                <Text style={styles.productNameText}>
                  Key chair
                </Text>
                <Text style={styles.productDescriptionText}>
                  Key chair is built with soft leather
                </Text>
                <Text style={styles.productPriceText}>
                  $680
                </Text>
              </View>
              <View style={styles.cart}>
                <Ionicons
                  name="ios-basket"
                  size={22}
                  color={Colors.white}
                />
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
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
  headerText: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: wp('5%'),
  },
  scrollView: {
    height: hp('20%'),
    marginBottom: hp('15%'),
    marginLeft: wp('3.5%'),
    alignItems: 'center',
  },
  countText: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: wp('5%'),
    marginBottom: hp('3%'),
  },
  selectedBox: {
    height: hp('14%'),
    width: wp('28%'),
    marginLeft: wp('2%'),
    marginRight: wp('1%'),
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
    height: hp('12%'),
    width: wp('24%'),
    marginLeft: wp('2%'),
    marginRight: wp('1%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  categoryText: {
    fontFamily: 'space-mono',
    fontWeight: '700',
    fontSize: 12,
  },
  categoryIcon: {
    marginBottom: hp('0.7%'),
  },
  miscHolder: {
    flexDirection: 'row',
  },
  flatlist: {
    marginLeft: wp('5%'),
  },
  productCard: {
    width: 175,
    marginRight: 22,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 6,
  },
  imageHolder: {
    alignItems: 'center',
  },
  productImage: {
    width: 90,
    height: 90,
    marginTop: 20,
  },
  textHolder: {
    marginLeft: 25,
  },
  productNameText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: hp('0.7%'),
    marginTop: 20,
  },
  productDescriptionText: {
    fontFamily: 'space-mono',
    color: Colors.lightGrey,
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: hp('0.7%'),
  },
  productPriceText: {
    fontFamily: 'space-mono',
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  cart: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 40,
    height: 40,
  },
})
