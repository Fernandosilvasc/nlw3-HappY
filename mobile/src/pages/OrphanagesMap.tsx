import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import mapMarker from "../images/map-marker.png";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import api from "../services/api";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    api.get("orphanages").then((res) => {
      setOrphanages(res.data);
    });
  });


  function handleNavigationOrphanageDetails(id: number) {
    navigation.navigate("OrphanageDetails", { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate("SelectMapPosition");
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
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}>
              <Callout tooltip onPress={() => handleNavigationOrphanageDetails(orphanage.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}> {orphanages.length} {(orphanages.length <= 1) ? "orphanage has" : "orphanages have"} been found</Text>
        <RectButton
          style={styles.createOrphanagesButton}
          onPress={handleNavigateToCreateOrphanage}>
          <Feather name='plus' size={28} color='#FFF' />
        </RectButton>
      </View>
    </View>
  );
}

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
  },
});

export default OrphanagesMap;
