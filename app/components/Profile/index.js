import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Header, Avatar, Icon } from 'react-native-elements';
import { Text, Alert, Image, ImageBackground } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      phone_number: '',
      id: '',
    };
  }
  componentWillMount() {
    AsyncStorage.getItem('id').then(value => {
      //alert('res' + value);

      this.setState({ id: value });
      if(this.state.id === null){
        alert('login to update the profile')
        this.props.navigation.navigate('login');
      }
      fetch(
        'https://murmuring-woodland-91622.herokuapp.com/users/getUser/' +
          parseInt(this.state.id),
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
        .then(response => response.json())
        .then(res => {
          if (res.success === true) {
            var username = res.user;
            var password = res.password;
            var email = res.email;
            this.setState({
              username: username,
              password: password,
              email: email,
            });
            //alert(this.state);

            //this.props.navigation.navigate('dashboard');
          } else {
            alert(res.message);
          }
        })
        .done();
    });
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  logout = async () => {
    AsyncStorage.removeItem('id').then(value => {
        this.props.navigation.navigate('home');
    })}

    update = async () => {
      const { username, password, email } = this.state
      try {
      if(this.state.username == '' || this.state.password == '' || 
      this.state.password == ''){
        alert('Enter all details');
      }
      else {
        fetch('https://murmuring-woodland-91622.herokuapp.com/users/updateProfile/'
        +this.state.id,{ 
			method: 'PUT',
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
			if(res.success === true 
      && res.message === "Updated ypur profile successfully!"){
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
      console.log('error updating:')
    }
    }

  render() {
    const {navigate} = this.props.navigation;
    const {
      heading,
      input,
      parent,
      backGroundImage,
      content,
      logo,
      inputContainer,
    } = styles;
    return (
      <View>
        <Header
          placement="center"
          centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          defaultValue={this.state.username}
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          defaultValue={this.state.password}
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          defaultValue={this.state.email}
          onChangeText={val => this.onChangeText('email', val)}
        />
        <Button title="UPDATE" onPress={this.update}
        color="blue" />
        <Button title="INVENTORY" onPress={() => navigate('inventory', {name: 'Jane'})} 
        color="green"/>
        <Button title="LOGOUT" onPress={this.logout} 
        color="blue"/>
      </View>
    );
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
    alignItems: 'center',
  },
});

const styles1 = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
