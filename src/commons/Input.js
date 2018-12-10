import React, { PureComponent } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../constants/theme';

class Input extends PureComponent {
  state = {};
  render() {
    const { containerStyle, onPress, ...rest } = this.props;

    const input = (
      <TextInput
        {...rest}
        style={styles.input}
        selectionColor={theme.color.green}
      />
    );

    if (typeof onPress === 'function') {
      return (
        <View   radius={6}
   style={[
            {
              width: 1, height: 50,
              padding: 8, marginBottom: 6,
              borderWidth: 1,
              borderColor: theme.color.greyLight,  position:"relative"
            },
            containerStyle,
          ]}
        
        >
          {input}
          <TouchableOpacity style={styles.touchableSurface} onPress={onPress} />
        </View>
      );
    }

    return (
      <View
   
        radius={6}
        
        style={[
          {
            borderWidth: 1,marginBottom:8,padding:8, height:50, width:1,
            borderColor: theme.color.greyLight,
          },
          containerStyle,
        ]}
      >
        {input}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  touchableSurface: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});

export default Input;
