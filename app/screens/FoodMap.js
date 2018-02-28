import React, { Component } from 'react';
import MapView from 'react-native-maps';
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
  onFoodPress = () => {
    this.props.navigation.navigate('Food');
  }
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          <MapView
            style={styles.mapStyle}
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
