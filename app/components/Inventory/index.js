import React, {Component} from 'react';
import {
  Text, 
  View,
  TextInput,
  Button,
  Alert,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';
import { StyleSheet } from 'react-native';
import {AsyncStorage} from 'react-native';
import { Header, Avatar, Icon, ListItem } from 'react-native-elements';
import {User} from 'react-native-vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Inventory extends Component{
	 constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      phone_number: '',
      id: '',
      flag : "desc"
    };
    this.state = {
      applications: []
    }
  }

  componentWillMount()  {
    
    fetch(
        'https://murmuring-woodland-91622.herokuapp.com/inventory' 
          ,
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
        //alert(res.result);
        this.setState({applications: res.result});
        this.setState({flag:'desc'})
        this.setState({username:''})
        //alert(this.state.flag)
      })
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  
  sort = async () =>{
    //alert(this.state.flag)
    if(this.state.flag === 'desc'){

       fetch(
        'https://murmuring-woodland-91622.herokuapp.com/inventory/product/sortDesc' 
          ,
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
        //alert(res.result);
        this.setState({applications: res.result})
      })
      this.setState({flag: 'asc'})
    }
    else {
      
 fetch(
        'https://murmuring-woodland-91622.herokuapp.com/inventory/product/sortAsc' 
          ,
          
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
        //alert(res.result);
        this.setState({applications: res.result})
      })
      this.setState({flag: 'desc'})
    }

      }

searchbyUsername = async()=>{
  if(this.state.username != ''){
fetch(
        'https://murmuring-woodland-91622.herokuapp.com/inventory/filterByName/' +
        this.state.username 
          ,
          
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
        //alert(res.result);
        this.setState({applications: res.result})
      })
  }
  else{
    alert("Enter username to search")
  }
  
}
	render()
	{

const {navigate} = this.props.navigation;
const {heading, input,parent,backGroundImage,content,logo,inputContainer } = styles
		return (
      <View style={parent}>
    <Header
  leftComponent={{ icon: 'home', color: '#fff' ,
  onPress: () => navigate('home', {name: 'Jane'})}}
  centerComponent={{ text: 'INVENTORY', style: { color: '#fff' } }}
   rightComponent={{ icon: 'profile', color: '#fff' ,  onPress: () => navigate('profile', {name: 'Jane'}),}}
/>

        <View>
<TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          defaultValue={this.state.username}
          onChangeText={val => this.onChangeText('username', val)}
        />
        <Button
          title='SCAN BARCODE'
          color="blue"
         onPress={() => navigate('scancode', {name: 'Jane'})}
        />
        </View>
        <View style={{ flexDirection:'row' }}>
        <Button
          title='SORT'
          color="blue"
          style={styles.buttonmargin}
        onPress={this.sort}
        />
        <Button
          title='SEARCH'
          color="blue"
          style={styles.buttonmargin}
         onPress={this.searchbyUsername}
        />
       
        </View>
       
<View>
      
          {
            this.state.applications
              .map(application =>
                <ListItem
                onPress={() =>
                    this.props.navigation
                      .navigate('productdetail', {application: application})}
                  title={application.prodcutName}
                  key={application.id}/>
              )
          }
      
      </View>
        

</View>
		);
	}
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  inputrow: {
    width : 90,
    margin: 10,
    padding: 8,
    height : 50,
    backgroundColor: '#42A5F5',
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  buttonmargin : {
    marginTop : 100,
    justifyContent : true
  },
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});