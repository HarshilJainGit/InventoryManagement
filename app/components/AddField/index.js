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

export default class AddField extends React.Component {
  state = {
    title: '', type: '', defaultvalue: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  addField = async () => {
    const { title, type, defaultvalue} = this.state
    try {
      if(title == '' || type == '' || defaultvalue == ''){
        alert('Enter all details');
      }
      else {
        fetch('https://murmuring-woodland-91622.herokuapp.com/editTable/addColumn',{ 
			method: 'POST',
			headers: {
				'Accept':'application/json',
				'Content-Type':'application/json',
			},
			body: JSON.stringify({
				col : title,
				dataType: type,
        def : defaultvalue,
			})
		})

		.then((response) => response.json()) 
		.then((res) => {
			if(res.success === true){
        alert("Field " + this.state.title + "added successfully")
			}
		}).done();
      console.log('added field')
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
  centerComponent={{ text: 'ADD FIELD', style: { color: '#fff' } }}
/> 
        <TextInput
          style={styles.input}
          placeholder='Title'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('title', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Type'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('type', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Default Value'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('defaultvalue', val)}
        />
        <Button
          title='ADD NEW FIELD'
          onPress={this.addField}
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