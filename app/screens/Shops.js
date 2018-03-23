import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import { Button } from '../components/Button';
import Ads from '../components/Ads';

class Shops extends Component {
  state = { items: [], loaded: false };
  componentWillMount() {
     axios.get(global.shops)
     .then(response => this.setState({ items: response.data, loaded: true }));
   }
  onPress = () => {
    this.props.navigation.navigate('ShopsMap');
  }
  renderList() {
    return (Object.values(this.state.items.protected_fields).map(item => (
      <ListItem
        key={Object.values(item)[0]}
        roundAvatar
        avatar={{ uri: Object.values(item)[3] }}
        title={Object.values(item)[0]}
        subtitle={Object.values(item)[2]}
        hideChevron
        titleStyle={{ flex: 2, flexWrap: 'wrap', width: '80%', flexDirection: 'column' }}
      />
    )));
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          { this.state.loaded &&
            <List>
              {this.renderList()}
            </List>
          }
        </ScrollView>
        <View>
        <Ads />
        </View>
        <Button onPress={() => this.onPress()}>
          SHOW MAP VIEW
        </Button>
      </View>
    );
  }
}

export default Shops;
