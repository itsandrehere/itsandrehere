  
import React from 'react';
import { createSwitchNavigator } from '@react-navigation/compat';
import { NavigationContainer } from '@react-navigation/native';
import formNavigator from './drawerMenu';


export default NavigationContainer(
  createSwitchNavigator({
    // Additional routes such as a login route could
    // be added here:

    Main: formNavigator
  })
);