import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { Video } from "expo-av";
import axios from "axios";

const Tricep = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "AIzaSyBDyZzsohZ112kZ4DWnZDHq6myvzYYkKco";
  const projectId = "mcproject-201c6";
  const collection = "shoulder";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}?key=${apiKey}`
        );
        const documents = response.data.documents;

        // Map the documents to extract the video URLs
        const videoUrls = documents.map((document) => {
          const fields = document.fields;
          return fields.url.stringValue;
        });

        setVideoUrl(videoUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderVideo = ({ item }) => (
    <Video source={{ uri: item }} style={styles.video} useNativeControls />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={videoUrl}
          renderItem={renderVideo}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  video: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
});

export default Tricep;
// const Tricep = () => {
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const apiKey = "AIzaSyBDyZzsohZ112kZ4DWnZDHq6myvzYYkKco";
//   const projectId = "mcproject-201c6";
//   const collection = "shoulder";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}?key=${apiKey}`
//         );
//         const documents = response.data.documents;

//         // Assuming there might be multiple documents in the collection
//         // For simplicity, let's just use the URL from the first document
//         if (documents && documents.length > 0) {
//           const firstDocument = documents[0];
//           const fields = firstDocument.fields;
//           if (fields && fields.url && fields.url.stringValue) {
//             setVideoUrl(fields.url.stringValue);
//           }
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <View>
//           {videoUrl ? (
//             <Video
//               source={{ uri: videoUrl }}
//               style={styles.video}
//               controls={true}
//             />
//           ) : (
//             <Text>No video found</Text>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   video: {
//     width: 300,
//     height: 200,
//   },
// });

// export default Tricep;
