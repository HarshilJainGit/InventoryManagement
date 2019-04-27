import React, {Component} from 'react';
import {
  Text, 
  View,
  TextInput,
  Button,
  Alert,
  Image,
  ImageBackground
} from 'react-native';
import styles from './styles';
import {AsyncStorage} from 'react-native';


export default class Login extends Component{
	state = {username:"" , password:""}

	checkLogin()
	{
		const { username, password } = this.state
		Alert.alert(username);
		Alert.alert(password);
		if(username=='admin' && password=='admin')
		{
			this.props.navigation.navigate('profile');
		}
		else
		{
			Alert.alert('Error', 'Username/password not found',[{
				text:'Okay'
			}])
		}
	}




	render()
	{

const {navigate} = this.props.navigation;
		const {heading, input,parent,backGroundImage,content,logo,inputContainer } = styles
		return (
		<View style={parent}>
		
		<View style={content}>
		<Text style={logo}>Inventory Management</Text>

		
		<View styles={inputContainer}>
		<Text style={heading}>Login</Text>
		<TextInput style={input} placeholder="Username" onChangeText={text => this.setState({ username:text})} />
		<TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({ password:text})} />
		<Button title={"Login"} onPress={_ => this.login() } />
    <Button style={styles.red} title={"Register"} onPress={() => navigate('register', {name: 'Jane'})} />
		</View>
		</View>
		</View>
		);
	}

	constructor(props)
	{
		super(props);
		this.state = {username:'', password:''};
	}

	login = () => {
		//Alert.alert(this.state.username);
		fetch('https://murmuring-woodland-91622.herokuapp.com/users/login',{
			method: 'POST',
			headers: {
				'Accept':'application/json',
				'Content-Type':'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		})

		.then((response) => response.json())
		.then((res) => {
      
			if(res.success === true){
				var username = res.user;
        var id = res.id;
				AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('id',res.id.toString());
      
				this.props.navigation.navigate('profile');
			}
			else{
				alert(res.message);
			}
		})
		.done();
	}
}