import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

class Locate extends Component {
  saveData() {
    const object = {
      name: 'Montana State University',
      food: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      bars: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      shops: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      coffee: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      personal: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      specialty: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      ads: 'http://universityaroundtown.com/wp-json/wp/v2/ads?_embed',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
  }

  showData = async () => {
    try {
      const user = await AsyncStorage.getItem('schoolObj');
      const parsed = JSON.parse(user);
      alert(parsed.name);
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.saveData}>
          <Text>Click me to set MSU as your location!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showData}>
          <Text>Click me to show the location you have set!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default Locate;
