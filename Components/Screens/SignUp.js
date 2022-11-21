import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const SignUp = ({ navigation}) => {
  return (
    <ImageBackground source={require('../assets/bibo.jpeg')} style={{flex:1}} >
      
      <View style={{ width:"100%", flex:1, height:"40%", position:'absolute', backgroundColor:'#fff', bottom:0, borderTopRightRadius:10, borderTopLeftRadius:10, padding:10, justifyContent:'center', alignItems:'center'}}>
        <Text style={{ flexWrap:'wrap', fontFamily:'Nunito', fontSize:15}}>By continuing you agree to Anitas terms and conditions</Text>
        <TouchableOpacity style={{ height:50, width:"90%", marginTop:20, alignItems:'center', justifyContent:'space-evenly', borderWidth:1, flexDirection:'row' }}>
          <AntDesign name="google" size={24} color="black" />
            <Text style={{ fontFamily:'NunitoBold'}}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Email')} style={{ height:50, width:"90%", marginTop:20, alignItems:'center', justifyContent:'space-evenly', borderWidth:1, backgroundColor:'gray', flexDirection:'row'}}>
            <MaterialIcons name="email" size={24} color="#fff" />
            <Text style={{ fontFamily:'NunitoBold', color:'#fff'}}>Continue with Email</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default SignUp;