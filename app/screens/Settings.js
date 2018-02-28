import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  onLocationPress = () => {
    this.props.navigation.navigate('Locate');
  }
  onCategoryPress = () => {
    this.props.navigation.navigate('Category');
  }
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Location Preferences"
            onPress={() => this.onLocationPress()}
          />
          <ListItem
            title="Category Preferences"
            onPress={() => this.onCategoryPress()}
          />
          <ListItem
            title="Push Notifications"
            switchButton
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
