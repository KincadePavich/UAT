import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { bars } from '../config/dataBars';
import { Button } from '../components/Button';

class Bars extends Component {
  onBarsPress = () => {
    this.props.navigation.navigate('BarsMap');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          <List>
            {bars.map((bar) => (
              <ListItem
                key={bar.name}
                roundAvatar
                avatar={{ uri: bar.picture }}
                title={bar.name}
                subtitle={bar.deal}
                hideChevron
              />
            ))}
          </List>
        </ScrollView>
        <Button onPress={() => this.onBarsPress()}>
          SHOW MAP VIEW
        </Button>
      </View>
    );
  }
}

export default Bars;
