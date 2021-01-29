import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

import Button from '../components/Button';
import Items from '../components/Items';

const MainScreen = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  return (
    <View style={styles.inputView}>
      <View style={{alignSelf: 'flex-start', marginLeft: '10%'}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#fff',
          }}>
          Enter Product Name
        </Text>
      </View>
      <TextInput
        placeholder="Enter Name"
        onChange={(text) => setName(text)}
        autoCompleteType="name"
        autoFocus={true}
        textContentType="name"
        textAlign="left"
        style={joinInputName}
        placeholderTextColor={'#aaa'}
      />
      <Button title="Search" />
      <ScrollView style={{marginTop: 35}}>
        <View>
          <Items />
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  inputView: {
    marginTop: 30,
    alignItems: 'center',
  },
  joinInput: {
    borderWidth: 1,
    borderColor: '#f96d41',
    marginBottom: 10,
    padding: 8,
    textAlign: 'center',
    width: '80%',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    borderRadius: 25
  },
});

const joinInputName = StyleSheet.compose(
  styles.joinInput,
  styles.joinInputName,
);
