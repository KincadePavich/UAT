import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { shops } from '../config/dataShops';
import { Button } from '../components/Button';

class Shops extends Component {
  onShopsPress = () => {
    this.props.navigation.navigate('ShopsMap');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          <List>
            {shops.map((shop) => (
              <ListItem
                key={shop.name}
                roundAvatar
                avatar={{ uri: shop.picture }}
                title={shop.name}
                subtitle={shop.deal}
                hideChevron
              />
            ))}
          </List>
        </ScrollView>
        <Button onPress={() => this.onShopsPress()}>
          SHOW MAP VIEW
        </Button>
      </View>
    );
  }
}

export default Shops;
