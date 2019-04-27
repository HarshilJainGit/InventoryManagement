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

export default class Home extends React.Component {
   
  render() {
    const {heading, input,parent,backGroundImage,content,logo,inputContainer } = styles
    const {navigate} = this.props.navigation;
    return (
      
      <View>
        <Button
          title='LOGIN'
          color="blue"
          onPress={() => navigate('login', {name: 'Jane'})}
        />
        <Button
          title='REGISTER'
          color="green"
          onPress={() => navigate('register', {name: 'Jane'})}
        />
        <Button
          title='INVENTORY'
          color="blue"
          onPress={() => navigate('inventory', {name: 'Jane'})}
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