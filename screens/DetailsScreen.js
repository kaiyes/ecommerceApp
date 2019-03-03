import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Button, Header, Icon } from 'react-native-elements'
import BurgerIcon from '../components/BuregerIcon'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Carousel, {
  Pagination,
} from 'react-native-snap-carousel'
import Colors from '../constants/Colors'

export default class DetailsScreen extends React.Component {
  state = {
    imageUrl: [
      {
        image: require('../assets/images/chair.png'),
      },
      {
        image: require('../assets/images/chair.png'),
      },
      {
        image: require('../assets/images/chair2.png'),
      },
    ],
    activeSlide: 0,
    numberOfItems: 1,
  }

  get pagination() {
    const { imageUrl, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={imageUrl.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: Colors.grey,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colors.primary,
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colors.black,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }

  _renderItem({ item, index }) {
    return (
      <Image
        source={item.image}
        style={styles.productImage}
        resizeMode="contain"
      />
    )
  }

  render() {
    const { numberOfItems } = this.state
    return (
      <View style={styles.RootContainer}>
        <Header
          containerStyle={{
            backgroundColor: Colors.grey,
            borderBottomWidth: 0,
          }}
          leftComponent=<Icon
            name="arrow-back"
            type="material"
            size={18}
            color={Colors.black}
            style={styles.categoryIcon}
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          />
          rightComponent=<BurgerIcon
            toggleDrawer={() => {
              this.props.navigation.toggleDrawer()
            }}
          />
        />
        <Text style={styles.headerText}>Key Chair</Text>
        <View style={styles.imageHolder}>
          <Carousel
            ref={c => {
              this._carousel = c
            }}
            data={this.state.imageUrl}
            renderItem={this._renderItem}
            onSnapToItem={index =>
              this.setState({ activeSlide: index })
            }
            sliderWidth={wp('60%')}
            itemWidth={wp('70%')}
          />
          {this.pagination}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productNameText}>
            A Modern Tradition
          </Text>
          <Text style={styles.productDescriptionText}>
            A classic bed frame with a brass twist. The
            curved headboard and brass-coloured details
            soften the sturdy steel. Dressed with your
            favourite linens it becomes a statement piece
            and your own personal haven.
          </Text>
          <View style={styles.itemCountContainer}>
            <Text style={styles.countDescription}>
              add or remove items
            </Text>
            <Icon
              name="minus"
              type="evilicon"
              size={22}
              color={Colors.black}
              onPress={() => {
                numberOfItems === 0
                  ? null
                  : this.setState({
                      numberOfItems: numberOfItems - 1,
                    })
              }}
            />
            <Text style={styles.countText}>
              {numberOfItems}
            </Text>
            <Icon
              name="plus"
              type="evilicon"
              size={22}
              color={Colors.black}
              onPress={() => {
                this.setState({
                  numberOfItems: numberOfItems + 1,
                })
              }}
            />
          </View>
          <Button
            title="Add to Bag"
            buttonStyle={styles.button}
          />
        </View>
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
    fontSize: 28,
    marginLeft: wp('5%'),
  },
  imageHolder: {
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  productImage: {
    width: wp('50'),
    height: hp('30%'),
    marginLeft: wp('5%'),
  },
  textContainer: {
    marginHorizontal: wp('5%'),
  },
  productNameText: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: hp('2%'),
    marginTop: hp('.3%'),
  },
  productDescriptionText: {
    fontSize: 12,
  },
  button: {
    marginTop: Platform.OS === 'ios' ? hp('7%') : hp('6%'),
    backgroundColor: Colors.primary,
    height: hp('7%'),
  },
  itemCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
  countText: {
    fontFamily: 'space-mono',
    fontWeight: 'bold',
    fontSize: 18,
  },
  countDescription: {
    fontFamily: 'space-mono',
    fontWeight: '600',
    fontSize: 16,
    color: Colors.lightGrey,
  },
})
