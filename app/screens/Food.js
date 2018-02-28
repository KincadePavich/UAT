import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
//import { foods } from '../config/dataFood';
import { Button } from '../components/Button';

class Foods extends Component {
  state = { foods: [] };
  componentWillMount() {
     axios.get('http://universityaroundtown.com/wp-json/wp/v2/sld/491')
     .then(response => this.setState({ foods: response.data }));
   }
  onFoodPress = () => {
    this.props.navigation.navigate('FoodMap');
  }
  renderFoods() {
    return (//(this.state.foods.title.map(food => (
      <ListItem
        key={this.state.foods.id}
        roundAvatar
        avatar={{ uri: 'https://nationalzoo.si.edu/sites/default/files/styles/grid_mobile/public/animals/bobcat_1.jpg?itok=XhTSWnE3' }}
        title={Object.keys(this.state.foods.protected_fields)[0]}
        subtitle={'Enjoy!'}
        hideChevron
      />
    );//));
  }
  render() {
    console.log(this.state);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          <List>
            {this.renderFoods()}
          </List>
        </ScrollView>
        <Button onPress={() => this.onFoodPress()}>
          SHOW MAP VIEW
        </Button>
      </View>
    );
  }
}

export default Foods;
