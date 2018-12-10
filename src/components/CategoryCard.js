import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native'; 

import { NavigationService } from '../api/NavigationService';

class CategoryCard extends PureComponent {
  state = {};

  handlePress = () => {
    NavigationService.navigate('Category', { name: this.props.title });
  };

  render() {
    const { title, image } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.button}>
        <View center  
        style={{  flex: 1  }} >
          {image && (
            <View center
            style={{  marginBottom: 16,   }} >
              <Image source={image} />
            </View>
          )}
          <View center>
            <Text size="sm" center capitalizeEach color="greyDarker">
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
});

export default CategoryCard;
