import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../Views/Home/Home';
import FormUnete from '../../Views/Form/FormUnete'

export const MainStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Dashboard',
        gesturesEnabled: false,
        headerLeft: null
      }
    },
  
    Form: {
      screen: FormUnete,
      navigationOptions: {
        title: 'Form'
      }
    }
  }, { headerMode: 'screen' } );
  
  // Drawer Navigator
  export const Drawer = createDrawerNavigator({
    MainStack: {
      screen: MainStack
    }
  });
  
  
  // Main App Navigation
  export const AppStack = createStackNavigator({
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  }, { headerMode: 'none' } );
  
  // In Your App.js
