import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
//import { foods } from '../config/dataFood';
import { Button } from '../components/Button';

class Foods extends Component {
  state = { foods: [], loaded: false };
  componentWillMount() {
     axios.get('http://universityaroundtown.com/wp-json/wp/v2/sld/491')
     .then(response => this.setState({ foods: response.data, loaded: true }));
   }
  onFoodPress = () => {
    this.props.navigation.navigate('FoodMap');
  }
  renderFoods() {
    return (Object.values(this.state.foods.protected_fields).map(food => (
      <ListItem
        key={Object.values(food)[0]}
        roundAvatar
        avatar={{ uri: Object.values(food)[4] }}
        title={Object.values(food)[0]}
        subtitle={Object.values(food)[2]}
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
              {this.renderFoods()}
            </List>
          }
        </ScrollView>
        <Button onPress={() => this.onFoodPress()}>
          SHOW MAP VIEW
        </Button>
      </View>
    );
  }
}

export default Foods;
