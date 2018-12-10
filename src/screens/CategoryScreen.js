import React, { Component } from 'react'; 
import { ScrollView,View } from 'react-native';
import { inject } from 'mobx-react/native';

import ProductCard from '../components/ProductCard';

@inject('productsStore')
class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', 'InStore'),
  });

  state = {};
  render() {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.props.productsStore.data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CategoryScreen;
