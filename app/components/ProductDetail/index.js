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
import {FormLabel, FormInput} from 'react-native-elements'
import { StyleSheet } from 'react-native';
import {AsyncStorage} from 'react-native';
import { Header, Avatar, Icon, ListItem } from 'react-native-elements';
import {User} from 'react-native-vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class ProductDetail extends Component{
	 constructor(props) {
    super(props);
    this.state = {
      applications: []
    }
    this.state = {
      prodcutName: '',
      productId: '',
      description: '',
      type : '',
      createdBy : '',
      startDate : '',
      endDate : '',
      initialQuantity:'',
      updatedQuantity:'',
      username:''
    };
  }

onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  componentWillMount() {
    const pid = this.props.navigation.getParam('application').pid;

    fetch('https://murmuring-woodland-91622.herokuapp.com/inventory/getProduct/' + 
    pid)
      .then(response => response.json())
      .then(res=> {
        //alert(res.success);
        
        this.setState({applications: res.result})
       this.setState({productId : this.state.applications[0].productId})
          this.setState({prodcutName : this.state.applications[0].prodcutName})
           this.setState({description : this.state.applications[0].description})
            this.setState({type : this.state.applications[0].type})
             this.setState({createdBy : this.state.applications[0].username})
              this.setState({startDate : this.state.applications[0].startDate})
               this.setState({endDate : this.state.applications[0].endDate})
        
        this.setState({username : this.state.applications[0].username})
      this.setState({initialQuantity : this.state.applications[0].initialQuantity})
      this.setState({updatedQuantity : this.state.applications[0].updatedQuantity})
                //this.state.prodcutName = this.state.applications[0].prodcutName;
      })
  }

  updateApplication = () => {
    this.props.navigation.goBack()
  }

  increaseQuantity = async () => {
    fetch('https://murmuring-woodland-91622.herokuapp.com/inventory/increaseQuantity/' + this.state.productId)
      .then(response => response.json())
      .then(res=> {
        fetch('https://murmuring-woodland-91622.herokuapp.com/inventory/getProduct/' + 
    this.state.productId)
      .then(response => response.json())
      .then(res=> {
        //alert(res.success);
        
        this.setState({applications: res.result})
        this.setState({prodcutName : this.state.applications[0].prodcutName})
         this.setState({productId : this.state.applications[0].productId})
          this.setState({prodcutName : this.state.applications[0].prodcutName})
           this.setState({description : this.state.applications[0].description})
            this.setState({type : this.state.applications[0].type})
             this.setState({createdBy : this.state.applications[0].username})
              this.setState({startDate : this.state.applications[0].startDate})
               this.setState({endDate : this.state.applications[0].endDate})
        
        this.setState({username : this.state.applications[0].username})
      this.setState({initialQuantity : this.state.applications[0].initialQuantity})
      this.setState({updatedQuantity : this.state.applications[0].updatedQuantity})
                //this.state.prodcutName = this.state.applications[0].prodcutName;
      })
      this.componentWillMount()
      })
  }

  decreaseQuantity = async () => {
    fetch('https://murmuring-woodland-91622.herokuapp.com/inventory/decreaseQuantity/' + this.state.productId)
      .then(response => response.json())
      .then(res=> {
        fetch('https://murmuring-woodland-91622.herokuapp.com/inventory/getProduct/' + 
    this.state.productId)
      .then(response => response.json())
      .then(res=> {
        //alert(res.success);
        
        this.setState({applications: res.result})
        this.setState({prodcutName : this.state.applications[0].prodcutName})
         this.setState({productId : this.state.applications[0].prodcutName})
          this.setState({prodcutName : this.state.applications[0].productId})
           this.setState({description : this.state.applications[0].description})
            this.setState({type : this.state.applications[0].type})
             this.setState({createdBy : this.state.applications[0].username})
              this.setState({startDate : this.state.applications[0].startDate})
               this.setState({endDate : this.state.applications[0].endDate})
        
        this.setState({username : this.state.applications[0].username})
      this.setState({initialQuantity : this.state.applications[0].initialQuantity})
      this.setState({updatedQuantity : this.state.applications[0].updatedQuantity})
                //this.state.prodcutName = this.state.applications[0].prodcutName;
      })
      this.componentWillMount()
      })

  }

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View>
          <View style={styles.billings}>
            <Text style={styles.billtext}>Product Details</Text>
            <Text style={styles.text}>{this.state.productId}</Text>
            <Text style={styles.text}>{this.state.prodcutName}</Text>
            <Text style={styles.text}>{this.state.description}</Text>
            <Text style={styles.text}>{this.state.type}</Text>
            <Text style={styles.text}>{this.state.username}</Text>
            <Text style={styles.text}>{this.state.startDate}</Text>
            <Text style={styles.text}>{this.state.endDate}</Text>
            <Text style={styles.text}>{this.state.initialQuantity}</Text>
            <Text style={styles.text}>{this.state.updatedQuantity}</Text>
        
      
      
          <Button
          
          backgroundColor='green'
          title='INCREASE QUANTITY'
          color="green"
          onPress={this.increaseQuantity}
          />
        <Button
        
          title='DECREASE QUANTITY'
          color="red"
          onPress={this.decreaseQuantity}
        />

         <Button
        
          title='ADD FIELD'
          color="yellow"
          onPress={() => navigate('addfield', {name: 'Jane'})}
        />
        <Button
        
          title='AUDIT'
          color="purple"
          onPress={() => navigate('audit', {name: 'Jane'})}
        />

    </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    backgroundColor: '#42A5F5',
    color: 'white',
    borderRadius: 14,

    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
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
  billtext: {
        padding: 6,
        borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    },
    text: {
        margin: 5
    },
    billings: {
        height: 130,
        margin: 10
    },
    totText: {
        textAlign: 'center',
        color: 'red'
    },
    loginButtonSection: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}

});