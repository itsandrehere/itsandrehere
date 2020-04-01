import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackMain from './navigator/MainStackNavigator'

export default function App() {
  return (
    <View style={styles.container}>
        <StackMain/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
