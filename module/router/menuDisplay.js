import React, { useState } from "react";
import { View, Alert , Text} from "react-native";
import { Icon } from "react-native-elements";
import { DrawerActions } from '@react-navigation/native';
import { withNavigation } from '@react-navigation/compat';
import { CommonActions } from '@react-navigation/native';


 function menuDisplay({navigation})  {
  const [open] = useState(false);

//   openMenu = () => {
//     this.setState({
//       open: !this.state.open
//   });
// };

    return (
      <View>
        { navigation.state.name == 'Home' ? ( <Icon onPress={() =>{ navigation.dispatch(DrawerActions.openDrawer()) }} name="menu" color="#fff" /> ) :
        ( <Icon onPress={() =>{ navigation.dispatch(CommonActions.goBack()) }} name="arrow-left"  type='font-awesome' color="#fff" /> ) 
        }
        {/*  <Text>{navigation.state.name}</Text> */}
      </View>
    );
  
}

export default withNavigation(menuDisplay);
