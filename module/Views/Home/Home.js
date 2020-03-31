import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import HeaderC from "./../Components/Header";
import Map from '../Map/MapV'

export default function Home() {
  return (
    <View style={styles.container} >
      <HeaderC style={styles.header}  />
      <Text >Bienvenido</Text>
      <Map  />
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  header:{
    
  }
});