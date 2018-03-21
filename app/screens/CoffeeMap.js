import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { ScrollView, View } from 'react-native';
import { Button } from '../components/Button';
import Ads from '../components/Ads';

const styles = {
  mapStyle: {
    alignItems: 'center',
    height: 1000,
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1
  }
};

class CoffeeMap extends Component {
  state = { items: [], loaded: false };
  componentWillMount() {
     axios.get('http://universityaroundtown.com/wp-json/wp/v2/sld/513')
     .then(response => this.setState({ items: response.data, loaded: true }));
   }

  onPress = () => {
    this.props.navigation.navigate('Coffee');
  }
  createMarkers() {
    this.state.markers = [
      Object.values(this.state.items.protected_fields).map(item => (
        {
          coordinate: {
            latitude: Object.values(item)[4],
            longitude: Object.values(item)[5],
          }
        }
      ))
    ];
  }
  renderMap() {
    return (Object.values(this.state.items.protected_fields).map(item => (
      <Marker
        key={Object.values(item)[0]}
        coordinate={{
          latitude: parseFloat(Object.values(item)[4]),
          longitude: parseFloat(Object.values(item)[5]),
        }}
        title={Object.values(item)[0]}
        description={Object.values(item)[2]}
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
            {this.renderMap()}
          </MapView>
        }
        </ScrollView>
        <Ads />
        <Button onPress={() => this.onPress()}>
          SHOW LIST VIEW
        </Button>
      </View>
    );
  }
}

export default CoffeeMap;