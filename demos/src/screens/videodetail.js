import React,{Component } from 'react';
import {View, Text,Image,TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return ( 
      <View style={{flex:1}}>
          <Text>
              啦啦啦啦啦啦啦啦绿
          </Text>
          <View style={{width:50,height:40}}>
              <Image source={require('../public/Iamge/Banner/8.jpg')}/>
              <Text onPress={()=>Actions.videoplay()}>时代峻峰换手机号</Text>
          </View>
      </View>
     );
  }
}
 
export default VideoDetail;