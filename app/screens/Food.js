import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import { Button } from '../components/Button';
import Ads from '../components/Ads';

class Foods extends Component {
  state = { items: [], loaded: false };
  componentWillMount() {
     axios.get(global.food)
     .then(response => this.setState({ items: response.data, loaded: true }));
   }
  onPress = () => {
    this.props.navigation.navigate('FoodMap');
  }
  onPressItem = (item) => {
    this.props.navigation.navigate('FoodDetails', { ...item });
  }
  renderList() {
    return (Object.values(this.state.items.protected_fields).map(item => (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <ListItem
          key={Object.values(item)[0]}
          roundAvatar
          avatar={{ uri: Object.values(item)[3] }}
          title={Object.values(item)[0]}
          subtitle={'10% Off Any Purchase'}
          titleStyle={{ flex: 2, flexWrap: 'wrap', width: '80%', flexDirection: 'column' }}
        />
      </TouchableOpacity>
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

export default Foods;
