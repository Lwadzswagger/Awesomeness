import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Image} from 'react-native'
import { images } from './../constants/images'


export const OnBoardingLogo = () => (
    <View style={ styles.container }>
    <View style={ styles.imageSpace }><Image source={images.logo}/></View>
    <View><Text style={ styles.titleText }>Kasi<Text style={{color:'#24C153'}}>Lam</Text></Text></View>
    <Text  style={ styles.infoText }>All you kasi shopping in one stop</Text>
    </View>
); 

//  OnBoardingLogo;


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageSpace: { 
          marginBottom:15,   
          marginTop:55,   
        
      },
      titleText: {
        fontSize: 60,
        fontWeight: 'bold',

      },
     infoText: {
        fontWeight: 'bold',
        marginBottom:15,   

      },
  });