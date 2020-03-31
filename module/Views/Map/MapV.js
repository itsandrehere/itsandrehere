import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Dimensions , ActivityIndicator} from "react-native";
import MapView, { PROVIDER_GOOGLE , Marker, Callout} from "react-native-maps";

let ScreenHeight = Dimensions.get("window").height;

class MapV extends Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const accu = position.coords.accuracy;
      this.calcDelta(lat, long, accu);
    });
  }
  calcDelta(lat, long, acc) {

    this.setState({
      coords: {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
    console.log('value',this.state.coords);
  }

  render() {
    return (
        <View style={styles.container}>
          {this.state.coords.latitudeDelta ? (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              showsUserLocation
              initialRegion={this.state.coords}
              >
                <Marker
                coordinate={{
                  latitude: this.state.coords.latitude,
                  longitude: this.state.coords.longitude,
                }}
                >
                  <Callout
                    tooltip={true}
                    style={styles.callout}
                  >
                    <Text style={styles.title}>
											Mi casa
                    </Text>
                    <Text style={styles.description}>
                      Bienvenido
                    </Text>
                  </Callout>
                </Marker>
            </MapView>
          ) : <ActivityIndicator  style={styles.spinner} size="large" color="#FFA420" /> }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  callout: {
    backgroundColor: "white",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 4
  },
  title: {
      color: "black",
      fontSize: 14,
      lineHeight: 18,
      flex: 1,
    },
  description: {
      color: "#707070",
      fontSize: 12,
      lineHeight: 16,
      flex: 1,
    },
    spinner:{
      flex: 1,
      justifyContent: "center"
    }
});

export default MapV;
