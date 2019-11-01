import React, { Component } from 'react'
import { AppRegistry, StyleSheet,  Image, Text, View,  Dimensions } from 'react-native'

import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
      },
      wrapper: {
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      image: {
        width,
        flex: 1
      },
      paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
      },
      paginationText: {
        color: 'white',
        fontSize: 20
      }
  })
  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.viewPager}>
                <Text>Home --- 首页</Text>
                <View style={styles.viewPager}>
                <Swiper
                  style={styles.wrapper}
                  renderPagination={renderPagination}
                  loop={false}
                >
                    <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                      <Image style={styles.image} source={require('../public/Iamge/10.jpg')} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                      <Image style={styles.image} source={require('../public/Iamge/9.jpg')} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                      <Image style={styles.image} source={require('../public/Iamge/7.jpg')} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                      <Image style={styles.image} source={require('../public/Iamge/4.jpg')} />
                    </View>
                </Swiper>
                </View>
            </View>
         );
    }
} 

export default Home; 



