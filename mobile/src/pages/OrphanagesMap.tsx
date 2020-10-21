import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import mapMarker from "../images/map-marker.png";
import { useNavigation } from '@react-navigation/native';


function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigationOrphanageDetails() {
    navigation.navigate("OrphanageDetails")
  }


  return (
  <View style={styles.container}>
  <MapView
    style={styles.map}
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      latitude: 49.1749376,
      longitude: -122.8242944,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    }}>
    <Marker
      icon={mapMarker}
      calloutAnchor={{
        x: 2.7,
        y: 0.8,
      }}
      coordinate={{
        latitude: 49.1749376,
        longitude: -122.8242944,
      }}>
      <Callout tooltip onPress={handleNavigationOrphanageDetails}>
        <View style={styles.calloutContainer}>
          <Text style={styles.calloutText}>Hi there!</Text>
        </View>
      </Callout>
    </Marker>
  </MapView>

  <View style={styles.footer}>
    <Text style={styles.footerText}> Two orphanages has found</Text>
    <TouchableOpacity
      style={styles.createOrphanagesButton}
      onPress={() => { }}>
      <Feather name='plus' size={28} color='#FFF' />
    </TouchableOpacity>
  </View>
</View>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    color: "#0089a5",
    fontSize: 14,
    fontFamily: "Nunito_700Bold",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,
    elevation: 10,
    backgroundColor: "#FFF",
    borderRadius: 28,
    height: 56,
    paddingLeft: 24,
  },

  footerText: {
    color: "#8fa7b3",
    fontFamily: "Nunito_700Bold",

  },

  createOrphanagesButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,
  }
});

export default OrphanagesMap
