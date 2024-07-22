import React, { useState, useEffect } from "react";
import { Video } from "expo-av";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import { firebase } from "./config";

const Shoulder = () => {
  const [workoutvideo, setworkoutvideo] = useState([]);
  const chest = firebase.firestore().collection("shoulder");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await chest.get();
        const workoutvideoData = [];
        querySnapshot.forEach((doc) => {
          const { url, name, information } = doc.data();
          workoutvideoData.push({
            id: doc.id,
            name,
            information,
            url,
          });
        });
        setworkoutvideo(workoutvideoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={styles.fl}
        data={workoutvideo}
        renderItem={({ item }) => (
          <View>
            <View style={styles.gyminfo}>
              <Video
                key={item.id}
                source={{ uri: item.url }}
                style={styles.video}
                useNativeControls
              />
            </View>
            <View>
              <Text style={styles.nameworkout}>{item.name}</Text>
              <Text style={styles.informationworkout}>{item.information}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Shoulder;
const styles = StyleSheet.create({
  fl: {
    width: "100%",
  },
  card: {
    backgroundColor: "#FFFBF5",
    borderRadius: 25,
  },
  video: {
    width: "100%",
    height: 300,
  },
  nameworkout: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  informationworkout: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
});
