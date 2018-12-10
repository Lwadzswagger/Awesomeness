import React, { PureComponent } from 'react'; 
import { View } from 'react-native';
import TabItem from './TabItem';

class TabBar extends PureComponent {
  render() {
    const { navigation } = this.props;

    const { routes, index } = navigation.state;

    return (
      <View
      style={{  height:60,flexDirection:'row', backgroundColor:'#fff', }}   shadow={0}>
        {routes.map((route, i) => (
          <TabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
          />
        ))}
      </View>
    );
  }
}

export default TabBar;
