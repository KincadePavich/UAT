import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from '../components/Button';

class Settings extends Component {
  saveMSU() {
    const object = {
      name: 'MONTANA STATE UNIVERSITY',
      site: 'http://msubobcats.com/index.aspx',
      food: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      bars: 'http://universityaroundtown.com/wp-json/wp/v2/sld/504',
      shops: 'http://universityaroundtown.com/wp-json/wp/v2/sld/503',
      coffee: 'http://universityaroundtown.com/wp-json/wp/v2/sld/509',
      personal: 'http://universityaroundtown.com/wp-json/wp/v2/sld/508',
      specialty: 'http://universityaroundtown.com/wp-json/wp/v2/sld/506',
      ads: 'http://universityaroundtown.com/wp-json/wp/v2/ads?_embed',
      color: '#002469',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
  }
  saveUM() {
    const object = {
      name: 'UNIVERSITY OF MONTANA',
      site: 'http://gogriz.com/',
      food: 'http://universityaroundtown.com/wp-json/wp/v2/sld/859',
      bars: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      shops: 'http://universityaroundtown.com/wp-json/wp/v2/sld/503',
      coffee: 'http://universityaroundtown.com/wp-json/wp/v2/sld/509',
      personal: 'http://universityaroundtown.com/wp-json/wp/v2/sld/508',
      specialty: 'http://universityaroundtown.com/wp-json/wp/v2/sld/506',
      ads: 'http://universityaroundtown.com/wp-json/wp/v2/ads?_embed',
      color: '#810013',
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
  updateSchool = () => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Tabs' })]
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>CHOOSE YOUR UNIVERSITY</Text>
        <TouchableOpacity onPress={this.saveMSU}>
          <Text>Montana State University</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.saveUM}>
          <Text>University of Montana</Text>
        </TouchableOpacity>
        <Button onPress={this.updateSchool}>
          SUBMIT
        </Button>
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

export default Settings;
