import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Popular from '../Popular';

const AllJobs = () => {
  return (
    <View style={{ flex:1 ,justifyContent:'center', alignItems:'center'}}>
      <Text style={{ marginTop:40, color:'#000', fontSize:30, fontFamily:'Nunito' }}>
        All Jobs
      </Text>
        <ScrollView style={{ flex:1, marginTop:40,}} showsVerticalScrollIndicator={false}>
              <Popular/>
              <Popular/>
              <Popular/>
              <Popular/>
              <Popular/>
              <Popular/>
              <Popular/>
              <Popular/>
            </ScrollView>
    </View>
   
  )
}

export default AllJobs;