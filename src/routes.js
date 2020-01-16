import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeS from 'react-native-vector-icons/Foundation';
import SearchS from 'react-native-vector-icons/AntDesign';
import Send from 'react-native-vector-icons/Feather';
import PlusS from 'react-native-vector-icons/FontAwesome';
import LikeS from 'react-native-vector-icons/AntDesign';
import UserS from 'react-native-vector-icons/Feather';

import {Image, TouchableOpacity, View} from 'react-native';

import logo from './assets/logo.png';
import Camera from 'react-native-vector-icons/SimpleLineIcons';
import igtv from './assets/igtv.png';


import Feed from './pages/Feed';

  const FeedPage =createStackNavigator({
    index:{
      screen: Feed,
      navigationOptions:{
        headerStyle: {
          backgroundColor: 'black',
        },
       
        headerTitle:()=> <Image style={{ marginTop:5}}  source={logo} />,
        headerLeft:()=>(
          
          <TouchableOpacity style={{marginLeft:20, alignItems:"center" }}>
            <Camera name="camera" size={25} color="#fff" />
          </TouchableOpacity>
        ),
        headerRight:()=>(
          <View style={{flexDirection: "row", justifyContent: "center", alignContent: "center"}}>
          <TouchableOpacity style={{marginRight:20}} >
            <Image source={igtv} style={{height:25, width:25 }}  />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight:10}} >
            <Send name="send" size={25} color="#fff"/>
          </TouchableOpacity>
          </View>
        )
      }
    }
    
  });


  const BottomTabs = createMaterialBottomTabNavigator({
    Feed:{
      screen: FeedPage,
      navigationOptions:{
        tabBarIcon: <HomeS name="home" size={25} color="#fff" />
      }
    },
    Search:{
      screen: FeedPage,
      navigationOptions:{
        tabBarIcon: <SearchS name="search1" size={25} color="#fff" />
      }
    },
    Plus:{
      screen: FeedPage,
      navigationOptions:{
        tabBarIcon: <PlusS  name="plus-square-o" size={25} color="#fff" />
      }
    },
    Like:{
      screen: FeedPage,
      navigationOptions:{
        tabBarIcon: <LikeS name="hearto" size={20} color="#fff" />
      }
    },
    User:{
      screen: FeedPage,
      navigationOptions:{
        tabBarIcon: <UserS name="user" size={25} color="#fff" />
      }
    }
  },{
    labeled: false,
    barStyle:{backgroundColor: "black"}
  });

export default createAppContainer(BottomTabs);