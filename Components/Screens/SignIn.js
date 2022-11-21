import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { supabase, handleLogin} from '../../utils/Supabase';
import { GoogleSignIn } from '../googleSignIn';


const SignIn = ({ navigation}) => {

 
  return (
    <View style={{flex:1,}}>
        <ImageBackground source={require('../assets/jobt.jpg')} resizeMode="cover" style={{flex:1,}}>
            <View style={{ backgroundColor:"#000", opacity:0.5, position:'absolute', width:'100%', height:'100%'}} ></View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>GoogleSignIn()} style={{ height:50, width:'80%',backgroundColor:'orange', borderRadius:5, elevation:1, alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ color:'#fff', fontFamily:'NunitoBold', fontSize:25}}>SignIn</Text>
                    </TouchableOpacity>
                </View>
                          
      </ImageBackground>
    </View>
  )
};

export default SignIn;