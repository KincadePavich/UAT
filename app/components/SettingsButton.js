import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SettingsButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    margin: 10
  },
  textStyle: {
    alignSelf: 'flex-end',
  }
};

export { SettingsButton };
