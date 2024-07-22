import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
const Intro = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#BBF246"></StatusBar>
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <Image
        source={require("./assets/pexels-kuldeep-singhania-2105493.jpg")}
        style={styles.imgcontainer}
      />
      <View style={styles.textblock}>
        <Text style={styles.textblock_text}>
          Wherever You Are Health Is Number One
        </Text>
      </View>
      <View style={styles.subtext}>
        <Text style={styles.subtexttext}>
          There is no instant way to healthy life
        </Text>
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Register")}
      >
        <View>
          <Text style={styles.btntext}>Get Started</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgcontainer: {
    width: "100%",
    height: "70%",
  },
  textblock: {
    alignSelf: "center",
    width: "80%",
    marginTop: 15,
  },
  textblock_text: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtext: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  subtexttext: {
    color: "grey",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "black",
    width: "85%",
    alignSelf: "center",
    marginTop: 35,
    borderRadius: 40,
    backgroundColor: "#BBF246",
  },
  btntext: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
  greeting: {
    width: "100%",
    paddingBottom: 15,
    position: "absolute",
    zIndex: 1,
    top: 80,
  },
  greettext: {
    color: "white",
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 10,
  },
});
