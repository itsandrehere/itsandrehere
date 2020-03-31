  
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import formNavigator from './navigator';

export default createAppContainer(
  createSwitchNavigator({
    // Additional routes such as a login route could
    // be added here:
    // Login: LoginNavigator,
    Main: formNavigator
  })
);