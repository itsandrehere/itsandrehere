import React from 'react';
import { StyleSheet, Text, View , Alert  } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Views/Home/Home';
import FormUnete from '../../Views/Form/FormUnete'

const Footer = (props) => {
        return(
            <View style={styles.container}>
                    <DrawerItem {...props}/>
                    <Text style={styles.footer}>VE-Shop versión 0.1</Text>
            </View>
     )
}

// const HomeStackNavigator = createDrawerNavigator(
//     {
//         Home: {
//             screen: Home
//         },
//         Form: {
//             screen: FormUnete
//         } 
//     },
//     {
//       initialRouteName: 'Home',
//       headerMode: 'screen',
//     },
//   );

  // const DrawerNavigator = createDrawerNavigator(
  //   {
  //     Home: {
  //       screen: Home,
  //     },
  //       Form: {
  //           screen: FormUnete
  //       } 
  //   },
  //   {
  //     drawerOpenRoute: 'DrawerOpen',
  //     drawerCloseRoute: 'DrawerClose',
  //     drawerToggleRoute: 'DrawerToggle',
  //     contentComponent: Footer,
  //     navigationOptions: {
  //       drawerLockMode: 'locked-closed',
  //     },
  //   },
  // );

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home
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




  
