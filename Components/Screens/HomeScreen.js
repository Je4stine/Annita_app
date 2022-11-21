import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Popular from '../Popular';
import RecentlyPosted from '../RecentlyPosted';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,  backgroundColor:"#e9f5f8"}}>
        <View style={{marginTop:10, padding:13}}>            
            <View>
                <Text style={{fontSize:20, fontFamily:"Nunito"}}>Hello John Doe!</Text>
            </View>
            <Text style={{color:'orange', fontSize:30, fontFamily:"NunitoBold"}}>Find a job</Text>
            <View style={{flexDirection:'row', flex:1, width:'100%', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
                <TextInput
                    placeholder='Search Job'
                    style={{borderRadius:12, borderWidth:0.4, padding:15, marginTop:20, width:'80%', height:50, color:'grey', fontFamily:"Nunito"}}
                />
                <View style={{width:40, height:40, backgroundColor:'orange', alignItems:'center', justifyContent:'center', borderRadius:20, marginTop:15}}>
                     <FontAwesome name="search" size={24} color="#fff" />
                </View>
            </View>
        </View>
        <View style={{marginTop:50}}></View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
            
            <Text style={{color:'orange', fontSize:30,marginLeft:20, fontFamily:"NunitoBold"}}>Jobs</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('AllJobs')}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{marginRight:10, color:'gray', fontFamily:"Nunito"}}>View all</Text>
                    <Ionicons name="ios-chevron-forward" size={20} color="gray" />
                </View>
            </TouchableOpacity>
        </View>
       
        
        <Text style={{color:'orange', fontSize:20, fontFamily:"NunitoBold", marginLeft:20, marginBottom:10}}> Recently posted Jobs</Text>
       
        <ScrollView>
            <RecentlyPosted/>
            <RecentlyPosted/>
            <RecentlyPosted/>
            <RecentlyPosted/>
            <RecentlyPosted/>
            <RecentlyPosted/>
            <RecentlyPosted/>
        </ScrollView>
    </View>
  )
}

export default HomeScreen;