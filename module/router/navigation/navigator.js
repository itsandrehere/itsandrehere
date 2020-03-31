import React from 'react';
import { StyleSheet, Text, View , Alert  } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Home from '../../../module/Views/Home/Home';
import FormUnete from '../../Views/Form/FormUnete'

const Footer = (props) => {
        return(
            <View style={styles.container}>
                    <DrawerItems {...props}/>
                    <Text style={styles.footer}>VE-Shop versión 0.1</Text>
            </View>
     )
}

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home
    },
    Form: {
        screen: FormUnete
    } 
},{
    contentComponent: Footer,
    contentOptions: {
        activeTintColor: '#e91e63',
        // itemStyle: { marginVertical: 30 },
      },
});


export default DrawerNavigator;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    footer:{
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        justifyContent: "center"

    }
})