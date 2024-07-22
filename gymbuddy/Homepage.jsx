import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
const Homepage = ({ navigation }) => {
  // const navigation = useNavigation;
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <View style={styles.expgym}>
        <Text style={styles.expgymtext}>EXPLORE GYMS</Text>
      </View>
      <View style={styles.vertscrl}>
        <ScrollView horizontal={true} style={styles.horscroller} sc>
          <Pressable
            onPress={() => {
              navigation.navigate("Ptgym");
            }}
          >
            <ImageBackground
              source={require("./assets/images/ptraingym.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.scrollerview}
            >
              <Text style={styles.insidescorller}>Personal Training Gym</Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Cfgym");
            }}
          >
            <ImageBackground
              source={require("./assets/images/crossfit.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.scrollerview}
            >
              <Text style={styles.insidescorller}>Cross Fit Gym</Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Bgym");
            }}
          >
            <ImageBackground
              source={require("./assets/images/boutiquegym.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.scrollerview}
            >
              <Text style={styles.insidescorller}>Boutique Gym</Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("T4gyms");
            }}
          >
            <ImageBackground
              source={require("./assets/images/24hoursgym.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.scrollerview}
            >
              <Text style={styles.insidescorller}>24 Hours Gym</Text>
            </ImageBackground>
          </Pressable>
        </ScrollView>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Text
          style={{
            fontSize: 20,
            paddingLeft: 10,
            letterSpacing: 5,
            fontWeight: "bold",
          }}
        >
          WORKOUTS
        </Text>
      </View>
      <View style={styles.scrollsecond}>
        <ScrollView style={styles.scrollexercise}>
          <Pressable
            onPress={() => {
              navigation.navigate("Chest");
            }}
          >
            <ImageBackground
              source={require("./assets/images/chest.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.workout}
            >
              <Text style={styles.wtext}>CHEST</Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Shoulder");
            }}
          >
            <ImageBackground
              source={require("./assets/images/shoulder.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.workout}
            >
              <Text style={styles.wtext}>SHOULDER</Text>
            </ImageBackground>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Tricep");
            }}
          >
            <ImageBackground
              source={require("./assets/images/tricep.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.workout}
            >
              <Text style={styles.wtext}>TRICEP</Text>
            </ImageBackground>
          </Pressable>
          <Pressable>
            <ImageBackground
              source={require("./assets/images/back.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.workout}
            >
              <Text style={styles.wtext}>BACK</Text>
            </ImageBackground>
          </Pressable>
          <Pressable>
            <ImageBackground
              source={require("./assets/images/biceps.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.workout}
            >
              <Text style={styles.wtext}>BICEPS</Text>
            </ImageBackground>
          </Pressable>
          <Pressable style={{ marginBottom: 10 }}>
            <ImageBackground
              source={require("./assets/images/legs.jpg")}
              imageStyle={{ opacity: 0.5, borderRadius: 20 }}
              style={styles.workout}
            >
              <Text style={styles.wtext}>LEGS</Text>
            </ImageBackground>
          </Pressable>
        </ScrollView>
      </View>
      <View style={styles.navigationtab}>
        <Pressable style={styles.tab}>
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

export default Homepage;
const styles = StyleSheet.create({
  greeting: {
    width: "100%",
    paddingBottom: 10,
    backgroundColor: "white",
  },
  expgym: {
    paddingLeft: 10,
    backgroundColor: "white",
    marginTop: 20,
    paddingBottom: 5,
  },
  expgymtext: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 5,
  },
  vertscrl: {
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
  horscroller: {
    height: 160,
  },
  scrollerview: {
    width: 300,
    margin: 5,
    height: 150,
    borderRadius: 20,
    backgroundColor: "black",
  },
  insidescorller: {
    color: "white",
    fontSize: 25,
    marginTop: 30,
    width: 120,
    marginLeft: 20,
  },
  workout: {
    marginRight: "1.5%",
    marginLeft: "1.5%",
    marginTop: 10,
    marginBottom: 10,
    width: "97%",
    height: 200,
    backgroundColor: "black",
    borderRadius: 20,
  },
  scrollsecond: {
    width: "100%",
    height: 525,
    backgroundColor: "white",
    marginBottom: 60,
  },
  wtext: {
    color: "white",
    fontSize: 30,
    marginTop: 120,
    width: 200,
    fontWeight: "bold",
    marginLeft: 20,
  },
  navigationtab: {
    width: "90%",
    backgroundColor: "#BBF246",
    height: 65,
    position: "absolute",
    top: 810,
    borderRadius: 50,
    left: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    width: "33%",
    alignItems: "center",
    color: "white",
  },
});
