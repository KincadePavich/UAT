import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { ScrollView, View } from 'react-native';
import { Button } from '../components/Button';

const styles = {
  mapStyle: {
    alignItems: 'center',
    height: 1000,
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1
  }
};

class FoodMap extends Component {
  state = { foods: [], loaded: false };
  componentWillMount() {
     axios.get('http://universityaroundtown.com/wp-json/wp/v2/sld/513')
     .then(response => this.setState({ foods: response.data, loaded: true }));
   }

  onFoodPress = () => {
    this.props.navigation.navigate('Food');
  }
  createMarkers() {
    this.state.markers = [
      Object.values(this.state.foods.protected_fields).map(food => (
        {
          coordinate: {
            latitude: Object.values(food)[4],
            longitude: Object.values(food)[5],
          }
        }
      ))
    ];
  }
  renderFoodsMap() {
    return (Object.values(this.state.foods.protected_fields).map(food => (
      <Marker
        key={Object.values(food)[0]}
        coordinate={{
          latitude: parseFloat(Object.values(food)[4]),
          longitude: parseFloat(Object.values(food)[5]),
        }}
        title={Object.values(food)[0]}
        description={Object.values(food)[2]}
      />
    )));
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
        { this.state.loaded &&
          <MapView
            initialRegion={{
              latitude: 45.6770,
              longitude: -111.0429,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            style={styles.mapStyle}
          >
            {this.renderFoodsMap()}
          </MapView>
        }
        </ScrollView>
        <Button onPress={() => this.onFoodPress()}>
          SHOW LIST VIEW
        </Button>
      </View>
    );
  }
}

export default FoodMap;
