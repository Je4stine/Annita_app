import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Popular = ({
  jobtitle="",
  description="s",

}) => {
  const navigation = useNavigation();


  return (
    <TouchableOpacity onPress={()=>navigation.navigate('JobDetails')} style={{height:150, width:250, borderRadius:10, backgroundColor:'orange', margin:20, padding:5, flex:1}}>
        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:15}}>
            <View style={{width:50, height:50, borderRadius:25, backgroundColor:"#fff"}}>
                <Image source={require("../Components/assets/users.png")} style={{width:50, height:50}}/>
            </View>
            <Text style={{color:"#fff",fontSize:15, fontFamily:"NunitoBold"}}>Manager</Text>
        </View>
        <Text style={{color:'#fff', marginTop:10, fontFamily:"Nunito"}}>
            This is a the job description of the Popular job posted here as a placeholder
        </Text>
    </TouchableOpacity>
  )
}

export default Popular;