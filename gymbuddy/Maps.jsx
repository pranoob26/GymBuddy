import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Pressable, SafeAreaView, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { firestore } from "./config";
import { FontAwesome5 } from "@expo/vector-icons";
const Maps = ({ navigation }) => {
  const [markeruser, setmarkeruser] = useState({
    latitude: 19.076,
    longitude: 72.8777,
    longitudeDelta: 0.0922,
    latitudeDelta: 0.0922,
  });
  // const [location, setLocation] = useState();
  const getPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Please grant location");
    }
    let currentlocation = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setmarkeruser({
      latitude: currentlocation.coords.latitude,
      longitude: currentlocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    getPermission();
  }, []);

  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const ptGymsSnapshot = await firestore.collection("ptgyms").get();
        const bGymsSnapshot = await firestore.collection("Bgym").get();
        const cGymsSnapshot = await firestore.collection("Cfgym").get();
        const t4GymsSnapshot = await firestore.collection("T4gyms").get();

        const ptGymsData = ptGymsSnapshot.docs.map((doc) => ({
          latitude: parseFloat(doc.data().Latitude),
          longitude: parseFloat(doc.data().Longitude),
          name: doc.data().Name,
        }));
        const bGymsData = bGymsSnapshot.docs.map((doc) => ({
          latitude: parseFloat(doc.data().Latitude),
          longitude: parseFloat(doc.data().Longitude),
          name: doc.data().Name,
        }));
        const cGymsData = cGymsSnapshot.docs.map((doc) => ({
          latitude: parseFloat(doc.data().Latitude),
          longitude: parseFloat(doc.data().Longitude),
          name: doc.data().Name,
        }));
        const t4GymsData = t4GymsSnapshot.docs.map((doc) => ({
          latitude: parseFloat(doc.data().Latitude),
          longitude: parseFloat(doc.data().Longitude),
          name: doc.data().Name,
        }));

        const allGymsData = [
          ...ptGymsData,
          ...bGymsData,
          ...cGymsData,
          ...t4GymsData,
        ];
        setGyms(allGymsData);
      } catch (error) {
        console.error("Error fetching gyms:", error);
      }
    };

    fetchGyms();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <View
        style={styles.backbtn}
        onPress={() => {
          navigation.navigate("Homepage");
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Homepage");
          }}
        >
          <FontAwesome name="angle-left" size={35}></FontAwesome>
        </Pressable>
      </View>

      <MapView style={styles.map} initialRegion={markeruser}>
        <Marker coordinate={markeruser} title="You">
          <View>
            <FontAwesome name="map-pin" size={24} color="black" />
          </View>
        </Marker>
        {gyms.map((gym, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: gym.latitude, longitude: gym.longitude }}
            title={gym.name}
          >
            <View>
              <FontAwesome5 name="dumbbell" size={24} color="black" />
            </View>
          </Marker>
        ))}
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  backbtn: {
    position: "absolute",
    top: "7%",
    left: "5%",
    zIndex: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
  },
  greeting: {
    width: "100%",
    paddingBottom: 15,
    backgroundColor: "white",
  },
  greettext: {
    color: "black",
    marginTop: 30,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 10,
  },
});

export default Maps;
