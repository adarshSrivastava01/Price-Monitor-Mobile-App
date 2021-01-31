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
          padding: 10,
          width: '80%',
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
            <View>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 24,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </View>
            <View>
              <Text style={{marginLeft: 5, fontSize: 18, color: '#fff'}}>
                {item.price}
              </Text>
            </View>
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
          data={props.dataItems}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.name}`}
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
    paddingVertical: 10,
  },
});

export default Items;
