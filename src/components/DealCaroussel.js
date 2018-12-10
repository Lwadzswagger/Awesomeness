import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, Dimensions,View } from 'react-native'; 

const { width: WIDTH } = Dimensions.get('window');

const images = [
  require('../../assets/img/food1.png'),
  require('../../assets/img/food2.png'),
  require('../../assets/img/food3.png'),
];

const DOT_SIZE = 8;
const TIME = 3000;

class DealCaroussel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.scrollView = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.handleScroll();
    }, TIME);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleScroll = () => {
    const newIndex = this.state.currentIndex + 1;

    if (newIndex < images.length) {
      this.scrollView.current.scrollTo({
        x: newIndex * WIDTH,
        animated: true,
      });

      this.setState({ currentIndex: newIndex });
    } else {
      this.scrollView.current.scrollTo({
        x: 0,
        animated: true,
      });
      this.setState({ currentIndex: 0 });
    }
  };

  onScroll = event => {
    const { contentOffset } = event.nativeEvent;

    const currentIndex = Math.round(contentOffset.x / WIDTH);

    if (this.state.currentIndex !== currentIndex) {
      this.setState({ currentIndex });
    }
  };

  render() {
    return (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={this.scrollView}
          scrollEventThrottle={16}
          onScroll={this.onScroll}
        >
          {images.map((img, i) => (
            <View
              key={i}
           
              style={{ height: 130,   position:"relative", width: WIDTH }}
            >
              <Image source={img} />
              <View
             
                style={{ height: 130,  flexDirection:"row",alignItems:"flex-end", justifyContent:"center",
                paddingBottom:8, position:"absolute",width: WIDTH }}
                 
              >
                {Array.from({ length: images.length }).map((_, index) => (
                  <View
                    key={index}
                    bg={
                      this.state.currentIndex === index
                        ? 'black'
                        : 'transparent'
                    }
                    style={{ borderWidth: 1, borderColor: 'black' }}
                    circle={DOT_SIZE}
                    mx={DOT_SIZE / 2}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default DealCaroussel;
