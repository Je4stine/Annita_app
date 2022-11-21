import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Profile = ({
  
}) => {
  return (
    <View style={{marginTop:10}}>
        <View style={{ marginBottom:10, padding:20, justifyContent:'center', alignItems:'center'}}>
            <Image source={require("../assets/users.png")} style={{height:70, width:70}}/>
            <Text style={{fontSize:14, fontFamily:"Nunito", marginTop:20}}>Build your profile</Text>
        </View>
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', height:40, width:'80%', alignSelf:'center', backgroundColor:'orange', borderRadius:10, marginBottom:20}}> 
            <Text style={{color:'#fff', fontSize:15, fontFamily:"Nunito"}}> Compelete your profile </Text>
        </TouchableOpacity>
        <View style={{borderBottomColor:'gray', borderBottomWidth:0.5, width:"100%"}}></View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20, marginLeft:20}}>
            <View style={{marginTop:10}}>
            <Foundation name="clipboard-notes" size={28} color="black" />
            </View>
            <Text style={{marginLeft:10, fontSize:20, fontFamily:"NunitoBold"}}>
              My CV
            </Text>
        </View>
        <Text style={{color:'gray', marginLeft:50, fontSize:15, fontFamily:"Nunito"}}>View and Upload your CV</Text>

        <View style={{flexDirection:'row', alignItems:'center', marginTop:20, marginLeft:20}}>
            <View style={{marginTop:10}}>
            <Feather name="settings" size={28} color="black" />
            </View>
            <Text style={{marginLeft:10, fontSize:20, fontFamily:"NunitoBold"}}>
              Settings
            </Text>
        </View>
        <Text style={{color:'gray', marginLeft:60, fontSize:15, fontFamily:"Nunito"}}>App Settings</Text>
        
      
    </View>
  )
}

export default Profile;