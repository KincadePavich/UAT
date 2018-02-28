import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Category extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Choose Your Categories! (Coming Soon)"
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default Category;
