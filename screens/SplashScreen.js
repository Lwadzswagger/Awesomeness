import React,{ Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
// import {Image} from 'react-native'
// import { images } from './../constants/images'
import { OnBoardingLogo } from './../common/OnBoardingLogo'

export default class SplashScreen extends Component{

componentDidMount(){
    this.authCheck();
}

authCheck = ()=> {

    setTimeout(() => {
        this.props.navigation.navigate('Auth')
    }, 2000);
}
  


render(){
    return( 
        <View style={styles.container}>
         <OnBoardingLogo/>
        </View>
    )
}
}

 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
//       imageSpace: { 
//           marginBottom:15,   
        
//       },
//       titleText: {
//         fontSize: 60,
//         fontWeight: 'bold',
//         // fontFamily: 'space-mono',
//       },
  });
  
 