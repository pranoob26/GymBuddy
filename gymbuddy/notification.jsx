import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { firebase } from "./config";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const notificationRef = firebase.firestore().collection("notification");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await notificationRef.get();
        const notificationData = [];
        querySnapshot.forEach((doc) => {
          const { Name, Offer, validitytime } = doc.data();
          notificationData.push({
            id: doc.id,
            Name,
            Offer,
            validitytime,
          });
        });
        setNotifications(notificationData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.notificationPage}>
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <View style={styles.noti}>
        <Text style={styles.notitext}>OFFERS ZONE</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={notifications}
        renderItem={({ item }) => (
          <ScrollView style={styles.scr}>
            <Pressable style={styles.card}>
              <View style={styles.notificationInfo}>
                <Text style={styles.name}>{item.Name}</Text>
                <Text style={styles.offer}>Offer: {item.Offer}</Text>
                <Text style={styles.validityTime}>
                  Validity Time: {item.validitytime}
                </Text>
              </View>
            </Pressable>
          </ScrollView>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.navigationtab}>
        <Pressable
          style={styles.tab}
          onPress={() => {
            navigation.navigate("Homepage");
          }}
        >
          <FontAwesome name="home" style={styles.icons} size={30}></FontAwesome>
        </Pressable>
        <Pressable style={styles.tab}>
          <FontAwesome
            name="map-pin"
            style={styles.icons}
            size={30}
          ></FontAwesome>
        </Pressable>
        <Pressable style={styles.tab}>
          <MaterialIcons name="local-offer" size={30} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
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
  noti: {
    marginTop: 10,
    width: "100%",
    padding: 10,
  },
  notitext: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 8,
  },
  notificationPage: {
    margin: 5,
  },
  flatList: {
    width: "100%",
    borderRadius: 20,
  },
  card: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#FFFBF5",
    borderRadius: 25,
    margin: 10,
  },
  notificationInfo: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  offer: {
    marginTop: 10,
    fontSize: 16,
  },
  validityTime: {
    marginTop: 5,
    fontSize: 16,
  },
  navigationtab: {
    width: "90%",
    backgroundColor: "#BBF246",
    height: 65,
    position: "absolute",
    borderRadius: 50,
    top: 800,
    left: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    width: "33%",
    alignItems: "center",
    color: "white",
  },
  // Add styles for navigation tabs as per your requirement
});
