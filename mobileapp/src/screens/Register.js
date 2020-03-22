import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  AsyncStorage,
  PureComponent,
  Platform,
  NetInfo,
  Alert,
} from 'react-native';

// import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from 'react-navigation';
import {ScrollView} from 'react-native-gesture-handler';

export default class registration extends React.PureComponent {
  state = {
    username: '',
    password: '',
    lang: 'en',
    pushtoken: '',
    showPassword: true,
    check: true,
  };
  handleTextChange = newText => this.setState({username: newText});
  handleTextChange1 = newText => this.setState({password: newText});
  Login() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.parent}>
       
        <View style={{height: '25%', width: '100%', borderWidth: 0,alignItems:'center'}}>
          {/* <Image
            source={require('./../assets/images/logo.png')}
            resizeMode="contain"
            style={{height: 170, width: 300}}></Image> */}
        </View>
        {/* </View> */}
        <View
          style={{
            height: '70%',
            // borderWidth: 1,
            borderRadius: 10,
            // paddingLeft: 15,
            // paddingRight: 15,
            // justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            paddingVertical:20,
            alignSelf: 'center',
            overflow: 'hidden',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              color: '#4195d1',
              fontSize: 19,
              paddingVertical: 10,
              fontWeight: '600',
            }}>
            {' '}
            Signup{' '}
          </Text>
          <View style={styles.et1}>
            <View style={styles.tocentertext}>
              <View
                style={{
                  width: '20%',
                  // borderWidth: 1,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '20%',
                    // borderWidth: 1,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name={'lock'} size={20} color="#cccccc" />
                </View>
              </View>
              <TextInput
                style={{}}
                maxLength={11}
                keyboardType="numeric"
                value={this.state.number}
                onChangeText={this.handleTextChange}
                placeholder="300-1234567"></TextInput>
            </View>
          </View>

          <View style={styles.et1}>
            <View
              style={{
                width: '20%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name={'lock'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                // paddingLeft: 40,
              }}
              value={this.state.password}
              onChangeText={this.handleTextChange1}
              secureTextEntry={true}
              placeholder="  Email Address "></TextInput>
          </View>

          <View style={styles.et1}>
            <View
              style={{
                width: '20%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name={'lock'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                // paddingLeft: 40,
              }}
              value={this.state.password}
              onChangeText={this.handleTextChange1}
              secureTextEntry={true}
              placeholder="  password "></TextInput>
          </View>

          <TouchableOpacity
            style={{marginRight: 20, marginTop: 10, marginLeft: 20}}
            onPress={() => this.props.navigation.navigate('VERIFY_NUM')}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.Login()}
            style={{
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth: 1,
              backgroundColor: '#4195d1',
              paddingVertical: 10,
              marginVertical: 20,
              borderRadius: 5,
              borderRadius: 5,
              borderBottomEndRadius:0,
              borderTopStartRadius:0,
            }}>
            <Text style={styles.logintext}> Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginTop: 10, borderWidth: 0}}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>
              {' '}
              already user ? <Text style={{color: '#4195d1'}}> Login </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  tocenterview: {
    // height:50,bw
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    justifyContent: 'flex-end',
  },
  hello: {
    // marginTop: 20,
    fontSize: 15,
    color: 'black',
  },
  moving: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  et1: {
    borderColor: '#d3d3d3',

    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  et2: {
    borderColor: '#d3d3d3',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    // marginRight: 40,
    // marginLeft: 40,
  },
  ext: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
  },
  tocentertext: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  logintext: {
    color: 'white',
    fontSize: 18,

    alignItems: 'center',
  },
});
