import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../module/Views/Home/Home'
import FormScreen from '../module/Views/Form/FormUnete'
import DetailsScreen from '../module/Views/Details/Details'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator >
        <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
          <Stack.Screen name="Detail" component={DetailsScreen} 
          options={{
              headerShown: false
          }}/>
    </Stack.Navigator >
  );
}

function FormStack() {
  return (
    <Stack.Navigator >
        <Stack.Screen
                name="Form"
                component={FormScreen}
                options={{
                    headerShown: false
                }}
            />
    </Stack.Navigator >
  );
}

function DrawerNav() {
    return (
      <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={HomeStack}
          />
          <Drawer.Screen
            name="Form"
            component={FormStack}
          />
      </Drawer.Navigator>
    );
  }


export default  function RootNavigator() {
    return (
        <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
                  name="DrawerNav"
                  component={DrawerNav}
                  options={{
                      headerShown: false
                  }}
              />
        </Stack.Navigator>
        </NavigationContainer>
    );
  }
  