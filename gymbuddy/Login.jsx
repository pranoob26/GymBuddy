import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { firebase } from "./config";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usererror, setusererror] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      setusererror("PASSWORD DOES NOT MATCH OR THE USER DOES NOT EXIST !");
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User logged in:", user.uid);
        console.log("Logging in with:", email, password);
        navigation.reset({
          index: 0,
          routes: [{ name: "Homepage" }], // Replace 'Homepage' with your actual home screen name
        });
        navigation.navigate("Homepage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login Error:", errorMessage);
        if (errorMessage) {
          setusererror("WRONG PASSWORD !");
          return;
        }
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/back.jpg")}
        style={styles.img}
      ></Image>
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.toggleText}>Don't have an account? Register</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "red",
          width: "100%",
          textAlign: "center",
          marginTop: 10,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {usererror}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 280,
    backgroundColor: "black",
    position: "absolute",
    top: 50,
  },
  greeting: {
    width: "100%",
    paddingBottom: 15,
    position: "absolute",
    top: 50,
  },
  greettext: {
    color: "white",
    marginTop: 250,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 80,
    letterSpacing: 8,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "55%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#BBF246",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    letterSpacing: 5,
  },
  toggleText: {
    marginTop: 20,
    color: "black",
  },
});

export default LoginScreen;
