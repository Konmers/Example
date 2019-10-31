//首页
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet, 
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <Text>Home --- 首页</Text>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  })
  

export default Home; 



