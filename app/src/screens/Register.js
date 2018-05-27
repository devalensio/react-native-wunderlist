import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Home extends React.Component {

  static navigationOptions = {
    title: 'Register',
  }

  render () {
    return (
      <View style={{ flex: 1.5, backgroundColor: 'white' }}>
        <ImageBackground source={require('../assets/gunung.jpg')} style={{ flex: 1 }}>
          <Text style={{ fontSize: 50, alignSelf: 'center', top: 8, color: 'white', fontStyle: 'italic' }}>Sign Up</Text>
        </ImageBackground>
        <View style={{ flex: 2 }}>
          <View style={{ backgroundColor: 'white', height: 60, width: 320, marginTop: 20, alignSelf: 'center', borderRadius: 50, flexDirection: 'row', opacity: 0.5, borderWidth: 0.5,
            borderColor: 'black' }}>
            <Text style={{ flex: 0.5, alignSelf: 'center', left: 20 }}>
              @
            </Text>
            <TextInput style={{ flex: 2.5 }} placeholder="Username" placeholderTextColor='#E12F09'></TextInput>
          </View>
          <View style={{ backgroundColor: 'white', height: 60, width: 320, marginTop: 20, alignSelf: 'center', borderRadius: 50, flexDirection: 'row',opacity: 0.5, borderWidth: 0.5,
            borderColor: 'black', }}>
            <Text style={{ flex: 0.5, alignSelf: 'center', left: 20 }}>
              @
            </Text>
            <TextInput style={{ flex: 2.5 }} placeholder="Email" placeholderTextColor='#E12F09'></TextInput>
          </View>
          <View style={{ backgroundColor: 'white', height: 60, width: 320, marginTop: 20, alignSelf: 'center', borderRadius: 50, flexDirection: 'row',opacity: 0.5, borderWidth: 0.5,
            borderColor: 'black', }}>
            <Text style={{ flex: 0.5, alignSelf: 'center', left: 20 }}>
              @
            </Text>
            <TextInput style={{ flex: 2.5 }} placeholder="Password" placeholderTextColor='#E12F09'></TextInput>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: '#3cb371', height: 60, width: 320, bottom: 10, marginTop: 60, alignSelf: 'center', borderRadius: 50, flexDirection: 'row' }}>
            <Text style={{ alignSelf: 'center', left: 110, color: 'white' }}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  }
});

export default Home;
