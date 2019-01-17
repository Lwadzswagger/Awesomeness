import React, { Component } from 'react'; 
import { TouchableOpacity, Alert,   Animated } from 'react-native';
import { inject } from 'mobx-react/native'; 
import { Box, Text } from 'react-native-design-utility';
 
import  OnBoardingLogo  from './../commons/OnBoardingLogo';
import  LoginButton  from './../commons/LoginButton';

import { FacebookApi } from '../api/Facebook';
import { GoogleApi } from './../api/Google'; 

const BoxAnimated = Animated.createAnimatedComponent(Box);

@inject('authStore')
class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 100,
    }).start();
  };

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  onGooglePress = async () => {
    try {
      const token = await GoogleApi.loginAsync();
      // console.log('token not sent GOOGLE', token);
      this.props.authStore.login(token, 'GOOGLE');
      
      
    } catch (error) {
      console.log('error', error);
    }
  };

  onFacebookPress = async () => {
    try {
      const token = await FacebookApi.loginAsync();
      // console.log('token not sent FACEBOOK', token);
      this.props.authStore.login(token, 'FACEBOOK');
      
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    const { opacity } = this.state;

    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    });

    // console.log('props', this.props);

    return (
      <Box f={1} center bg="white">
        <BoxAnimated
          f={1}
          style={{
            transform: [
              {
                translateY: logoTranslate,
              },
            ],
          }}
        >
          <Box f={1} center>
            <OnBoardingLogo />
          </Box>
        </BoxAnimated>

        <BoxAnimated f={0.9} w={370} style={{ opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButton>
        </BoxAnimated>
      </Box>
    );
  }
}

export default LoginScreen;
