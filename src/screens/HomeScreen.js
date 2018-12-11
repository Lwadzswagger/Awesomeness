import React, { Component } from 'react';
import { StatusBar, FlatList ,Dimensions} from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CategoryCard from '../components/CategoryCard';
import DealCaroussel from '../components/DealCaroussel';

import { theme } from '../constants/theme';
import ProfileBtn from '../commons/ProfileBtn';
const { width: WIDTH } = Dimensions.get('window').width;

const categories = [
  {
    id: 1,
    title: 'Grocery',
    image: require('../../assets/img/cart.png'),
  },
  {
    id: 2,
    title: 'Medicine',
    image: require('../../assets/img/drugs.png'),
  },
  {
    id: 3,
    title: 'Pets',
    image: require('../../assets/img/pets.png'),
  },
  {
    id: 4,
    title: 'other',
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
      <Box w={1 / NUM_COLUMNS} bg="white" h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  };

  keyExtractor = item => String(item.id);

  separator = () => <Box h={2} bg="greyLighter" />;

  render() {
    return (
      <Box f={1} disabled={true}>
        <StatusBar barStyle="light-content" />
        <Box h={130} bg="white" 
        style={{width: WIDTH }}
        >  
          <DealCaroussel />
        </Box>

        <Box f={1} p={10}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box>
    );
  }
}

export default HomeScreen;
