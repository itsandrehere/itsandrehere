import React from 'react';
import { StyleSheet, Text, View , Alert  } from 'react-native';
import { Header } from 'react-native-elements';
import BtnMenu from '../../router/menuDisplay';

export default function HeaderC() {
   return (
   <View>
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        leftComponent={<BtnMenu/>}
        centerComponent={{ text: 'Ve-Shop', style: { color: '#fff' } }}
        containerStyle={{
            backgroundColor: '#FFA420',
            justifyContent: 'space-around',
        }}
        >
        </Header> 
   </View>
  )
}