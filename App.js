/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25282F',
  },
});

export default App;
