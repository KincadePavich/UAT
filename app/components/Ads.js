import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';
import axios from 'axios';

class Ads extends Component {
  state = { ads: [], adURLs: [] };
  componentWillMount() {
     axios.get('http://universityaroundtown.com/wp-json/wp/v2/ads?_embed')
     .then(response => this.setState({ ads: response.data }));
   }
  getAds() {
    Object.values(this.state.ads).map(ad => (
      this.state.adURLs.push(Object.values(ad)[16])
    ));
  }
  render() {
    this.getAds();
    return (
      <Image
        width={Dimensions.get('window').width}
        style={{ bottom: 43 }}
        source={{ uri: this.state.adURLs[Math.floor(Math.random() * this.state.adURLs.length)] }}
      />
    );
  }
}

export default Ads;
