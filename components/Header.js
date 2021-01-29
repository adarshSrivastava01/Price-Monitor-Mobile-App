import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Price Monitor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#f96d41',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    paddingLeft: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
