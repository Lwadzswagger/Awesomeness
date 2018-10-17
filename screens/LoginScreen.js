import React,{ Component } from 'react';
import { Alert,StyleSheet,View} from 'react-native'
import { OnBoardingLogo } from './../common/OnBoardingLogo'
import {  LoginButtons } from './../common/LoginButtons'
import { FacebookApi} from './../api/Facebook';
import { GooogleApi } from '../api/Google';


export default class LoginScreen  extends Component{
state = {}

onGooglePress = async ()=>{
    try {
        const token = await GooogleApi.loginAsync()
           console.log('token', token);
           this.props.navigation.navigate('Main')
           
       } catch (error) {
           console.log('error', error);
           
       }
} 

onFacebookPress = async ()=>{
    try {
     const token = await FacebookApi.loginAsync()
        console.log('token', token);
        
    } catch (error) {
        console.log('error', error);
        
    }
}


render(){  
    return(
    <View style={ styles.container}>
       <View><OnBoardingLogo/></View>
            {/* <Text>Hello to my login page</Text> */} 
       <View style={styles.halfTheScreen}>
     <LoginButtons onPress={this.onGooglePress} type='google'>Continue with Google</LoginButtons>
     <LoginButtons onPress={this.onFacebookPress} type='facebook'>Continue with Facebook</LoginButtons>

        </View>  
    </View>
    )
}
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
    touchables:{
        backgroundColor:'steelblue',
        width:'80%', 
        borderRadius:3,
        padding:15, 
        flexDirection:'row',
        alignSelf:'center'

        
         },
    googleIcon:{
        backgroundColor:'#fff',
        height:32,
        width:32,
        borderRadius:3,
        alignContent:'center',
        justifyContent:'center'
        },
    halfTheScreen: {
        flex:0.9,
        width:'100%', 
        },
  });

const shadowStyle = { 
    shadowOpacity:1,
    shadowRadius:10,
    shadowColor:'black',
    shadowOffset:{
        width:1,
        height:1,
    }
}




//   shadowColor: "#000",
//   shadowOffset: {
//   width: 0,
//   height: 6,
//   },
//   shadowOpacity: 0.39,
//   shadowRadius: 8.30,
//   elevation: 13, 