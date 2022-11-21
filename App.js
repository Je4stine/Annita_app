import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Choice from './Components/Screens/Choice';
import MajorStack from './Components/Navigation/MainStack';
import { useFonts } from 'expo-font';


export default function App() {


  const [loaded] = useFonts({
    Nunito: require('./Components/assets/fonts/NunitoSans-Regular.ttf'),
    NunitoBold: require('./Components/assets/fonts/NunitoSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  };




 

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"orange"}}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        
        />
      <View style={styles.container}>
        <MajorStack/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
});
