import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Button } from '../components/Button';

class ShopsMap extends Component {
  onShopsPress = () => {
    this.props.navigation.navigate('Shops');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          <List>
          <ListItem
            title="Shops map coming soon!"
            hideChevron
          />
          </List>
        </ScrollView>
        <Button onPress={() => this.onShopsPress()}>
          SHOW LIST VIEW
        </Button>
      </View>
    );
  }
}

export default ShopsMap;
