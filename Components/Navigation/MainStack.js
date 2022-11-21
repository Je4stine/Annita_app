import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Choice from '../Screens/Choice';
import Notification from '../Screens/Notification';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import Reviews from '../Screens/Reviews';
import Email from '../Screens/Email';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import JobDetails from '../Screens/JobDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AllJobs from '../Screens/AllJobs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();






function TopTabNav (){
  return (
    <TopTab.Navigator  
      screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor:  'orange' },
    }}>
      <TopTab.Screen 
      name ="Home" 
      component={HomeScreen} 
      options={{
      tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
  }}/>


      <TopTab.Screen 
      name ="Notification" 
      component={Notification}
      options={{
        tabBarIcon: () => <AntDesign name="bells" size={24} color="white" />,
    }}
      
      />
      <TopTab.Screen 
      name= "Account" 
      component={Profile}
      options={{
        tabBarIcon: () => <Ionicons name="ios-person-outline" size={24} color="white" />,
    }}
      
      />

    <TopTab.Screen 
          name= "Reviews" 
          component={Reviews}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name="plus-circle-outline" size={24} color="white" />,
        }}
      
      />
    </TopTab.Navigator>
  )
}



function DrawerNav (){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Profile' component={ Profile}/>
    </Drawer.Navigator>
  )
}


export default function MajorStack (){
    return(
    <NavigationContainer>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen name= 'SignUp' component={SignUp} headerShown={false}/>
            <MainStack.Screen name= 'Email' component={Email} headerShown={false}/>
            <MainStack.Screen name='Choice'component={Choice} headerShown={false}/>
            <MainStack.Screen name="Drawer" component={DrawerNav}/>
            <MainStack.Screen name='HomeTab' component={TopTabNav}/>
            <MainStack.Screen name="JobDetails" component={JobDetails}/>
            <MainStack.Screen name= "AllJobs" component={AllJobs}/>
        </MainStack.Navigator>
    </NavigationContainer>
    )
}
