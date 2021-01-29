import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={props.title}
      style={styles.Button}
      onPress={props.click}>
      <Text style={styles.ButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 60,
    paddingLeft: 60,
    margin: 15,
    backgroundColor: '#f96d41',
    borderRadius: 30,
  },
  ButtonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Button;
