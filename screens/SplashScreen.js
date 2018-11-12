import React,{ Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { inject } from 'mobx-react/native'

import { OnBoardingLogo } from './../common/OnBoardingLogo'

@inject('currentUser')
export default class SplashScreen extends Component{

componentDidMount(){
    // this.checkAuth();
}

checkAuth = async ()=> {
await this.props.currentUser.setUpAuth()
};
  


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
  
 