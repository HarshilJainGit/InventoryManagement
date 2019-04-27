import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class Scanner extends Component {
  state = {
    permission: null
  };

  componentDidMount() {
    this.askCamPermission();
  }

  readCode = data => {
    Alert.alert(
      'Scan successful but unable to fetch data from remote API',
      JSON.stringify(data)
    );
  };

  askCamPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      permission: status === 'granted',
    });
    
  };


  render() {
    return (
      <View style={styles.barcodeBox}>
        {this.state.permission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.permission === false ?
            <Text>No Camera access</Text> :
            <BarCodeScanner
              onBarCodeRead={this.readCode}
              style={{ height: 300, width: 300 }}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barcodeBox: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
  }
});
