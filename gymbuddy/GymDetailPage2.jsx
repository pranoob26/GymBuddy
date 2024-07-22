import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { firebase } from "./config";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const GymDetailPage = ({ route }) => {
  const { gymId } = route.params;
  const [gymDetail, setGymDetail] = useState(null);

  useEffect(() => {
    const fetchGymDetail = async () => {
      try {
        const doc = await firebase
          .firestore()
          .collection("T4gyms")
          .doc(gymId)
          .get();
        if (doc.exists) {
          setGymDetail(doc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching gym detail:", error);
      }
    };

    fetchGymDetail();
  }, [gymId]);

  const handlePhoneCall = () => {
    if (gymDetail && gymDetail.Phone) {
      Linking.openURL(`tel:${gymDetail.Phone}`);
    }
  };

  if (!gymDetail) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <View style={styles.container}>
        <Image source={{ uri: gymDetail.url }} style={styles.gymimg} />
        <ScrollView>
          <Text style={styles.name}>{gymDetail.Name}</Text>
          <View style={styles.add}>
            <FontAwesome name="location-arrow" size={25}></FontAwesome>
            <Text style={styles.location}>{gymDetail.Address}</Text>
          </View>
          <View style={styles.pnt}>
            <FontAwesome name="clock-o" size={25}></FontAwesome>
            <Text style={styles.txtpnt}>{gymDetail.Time}</Text>
          </View>
          <View style={styles.pnt}>
            <FontAwesome name="phone" size={25}></FontAwesome>
            <Text style={styles.txtpnt}>{gymDetail.Phone}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.info}></Text>
          </View>
          <View>
            <Text style={styles.membership}>
              Yearly Membership: {gymDetail.Membershipyearly}
            </Text>
            <Text style={styles.membership}>
              Monthly Membership: {gymDetail.MembershipMonthly}
            </Text>
          </View>
          <View styles={styles.offerzone}>
            <Text style={styles.offerzone}>
              Current Offer: {gymDetail.offer}
            </Text>
          </View>
        </ScrollView>
        {/* Other details */}
      </View>
      {gymDetail.Phone && (
        <Pressable onPress={handlePhoneCall}>
          <Text style={styles.callButtonText}> Call</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default GymDetailPage;

const styles = StyleSheet.create({
  greeting: {
    width: "100%",
    paddingBottom: 10,
  },
  greettext: {
    color: "black",
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 10,
  },
  container: {
    flex: 1,
  },
  gymimg: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    textTransform: "uppercase",
    letterSpacing: 5,
  },
  add: {
    fontSize: 20,
    color: "gray",
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: "row",
    textTransform: "uppercase",
    marginBottom: 15,
  },
  location: {
    marginLeft: 10,
    textTransform: "uppercase",
  },
  offerzone: {
    color: "black",
    width: "100%",
    flexDirection: "row",
    fontSize: 21,
    marginLeft: 10,
    textTransform: "uppercase",
    marginTop: 15,
  },
  membership: {
    color: "black",
    width: "100%",
    fontSize: 20,
    marginLeft: 10,
    margin: 10,
    marginTop: 0,
  },
  pnt: {
    flexDirection: "row",
    marginLeft: 10,
  },
  txtpnt: {
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 15,
    marginTop: 1,
    fontSize: 18,
  },
  callButtonText: {
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#BBF246",
    marginLeft: "10%",
    color: "black",
    fontWeight: "bold",
    letterSpacing: 5,
  },
});
