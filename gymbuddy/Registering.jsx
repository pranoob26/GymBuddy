import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
} from "react-native";
import { firebase } from "./config";
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usererror, setusererror] = useState("");

  const handleSignUp = () => {
    if (email === "" || password === "") {
      setusererror("ENTER PROPER CREDENTIALS!");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed up:", user.uid);
        console.log("Signing up with:", email, password);
        navigation.reset({
          index: 0,
          routes: [{ name: "Homepage" }], // Replace 'Homepage' with your actual home screen name
        });
        navigation.navigate("Homepage");
        // Navigate to the next screen or perform other actions
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign Up Error:", errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/reg.jpg")}
        style={styles.img}
      ></Image>
      <View style={styles.greeting}>
        <Text style={styles.greettext}>GYM BUDDY</Text>
      </View>
      <Text style={styles.title}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Valid Email..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password with atleast 6 characters....."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable onPress={handleSignUp} style={styles.buttonText}>
        <Text style={{ letterSpacing: 5, fontWeight: "bold", fontSize: 20 }}>
          SIGN UP
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.toggleText}>Already have an account? Login</Text>
      </Pressable>
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
    letterSpacing: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    letterSpacing: 5,
    marginTop: 80,
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
    backgroundColor: "blue",
    width: "80%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    borderRadius: 10,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#BBF246",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 80,
    paddingRight: 80,
  },
  toggleText: {
    marginTop: 20,
    color: "black",
  },
});

export default Register;
