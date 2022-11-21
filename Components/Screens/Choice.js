import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React,{useState} from 'react';
import { BottomSheet } from 'react-native-btr';

const Choice = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <>
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

    <View style={{marginBottom:100}}>
        <Text style={{fontFamily:'NunitoBold', color:'orange'}}>What would like to do?</Text>
    </View>
            <TouchableOpacity onPress={ toggleBottomNavigationView} style={{height:50, width:"90%", backgroundColor:'#fff', borderRadius:10, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'orange'}}>
                <Text style={{color:'orange', fontSize:22, fontFamily:'NunitoBold'}}>Post a job </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate("HomeTab")} style={{height:50, width:"90%", backgroundColor:'orange', borderRadius:10, marginTop:20, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#fff', fontFamily:'NunitoBold', fontSize:22}}>Look for a job</Text>
            </TouchableOpacity>
    </View>



    <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
          <View style={{
              margin: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E0F7FA',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>
            <View style={{backgroundColor: '#fff',
              width: '100%',
              height: 250,
              justifyContent: 'center',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>
              <Text style={{fontSize:20, alignSelf:'center',textAlign:"center", fontFamily:'Nunito'}}>Before you post a job You are required to make a payments</Text>
              <View style={{flexDirection: 'row',}}>
                <Image source={require('../assets/mpesa1.png')} style={{height:50, width:50, marginRight:20, marginLeft:10}}/>
                <Text style={{fontSize:20, fontFamily:'NunitoBold', marginTop:10}}>Ksh 100</Text>
              </View>

              <View>
                <TextInput
                keyboardType='numeric'
                placeholder='Phone'
                style={{borderColor: 'black', borderBottomWidth: 1, margin: 10, width: '80%',alignSelf:'center', fontFamily:'Nunito'}}
                />
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={{height:30, width:100, backgroundColor:'orange', borderRadius:35}}>
                  <Text style={{color:'#fff', fontSize:15, fontFamily:'NunitoBold', textAlign:'center', marginTop:5}}>Submit</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleBottomNavigationView}>
                <View style={{height:30, width:100, backgroundColor:'orange', borderRadius:35,}}>
                  <Text style={{color:'#fff', fontSize:15, fontFamily:'NunitoBold', textAlign:'center', marginTop:5}}>Cancel</Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>
    </>
  )
};

export default Choice;