import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  onLocationPress = () => {
    this.props.navigation.navigate('Locate');
  }
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Location Preferences"
            onPress={() => this.onLocationPress()}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
