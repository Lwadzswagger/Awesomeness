import React from 'react';
import { ActivityIndicator, UIManager ,View} from 'react-native'; 
import { Provider } from 'mobx-react/native';

import { UtilityThemeProvider, Box } from 'react-native-design-utility';

import Navigation from './src/screens';
import { images, tabBarIcons } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';
import { theme } from './src/constants/theme';
import { store } from './src/stores';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imagesAssets = cacheImages([
      ...Object.values(images),
      ...Object.values(tabBarIcons.active),
      ...Object.values(tabBarIcons.inactive),
    ]);

    await Promise.all([...imagesAssets]);

    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{flex:1, backgroundColor:'#fff'}} center >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <Provider {...store}>
         <UtilityThemeProvider theme={theme}>
          <Navigation />
        </UtilityThemeProvider>
      </Provider>
    );
  }
}
