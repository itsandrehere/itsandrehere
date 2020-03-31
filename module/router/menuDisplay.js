import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { DrawerActions } from 'react-navigation-drawer';
import { withNavigation } from 'react-navigation'

class menuDisplay extends Component {
    constructor(){
        super()
        this.state = {
            open: false
          };
    }

  openMenu = () => {
      this.setState({
        open: !this.state.open
    });
  };

  render() {
    return (
      <View>
        <Icon onPress={() =>{
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }} name="menu" color="#fff" />
      </View>
    );
  }
}

export default withNavigation(menuDisplay);
