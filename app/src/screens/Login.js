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

class Login extends React.Component {

  static navigationOptions = {
    title: 'Login',
  }

  getNavigate = () => {
    this.props.navigation.navigate('Register')
  }

  render () {
    return (
      <ImageBackground source={require('../assets/jalan.jpg')} style={styles.backgroundImage}>
        <View style={{ flex: 0.6 }}>
          <Image source={require('../assets/checklist.png')} style={{ flex:0.5, top: 50,alignSelf: 'center'}}/>
        </View>
        <View style={{ flex: 1.4 }}>
          <View style={{ backgroundColor: 'white', height: 60, width: 320, top: 10, alignSelf: 'center', borderRadius: 50, flexDirection: 'row', opacity: 0.5 }}>
            <Text style={{ flex: 0.5, alignSelf: 'center', left: 20 }}>
              @
            </Text>
            <TextInput style={{ flex: 2.5 }} placeholder="Username" placeholderTextColor='#E12F09'></TextInput>
          </View>
          <View style={{ backgroundColor: 'white', height: 60, width: 320, marginTop: 30, alignSelf: 'center', borderRadius: 50, flexDirection: 'row',opacity: 0.5 }}>
            <Text style={{ flex: 0.5, alignSelf: 'center', left: 20 }}>
              @
            </Text>
            <TextInput style={{ flex: 2.5 }} placeholder="Password" placeholderTextColor='#E12F09'></TextInput>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: '#00CED1', height: 60, width: 320, bottom: 10, marginTop: 30, alignSelf: 'center', borderRadius: 50, flexDirection: 'row' }}>
            <Text style={{ alignSelf: 'center', left: 135, color: 'white' }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ color: 'white', alignSelf: 'center' }}>OR</Text>
          <TouchableOpacity
            style={{ backgroundColor: '#3B5998', height: 60, width: 320, bottom: 10, marginTop: 30, alignSelf: 'center', borderRadius: 50, flexDirection: 'row' }}>
            <Text style={{ alignSelf: 'center', left: 95, color: 'white' }}>Login With Facebook</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 47 }}>
          <TouchableOpacity
            onPress={ () => this.getNavigate() }
            style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center', color: 'white',opacity: 0.8 }}>Create New Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, right: -40 }}>
            <Text style={{ alignSelf: 'center', color: 'white',opacity: 0.8 }}>Need Help?</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  }
});

export default Login;
