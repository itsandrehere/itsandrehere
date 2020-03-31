import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Icon } from "react-native-elements";

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
       
        <Icon onPress={this.openMenu} name="menu" color="#fff" />
      </View>
    );
  }
}

export default menuDisplay;
