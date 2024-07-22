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
  TextInput,
} from "react-native";
import { firebase } from "./config";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

const T4gym = ({ navigation }) => {
  const [personaltrainergym, setpersonaltrainergym] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGyms, setFilteredGyms] = useState([]);
  const ptgyms = firebase.firestore().collection("T4gyms");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await ptgyms.get();
        const personaltrainergymData = [];
        querySnapshot.forEach((doc) => {
          const { Name, Location, url } = doc.data();
          personaltrainergymData.push({
            id: doc.id,
            Name,
            Location,
            url,
          });
        });
        setpersonaltrainergym(personaltrainergymData);
        setFilteredGyms(personaltrainergymData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const navigateToDetail = (gymId) => {
    navigation.navigate("GymDetailPage2", { gymId });
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = personaltrainergym.filter((gym) =>
      gym.Name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredGyms(filtered);
  };

  return (
    <SafeAreaView style={styles.ptpage}>
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <View>
        <Text style={styles.pttext}>24 HOURS GYMS</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search gym name..."
      />
      <FlatList
        style={styles.fl}
        data={filteredGyms}
        renderItem={({ item }) => (
          <ScrollView>
            <Pressable
              style={styles.card}
              onPress={() => navigateToDetail(item.id)}
            >
              <Image source={{ uri: item.url }} style={styles.gymimg} />
              <View style={styles.gyminfo}>
                <Text style={styles.namegym}>{item.Name}</Text>
                <Text style={styles.locationgym}>{item.Location}</Text>
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
        <Pressable
          style={styles.tab}
          onPress={() => {
            navigation.navigate("Maps");
          }}
        >
          <FontAwesome
            name="map-pin"
            style={styles.icons}
            size={30}
          ></FontAwesome>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => {
            navigation.navigate("notification");
          }}
        >
          <MaterialIcons name="local-offer" size={30} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default T4gym;

const styles = StyleSheet.create({
  greeting: {
    width: "100%",
    paddingBottom: 10,
    backgroundColor: "white",
  },
  greettext: {
    color: "black",
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 10,
  },
  ptpage: {
    flex: 1,
    margin: 5,
    marginTop: 45,
    backgroundColor: "#E9DCD6",
  },
  ptpage: {
    flex: 1,
    margin: 5,
    marginTop: 45,
    backgroundColor: "white",
  },
  pttext: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 25,
    letterSpacing: 8,
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#EFE6E4",
    borderRadius: 25,
    margin: 10,
    marginTop: 5,
  },
  gymimg: {
    width: 100,
    height: 100,
  },
  gyminfo: {
    padding: 10,
  },
  namegym: {
    fontSize: 20,
  },
  locationgym: {
    marginTop: 10,
    fontSize: 15,
  },
  navigationtab: {
    width: "90%",
    backgroundColor: "#BBF246",
    height: 65,
    position: "absolute",
    top: 750,
    borderRadius: 50,
    left: "5%",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  tab: {
    width: "33%",
    alignItems: "center",
    color: "white",
  },
  searchInput: {
    marginTop: 10,
    height: 60,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 30,
    borderRadius: 10,
    fontSize: 20,
  },
});
