import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';

const Email = ({ navigation}) => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  

  return (
    <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
      <Text style={{ fontFamily:'NunitoBold', fontSize:25, position:'absolute', top:50}}>Sign Up</Text>
      <TextInput
      placeholder='Email address'
      onChange={setEmail}
      value={email}
      keyboardType='Email'
      style={{ borderWidth:1, width:'90%', padding:10, marginBottom:20, fontFamily:'NunitoBold', color:'#000'}}
      />
      <TextInput
      placeholder='Password'
      keyboardType='Password'
      value={password}
      onChange={setPassword}
      secureTextEntry
      style={{ borderWidth:1, width:'90%', padding:10, marginBottom:20, fontFamily:'NunitoBold', color:'#000'}}
      
      />
       <TextInput
      placeholder='Reenter Password'
      keyboardType='Password'
      secureTextEntry
      style={{ borderWidth:1, width:'90%', padding:10, marginBottom:20, fontFamily:'NunitoBold', color:'#000'}}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('Choice')} style={{ height:50, width:'90%', backgroundColor:'orange', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={{ fontFamily:'NunitoBold', color:'#fff', fontSize:20}}> Submit</Text>
      </TouchableOpacity>

    </View>
  )
};

export default Email;