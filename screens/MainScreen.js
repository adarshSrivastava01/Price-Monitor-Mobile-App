import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

import Button from '../components/Button';
import Items from '../components/Items';

const MainScreen = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const loadData = () => {
    console.log('Starting');
    console.log(name);
    fetch(
      `https://monitor2709.herokuapp.com/info?item=iphone&shops=flipkart,snapdeal`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Button Pressed");
        console.log(data);
        let recievedData = [];
        // data.map(each => {
        //   recievedData.push({
        //     name: each.name,
        //     price: each.price
        //   })
        // });
        for(let i=0; i<data.length - 1; i++) {
          console.log(data[i]);
          recievedData.push(data[i]);
          console.log("Done 1");
        }
        setData(recievedData);
        console.log("------", recievedData);
      })
      .catch(err => setError(err.message));
    console.log('Ending');
  };

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
      <Button title="Search" click={loadData} />
      <ScrollView style={{marginTop: 35}}>
        <View>{data.length !== 0 && <Items dataItems={data} />}</View>
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
    borderRadius: 25,
  },
});

const joinInputName = StyleSheet.compose(
  styles.joinInput,
  styles.joinInputName,
);
