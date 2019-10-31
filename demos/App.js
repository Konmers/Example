/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,//样式相关的组件，专门用来创建样式的
  ScrollView,
  Image,//图片
  View,//用来布局，类似div
  Text,//文本节点，所有文本必须放到这个里面
  TextInput,//文本框组件
  Button,//按钮
  ActivityIndicator,//loading 加载动画转圈
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Video from 'react-native-video';
 
const App: () => React$Node = () => {
  return (
    <>
    <View>
      <ActivityIndicator style={{margin: 20}} color='red' size='large'></ActivityIndicator>
      <ActivityIndicator style={{margin: 20}} color='blue' size='small'></ActivityIndicator>
      <Text style={{fontSize:20,textAlign:"center"}}>
        贼 nice 了
      </Text>
      {/* 网上图片  必须给宽高*/}
      <Image 
         style = {{width: 100,height: 100}}
         source= {{uri:'https://avatars1.githubusercontent.com/u/24784550?s=460&v=4'}}
      />
      {/* 项目图片   不必须给宽高*/}
      <Image 
        style = {{width: 100,height: 100}}
        source= {require('./src/public/Iamge/10.jpg')}
      />
      <Video
        // ref={(ref: Video) => { //方法对引用Video元素的ref引用进行操作
        //     this.video = ref
        // }}
        source = {require('./src/public/Iamge/test2.mp4')}
        // rate={this.state.rate}//播放速率
        // paused={this.state.paused}//暂停
        // volume={this.state.volume}//调节音量
        // muted={this.state.muted}//控制音频是否静音
        // resizeMode={this.state.resizeMode}//缩放模式
        // onLoad={this.onLoad}//加载媒体并准备播放时调用的回调函数。
        // onProgress={this.onProgress}//视频播放过程中每个间隔进度单位调用的回调函数
        // onEnd={this.onEnd}//视频播放结束时的回调函数
        // onAudioBecomingNoisy={this.onAudioBecomingNoisy}//音频变得嘈杂时的回调 - 应暂停视频
        // onAudioFocusChanged={this.onAudioFocusChanged}//音频焦点丢失时的回调 - 如果焦点丢失则暂停
        // repeat={false}//确定在到达结尾时是否重复播放视频。
        style={styles.backgroundVideo}
      />
      <TextInput style={{height:40,margin:10,borderColor:'gray',borderWidth:1}} keyboardType='numeric' secureTextEntry={true} >
      </TextInput>
      <Button
      onPress={()=>{
        console.warn('hhhhh')
      }}
        title="点一哈"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  loading: {
    margin:20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex:1,
  },
})

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
