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
export default class Audit extends Component{
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
  
  addedproducts = async() =>{
fetch(
        'https://murmuring-woodland-91622.herokuapp.com/audit/filterByAddedProducts' 
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
        this.setState({applications: res.result1});
        this.setState({flag:'desc'})
        this.setState({username:''})
        //alert(this.state.flag)
      })
  }

  updatedproducts = async () => {
fetch(
        'https://murmuring-woodland-91622.herokuapp.com/audit//filterByUpdatedProducts' 
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
        this.setState({applications: res.result1});
        this.setState({flag:'desc'})
        this.setState({username:''})
        //alert(this.state.flag)
      })
  }

  removedproducts = async () => {
fetch(
        'https://murmuring-woodland-91622.herokuapp.com/audit/filterByDeletedProducts' 
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
        this.setState({applications: res.result1});
        this.setState({flag:'desc'})
        this.setState({username:''})
        //alert(this.state.flag)
      })
  }

  allproducts = async () => {
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


	render()
	{

const {navigate} = this.props.navigation;
const {heading, input,parent,backGroundImage,content,logo,inputContainer } = styles
		return (
      <View>
      <Header
  placement="center"
  centerComponent={{ text: 'AUDIT', style: { color: '#fff' } }}
/> 
<View style={{ flexDirection:'row' }}>
        <Button
          title='ALL    '
          color="yellow"
          
         onPress={this.allproducts}
        />
        <Button
          title='ADDED'
          color="green"
          style={styles.buttonmargin}
        onPress={this.addedproducts}
        />
        <Button
          title='REMOVED'
          color="red"
          
         onPress={this.removedproducts}
        />
         
         <Button
          title='UPDATED'
          color="blue"
          
         onPress={this.updatedproducts}
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
                  key={application.updatedQuantity}/>
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
    marginright : 1000,
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