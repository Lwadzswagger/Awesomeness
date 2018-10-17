import React,{ Component } from 'react';
import {Text,TouchableOpacity, StyleSheet,Image,View} from 'react-native';
import { images} from './../constants/images';
import { FontAwesome } from '@expo/vector-icons';





const bgColor = (type) =>{
    switch (type) {
        case 'google':            
            return '#1976D2'; 
        case 'facebook':            
            return '#4D6FA9';    
        default:
            return '#fff';
    }
} 

 export const LoginButtons = ({children, type, onPress })=> (
    <TouchableOpacity onPress={onPress}>
    <View style={ {
        backgroundColor : bgColor(type),        
        width:'80%', 
        borderRadius:3,
        padding:15, 
        marginBottom:20,
        flexDirection:'row',
        alignSelf:'center'        
         }}>  
       <View style={{marginRight:10,justifyContent:'center'}}> 
            <View style={styles.googleIcon}>
            <View style={{alignSelf:'center'}}>
            {type === 'google' && <Image source={images.googleIcon} />} 
            {type === 'facebook' && <FontAwesome name='facebook' color='#4D6FA9' size={30} style={{position:'absolute',marginRight:5,marginBottom:-3}}/>} 
            </View> 
            </View> 
       </View>
       <View style={{alignSelf:'center'}}>
           <Text style={{color:'#fff', }}>{children}</Text>
        </View>
        
    </View> 
</TouchableOpacity> 
 )

const styles = StyleSheet.create({
    
    // touchables:,
    googleIcon:{
        backgroundColor:'#fff',
        height:32, 
        width:32,
        borderRadius:3,
        alignContent:'center',
        justifyContent:'center',
        position:'relative',
        }, 
  });