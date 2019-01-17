import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity, View, Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native'; 
import { observer } from 'mobx-react/native';
import { Feather } from '@expo/vector-icons';

import { productImgs } from '../constants/images';
import { theme } from '../constants/theme';
import QtyHover from './QtyHover';
 
const ANIM_DURATION = 200;

const ViewAnimated = Animated.createAnimatedComponent(View);

@observer
class ProductCard extends Component {
  state = {
    isHover: false,
    cardOpacity: new Animated.Value(1),
  };

  handlePlusPress = () => {
    this.fadeIn();
    this.setState({ isHover: true });
    if (this.props.product.cartQty ===0 ) {
      this.props.product.addToCart();
    }
  };

  handleInc = () => {
    this.props.product.incCartQty();
  };

  handleDec = () => {
    this.props.product.decCartQty();
  };

  handleClose = () => {
    this.fadeOut();
    this.setState({
      isHover: false,
    });
  };

  handleRemove = () => {
    this.handleClose();
    this.props.product.removeFromCart();
  };

  fadeIn = () => {
    Animated.timing(this.state.cardOpacity, {
      toValue: 0.4,
      duration: ANIM_DURATION,
    }).start();
  };

  fadeOut = () => {
    Animated.timing(this.state.cardOpacity, {
      toValue: 1,
      duration: ANIM_DURATION,
    }).start();
  };

  render() {
    const { isHover, cardOpacity, qtyCardOpacity } = this.state;
    const { product } = this.props;
    return (
      <View
      style={{  backgroundColor:'#fff',width:150, padding:8,  position:"relative"  }} 
       >
        <TouchableWithoutFeedback onPress={this.handleClose}>
          <ViewAnimated o={cardOpacity}>
            <View
            style={{  marginBottom:16,   }} 
             >
              <Image
                style={styles.img}
                resizeMode="contain"
                source={product.imageUrl}
              />
            </View>
            <View>
              <Text left size="sm" bold>
                ${product.price} each
              </Text>
              <Text left size="xs">
                {product.name}
              </Text>
              <Text left size="xs" color="greyLight">
                At ${product.kgPrice.toFixed(2)}
                /kg
              </Text>
            </View>
          </ViewAnimated>
        </TouchableWithoutFeedback>
        {!isHover && (
          <TouchableOpacity
            onPress={this.handlePlusPress}
            style={styles.plusBtn}
          >
            <View
              circle={25}
              style={{
                borderColor: theme.color.green,
                borderWidth: 1,backgroundColor:(product.cartQty > 0 ? 'green' : 'white')
              }}
              center
            
            >
              {product.cartQty > 0 ? (
                <Text color="white" size="sm">
                  {product.cartQty}
                </Text>
              ) : (
                <Feather name="plus" size={15} color={theme.color.green} />
              )}
            </View>
          </TouchableOpacity>
        )}
        {isHover && (
          <QtyHover
            qty={product.cartQty}
            handleRemove={this.handleRemove}
            handleInc={this.handleInc}
            handleDec={this.handleDec}
            containerStyle={{ top: 10, right: 10, left: 10, zIndex: 99 }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 100,
  },
  plusBtn: {
    top: 10,
    right: 5,
    position: 'absolute',
  },
});

export default ProductCard;
