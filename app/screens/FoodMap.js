import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { ScrollView, View } from 'react-native';
import { Button } from '../components/Button';

class FoodMap extends Component {
  onFoodPress = () => {
    this.props.navigation.navigate('Food');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        </ScrollView>
        <Button onPress={() => this.onFoodPress()}>
          SHOW LIST VIEW
        </Button>
      </View>
    );
  }
}

export default FoodMap;
