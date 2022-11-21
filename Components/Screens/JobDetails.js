import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const JobDetails = () => {
  return (
    <View style={{ flex:1}}>
      <View style={{ height:"40%", borderBottomRightRadius:15, borderBottomLeftRadius:15, backgroundColor:"orange", elevation:1}}>
        <View style={{ alignItems:'center', padding:10}}>
            <View style={{width:70, height:70, borderRadius:35, backgroundColor:"#fff", marginTop:30}}>
                    <Image source={require('../../Components/assets/users.png')} style={{width:70, height:70}}/>
              </View>
              <Text style={{ color:"#fff", fontSize:30, marginTop:20, fontFamily:"NunitoBold"}}>
                Company Name
            </Text>
            <Text style={{ color:"#fff", fontSize:12, marginTop:20, fontFamily:"Nunito"}}>
            A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization.
            </Text>
        </View>
      </View>

      <View style={{ marginTop:20, padding:20}}>
        <Text style={{ fontFamily:'NunitoBold', marginBottom:20, fontSize:20 }}>Requirements</Text>
        <Text style={{ fontFamily:'Nunito', fontSize:15}}>
        Execute full software development life cycle (SDLC)
        Develop flowcharts, layouts and documentation to identify requirements and solutions
        Write well-designed, testable code
        Produce specifications and determine operational feasibility
        Integrate software components into a fully functional software system
        Develop software verification plans and quality assurance procedures
        Document and maintain software functionality
        Troubleshoot, debug and upgrade existing systems
        Deploy programs and evaluate user feedback
        Comply with project plans and industry standards
        Ensure software is updated with latest features
        </Text>
      </View>
      <TouchableOpacity style={{ position:"absolute", bottom:10, backgroundColor:'orange', width:"80%", borderRadius:10, height:50, alignSelf:'center', justifyContent:'center', alignItems:"center"}}>
          <Text style={{ fontFamily:'NunitoBold', color:"#fff", fontSize:30 }}>Submit application</Text>
      </TouchableOpacity>
    </View>
  )
}

export default JobDetails;