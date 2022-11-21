import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const RecentlyPosted = ({
  jobname="Manager",
  jobdescription="",
  imageuri=""
}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('JobDetails')} style={{height:80, width:"90%", borderColor:"gray", alignSelf:"center", marginBottom:10, shadowColor:"#000", shadowOffset:{ width:0, height:1}, shadowOpacity:0.1, shadowRadius:1,borderRadius:15, backgroundColor:"#fff",elevation:0.5}}>
      
      <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
        <Image source={require('../Components/assets/users.png')} style={{width:40, height:40}}/>
        <Text style={{fontFamily:"NunitoBold", marginLeft:15}}> Job Name</Text>
      </View>
      <Text style={{fontFamily:"Nunito", marginLeft:10}}> Job Description</Text>
    </TouchableOpacity>
  )
}

export default RecentlyPosted;