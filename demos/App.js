/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,//样式相关的组件，专门用来创建样式的
  ScrollView,//页面滚动组件 （默认 一个页面长度大于手机的长度，使用这个组件）
  Image,//图片
  View,//用来布局，类似div
  Text,//文本节点，所有文本必须放到这个里面
  TextInput,//文本框组件
  Button,//按钮
  ActivityIndicator,//loading 加载动画转圈
  Dimensions,//得到手机屏幕的宽和高
  StatusBar,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

//页面引用
import Home from './src/screens/home.js'; //首页
// import Shop from './src/screens/demo.js';//商城
import Shop from './src/screens/shop.js';//商城
import Leaderboard from './src/screens/leaderboard.js';//排行榜
import Personal from './src/screens/personal.js';//个人中心
import VideoDetail from './src/screens/videodetail.js';//视频详情
import VideoPlayScreen from './src/screens/videoplayer.js';//视频播放

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedTab:'home' //默认选中 home 页面
     }
  }
  render() { 
    return (     
            <View style={styles.containner}>
                <TabNavigator tabBarStyle={{alignItems:'center',height:'8%'}}>
                    {/* Home 首页*/}
                    <TabNavigator.Item
                      tabStyle={{alignSelf:'center'}}
                      selected={this.state.selectedTab === 'home'} //判断当前的tab是否被选中
                      title="首页" //表示 tabbar 展示名称
                      // titleStyle={styles.tabText}//title 样式
                      renderIcon={() =>
                        <Text style={[styles.icon,{color:'#707070'}]}>{'\ue702'}</Text>
                      }
                      renderSelectedIcon={() => 
                        <Text style={[styles.icon,{color:'#1296db'}]}>{'\ue702'}</Text>}
                      onPress={() => this.setState({ selectedTab: 'home' })}//点击tab 操作
                      >
                      <Home></Home>
                    </TabNavigator.Item>
                    {/* Shop 商城*/}
                    <TabNavigator.Item
                      tabStyle={{alignSelf:'center'}}
                      selected={this.state.selectedTab === 'shop'}
                      title="商城"
                      renderIcon={() =>
                        <Text style={[styles.icon,{color:'#707070'}]}>{'\ue708'}</Text>}
                      renderSelectedIcon={() => 
                        <Text style={[styles.icon,{color:'#1296db'}]}>{'\ue708'}</Text>}
                      // badgeText="1"//消息提示
                      renderBadge={()=><Text style={styles.badgeText}>15</Text>}//动态消息提示
                      onPress={() => this.setState({ selectedTab: 'shop' })}
                      >
                      <Shop></Shop>
                    </TabNavigator.Item>
                    {/* Leaderboard 排行榜*/}
                    <TabNavigator.Item
                      tabStyle={{alignSelf:'center'}}
                      selected={this.state.selectedTab === 'leaderboard'}
                      title="排行榜"
                      renderIcon={() =>
                        <Text style={[styles.icon,{color:'#707070'}]}>{'\ue6ee'}</Text>}
                      renderSelectedIcon={() => 
                        <Text style={[styles.icon,{color:'#1296db'}]}>{'\ue6ee'}</Text>}
                      onPress={() => this.setState({ selectedTab: 'leaderboard' })}
                      >
                      <Leaderboard></Leaderboard>
                    </TabNavigator.Item>
                    {/* Personal 个人中心*/}
                    <TabNavigator.Item
                      tabStyle={{alignSelf:'center'}}
                      selected={this.state.selectedTab === 'personal'}
                      title="个人中心"
                      renderIcon={() =>
                        <Text style={[styles.icon,{color:'#707070'}]}>{'\ue70e'}</Text>}
                      renderSelectedIcon={() => 
                        <Text style={[styles.icon,{color:'#1296db'}]}>{'\ue70e'}</Text>}
                      onPress={() => this.setState({ selectedTab: 'personal' })}
                      >
                      <Personal></Personal>
                    </TabNavigator.Item>
                 </TabNavigator>
            </View> 
    );
  }
}
const styles =StyleSheet.create({
  containner:{
     flex:1,
  },
  icon:{
    fontFamily: "iconfont",
    fontSize: 35,
  },
  badgeText:{
    width:15,
    color:'#fff',
    fontSize:12,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:18,
    backgroundColor:'red'
  },
})