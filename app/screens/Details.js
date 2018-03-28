import React, { Component } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';

class Details extends Component {
  render() {
    const { qcopd_item_title, qcopd_item_link, qcopd_item_img_link } = this.props.navigation.state.params;
    return (
      <ScrollView style={{ flex: 1, marginBottom: 40, marginTop: -22 }}>
        <Text style={styles.headerStyle}>{qcopd_item_title}</Text>
        <Image style={styles.logoStyle} source={{ uri: qcopd_item_img_link }} />
        <Text style={styles.subtitleStyle}>10% Off Any Purchase</Text>
        <Text style={styles.textStyle}>Please show this screen to your cashier or server to obtain your discount.</Text>
        <TouchableOpacity onPress={() => Linking.openURL(qcopd_item_link)}>
          <Text style={styles.linkStyle}>{qcopd_item_title} Website</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 30,
    padding: 10,
  },
  subtitleStyle: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  logoStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  linkStyle: {
    padding: 20,
    color: '#002469',
    fontSize: 20,
    textAlign: 'center',

  }
};

export default Details;
