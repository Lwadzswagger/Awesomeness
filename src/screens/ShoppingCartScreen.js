import React, { Component } from 'react';
import { StatusBar, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import CartItem from '../components/CartItem';
import CloseBtn from '../commons/CloseBtn';
import { theme } from '../constants/theme';

@inject('shoppingCartStore')
@observer
class ShoppingCartScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My Cart',
    headerLeft: (
      <CloseBtn left size={25} onPress={() => navigation.goBack(null)} />
    ),
  });

  state = {};

  renderItem = ({ item }) => <CartItem product={item} />;

  keyExtractor = item => String(item.id);

  renderList = () => {
    const { shoppingCartStore } = this.props;

    if (shoppingCartStore.totalProducts === 0) {
      return (
        <View center style={{ flex: 1 }} >
          <Text>Cart Empty</Text>
        </View>
      );
    }

    console.log('products', shoppingCartStore.products);
    console.log('productsList', shoppingCartStore.productsList);

    return (
      <FlatList
        data={shoppingCartStore.productsList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        extraData={shoppingCartStore}
      />
    );
  };

  renderCheckoutBtn = () => {
    const { shoppingCartStore } = this.props;

    if (shoppingCartStore.totalProducts === 0) {
      return null;
    }

    return (
      <View bg="white" p="xs"
        style={{ backgroundColor: 'white', padding: 8 }} >
        <TouchableOpacity>
          <View
            style={{ height: 45, backgroundColor: 'grey', position: "relative" }}
            center radius={6}  >
            <Text bold color="white">
              Checkout
            </Text>

            <View radius={6}  center 
 style={{ backgroundColor: theme.color.greyDark, padding: 8, position:"absolute", right: theme.space.xs }}
            >
              <Text color="white" size="xs">
                ${shoppingCartStore.totalAmount}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }} >
        <StatusBar barStyle="dark-content" />
        {this.renderList()}
        {this.renderCheckoutBtn()}
      </View>
    );
  }
}

export default ShoppingCartScreen;
