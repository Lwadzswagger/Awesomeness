import React, { Component } from 'react';
import { StatusBar, FlatList, View, Text  } from 'react-native'; 

import CategoryCard from '../components/CategoryCard';
import { theme } from '../constants/theme';
import DealCaroussel from '../components/DealCaroussel';
import ProfileBtn from '../commons/ProfileBtn';

const categories = [
  {
    id: 1,
    title: 'Grocery',
    image: require('../../assets/img/cart.png'),
  },
  {
    id: 2,
    title: 'Drugs',
    image: require('../../assets/img/drugs.png'),
  },
  {
    id: 3,
    title: 'Pets',
    image: require('../../assets/img/pets.png'),
  },
  {
    id: 4,
    title: 'video games',
  },
];

const NUM_COLUMNS = 3;

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'KasiLam',
    headerLeft: <ProfileBtn />,
  };

  state = {};

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <View style={{  width:(1 / NUM_COLUMNS) ,height:120, backgroundColor:'#fff'  }} 
        style={style}>
        <CategoryCard {...item} />
      </View>
    );
  };

  keyExtractor = item => String(item.id);

  separator = () => <View style={{  height:2, backgroundColor:theme.color.greyLighter }}/>;

  render() {
    return (
      <View style={{  flex: 1  }} >
        <StatusBar barStyle="light-content" />
        <View style={{  height: 130,backgroundColor:'white', width:1 }}>
          <DealCaroussel />
        </View>

        <View style={{  flex: 1,padding:10 }} >
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
