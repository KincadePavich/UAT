import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Root } from './config/router';

console.disableYellowBox = true;

class App extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.logoStyle} source={require('./media/UAT.png')} />
        <Text style={{ alignSelf: 'center', fontSize: 18, color: '#000', paddingBottom: 15 }}>MONTANA STATE UNIVERSITY</Text>
        <Root />
      </View>
    );
  }
}

const styles = {
  logoStyle: {
    alignSelf: 'center',
    height: 30,
    margin: 10,
    resizeMode: 'contain'
  }
};

export default App;
