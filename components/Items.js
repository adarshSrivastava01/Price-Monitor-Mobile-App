import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Flipkart from '../assets/images/flipkart.jpg';

const items = [
  {
    image: 'https://picsum.photos/200',
    name: 'Item 1',
    price: '$999',
    id: 'A11',
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Item 2',
    price: '$222',
    id: 'A12',
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Item 3',
    price: '$111',
    id: 'A13',
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Item 3',
    price: '$111',
    id: 'A16',
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Item 3',
    price: '$111',
    id: 'A17',
  },
];

const Items = (props) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginLeft: index === 0 ? 15 : 0,
          marginRight: 15,
          borderRadius: 10,
          backgroundColor: '#F96D41',
          padding: 10
        }}
        onPress={() => console.log('My Item')}>
        <Image
          source={Flipkart}
          resizeMode="cover"
          style={{width: 150, height: 150, borderRadius: 20}}
        />
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginLeft: 5, fontSize: 24, color: '#fff', fontWeight: 'bold'}}>
              {item.name}
            </Text>
            <Text style={{marginLeft: 5, fontSize: 18, color: '#fff'}}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.slider}>
        <Text style={{fontSize: 24, color: '#fff'}}>Search Results:</Text>
      </View>
      <View style={styles.items}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#25282f',
    paddingVertical: 10
  },
});

export default Items;
