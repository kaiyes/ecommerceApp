import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native'
import { Font } from 'expo'
import { Button, Header, Icon } from 'react-native-elements'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Fumi } from 'react-native-textinput-effects'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons'
import { Svg } from 'expo'
import Colors from '../constants/Colors'
import Logo from '../assets/svg/store.svg'

export default class DetailsScreen extends React.Component {
  state = {
    fontLoaded: false,
  }

  _login = async () => {
    await AsyncStorage.setItem(
      '@userToken:token',
      'authItem'
    )
    this.props.navigation.navigate('App')
  }
  async componentDidMount() {
    await Font.loadAsync({
      FuturaHeader: require('../assets/fonts/FuturaHeader.ttf'),
    })
    this.setState({
      fontLoaded: true,
    })
  }

  render() {
    const { fontLoaded } = this.state
    return (
      <View style={styles.RootContainer}>
        {fontLoaded ? (
          <Text style={styles.appName}>E-Commerce App</Text>
        ) : null}
        <Logo width={130} height={130} style={styles.svg} />
        <View style={styles.inputHolder}>
          <Fumi
            label={'Email'}
            iconClass={MaterialsIcon}
            iconName={'email'}
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
          />
          <Fumi
            label={'Password'}
            iconClass={MaterialsIcon}
            iconName={'lock-outline'}
            secureTextEntry
            iconColor={'#f95a25'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this._login()
          }}
        >
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          not a user ?{' '}
          <Text
            style={styles.underlinedText}
            onPress={() => {
              this.props.navigation.navigate('SignUp')
            }}
          >
            sign up
          </Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    backgroundColor: Colors.moderateYellow,
    alignItems: 'center',
  },
  appName: {
    fontFamily: 'FuturaHeader',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: hp('14%'),
  },
  button: {
    width: wp('80%'),
    height: hp('6%'),
    borderRadius: hp('5%'),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  buttonText: {
    fontFamily: 'space-mono',
    fontSize: 22,
  },
  inputHolder: {
    width: wp('80%'),
  },
  svg: {
    marginVertical: hp('5%'),
  },
  signUpText: {
    fontFamily: 'space-mono',
    fontSize: 16,
    marginTop: hp('2%'),
  },
  underlinedText: {
    fontFamily: 'space-mono',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
})
