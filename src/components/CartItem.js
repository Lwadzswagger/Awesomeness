import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity, View, Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { observer } from 'mobx-react/native';

import { theme } from '../constants/theme';
import QtyHover from './QtyHover';

const CustomLayoutAnimation = {
  duration: 200,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};

@observer
class CartItem extends Component {
  state = {
    isHover: false,
  };

  componentWillUnmount() {
    LayoutAnimation.configureNext(CustomLayoutAnimation);
  }

  handleOpen = () => {
    this.setState({ isHover: true });
  };

  handleInc = () => {
    this.props.product.incCartQty();
  };

  handleDec = () => {
    this.props.product.decCartQty();
  };

  handleClose = () => {
    this.setState({
      isHover: false,
    });
  };

  handleRemove = () => {
    this.handleClose();
    this.props.product.removeFromCart();
  };

  render() {
    const { product } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.handleClose}>
        <View style={{  flexDirection:"row",alignItems:'center', padding:8, backgroundColor:'#fff'  }}  >
          <View  
          style={{  flex: 0.3  }} >
            <Image
              style={styles.img}
              resizeMode="contain"
              source={product.imageUrl}
            />
          </View>
          <View  
          style={{  flex: 1,paddingLeft:8  }} >
            <View  
            style={{  marginBottom:8  }} >
              <Text bold>{product.name}</Text>
              <Text color="greyDark" size="xs">
                At ${product.kgPrice}
                /kg
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={product.removeFromCart}>
                <View dir="row" align="center"
                style={{  flexDirection:"row",alignItems:'center'  }} >
                  <Feather
                    name="trash-2"
                    color={theme.color.green}
                    size={theme.text.size.sm}
                  />
                  <Text size="sm" color="greyDark" ml={5}>
                    Remove
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View center  
          style={{  marginRight: 24, position:"relative"   }} >
            <TouchableOpacity onPress={this.handleOpen}>
              <View
                
                center
                radius={6}
                style={{ borderWidth: 1,height:35, width:45, borderColor: theme.color.greyLight }}
              >
                <Text bold>{product.cartQty}</Text>
              </View>
            </TouchableOpacity>
            {this.state.isHover && (
              <QtyHover
                qty={product.cartQty}
                handleRemove={this.handleRemove}
                handleInc={this.handleInc}
                handleDec={this.handleDec}
                containerStyle={{ top: 0, right: -30, left: -30, zIndex: 99 }}
              />
            )}
          </View>
          <View>
            <Text>${product.totalPrice}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 100,
  },
});

export default CartItem;
