import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './module/router/navigation/appNavigator'

export default function App() {
  return (
    <View style={styles.container}>
       <Nav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
