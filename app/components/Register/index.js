import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements';
import {
  Text, 
  Alert,
  Image,
  ImageBackground
} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      if(username == '' || password == '' || email == ''){
        alert('Enter all details');
      }
      else {
        fetch('https://murmuring-woodland-91622.herokuapp.com/users/register',{ 
			method: 'POST',
			headers: {
				'Accept':'application/json',
				'Content-Type':'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
        email : email,
			})
		})

		.then((response) => response.json()) 
		.then((res) => {
			if(res.success === true){
        var id = res.user.insertId;
				Alert.alert(username);
				//AsyncStorage.setItem('user', username);
        AsyncStorage.setItem('id', id);

				this.props.navigation.navigate('dashboard');
			}
			else{
				alert(res.message);
			}
		}).done();
      console.log('user successfully signed up!:')
    }
      }
      // here place your signup logic
       catch (err) {
      console.log('error signing up:')
    }
  }
 
  render() {
    const {heading, input,parent,backGroundImage,content,logo,inputContainer } = styles
    return (
      
      <View>
      <Header
  placement="center"
  centerComponent={{ text: 'Register', style: { color: '#fff' } }}
/> 
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


const styles1 = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});