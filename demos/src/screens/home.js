
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,//页面滚动组件 （默认 一个页面长度大于手机的长度，使用这个组件）
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width,height } = Dimensions.get('window')

const styles = StyleSheet.create({
     viewPager:{
       flex:1,
       height:height*0.5
     },
      wrapper: {
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        color:'red',
      },
      text: {
        color: 'red',
        fontSize: 20,
        marginLeft:10,
        fontWeight: 'bold'
      },
      image: {
        width,
        flex: 1
      },
      paginationStyle: {
        position: 'absolute',
        bottom: -2,
        right: 10
      },
      paginationText: {
        color: '#23A8F2',
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
                <ScrollView style={{width:'100%',marginBottom:20}}>
                  <Text>Home --- 首页</Text>
                  <View style={styles.viewPager}>
                    <Swiper
                      style={styles.wrapper}
                      renderPagination={renderPagination}
                      loop={false}
                    >
                        <View style={styles.slide} >
                          <Image style={styles.image} source={require('../public/Iamge/Banner/10.jpg')} />
                          <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>Aussie tourist dies at Bali hotel</Text>
                        </View>
                        <View style={styles.slide}>
                          <Image style={styles.image} source={require('../public/Iamge/Banner/7.jpg')} />
                          <Text style={styles.text} numberOfLines={1}>Big lie behind Nine’s new show</Text>
                        </View>
                        <View style={styles.slide}>
                          <Image style={styles.image} source={require('../public/Iamge/Banner/9.jpg')} />
                          <Text style={styles.text} numberOfLines={1}>Why Stone split from Garfield</Text>
                        </View>
                        <View style={styles.slide}>
                          <Image style={styles.image} source={require('../public/Iamge/Banner/1.jpg')} />
                          <Text style={styles.text} numberOfLines={1}>Learn from Kim K to land that job</Text>
                        </View>
                    </Swiper>
                  </View>
                  <View style={{height:500,flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/a.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/cool.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                     <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/ciTooth.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/happy.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/love.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/monster.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/ninja.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/skeleton.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                      <View style={{marginLeft: 30,marginRight: 30,marginTop:10}}>
                         <Image style={{width:60,height:60}} source={require('../public/Iamge/Expression/smileCry.jpg')}/>
                         <Text>商家电话</Text>
                      </View>
                  </View>
                </ScrollView>
         );
    }
} 

export default Home; 



