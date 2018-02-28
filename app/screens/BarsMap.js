import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Button } from '../components/Button';

class BarsMap extends Component {
  onBarsPress = () => {
    this.props.navigation.navigate('Bars');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          <List>
          <ListItem
            title="Bars map coming soon!"
            hideChevron
          />
          </List>
        </ScrollView>
        <Button onPress={() => this.onBarsPress()}>
          SHOW LIST VIEW
        </Button>
      </View>
    );
  }
}

export default BarsMap;
