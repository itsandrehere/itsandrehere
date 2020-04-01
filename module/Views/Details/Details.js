import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import HeaderC from "./../Components/Header";

export default function Details({ navigation }) {
  return (
    <View style={styles.container} >
      <HeaderC/>
      <Text>Detalles</Text>
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});