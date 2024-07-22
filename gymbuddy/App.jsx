// import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import "@react-native-firebase/messaging";
// import useFirebaseMessaging from "./firebaseMessaging";
import Intro from "./Intro";
import Home from "./Homepage";
import Ptgym from "./Ptgym";
import T4gyms from "./T4gym";
import Cfgym from "./Cfgym";
import Bgym from "./Bgym";
import Maps from "./Maps";
import Chest from "./Chest";
import Shoulder from "./Shoulder";
import Tricep from "./Tricep";
import GymDetailPage from "./GymDetailPage";
import GymDetailPage2 from "./GymDetailPage2";
import GymDetailPage3 from "./GymDetailPage3";
import GymDetailPage4 from "./GymDetailPage4";
import notifications from "./notification";
import Register from "./Registering";
import Login from "./Login";
const Stack = createNativeStackNavigator();

export default function App() {
  // useFirebaseMessaging();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homepage" component={Home} />
        <Stack.Screen name="Ptgym" component={Ptgym} />
        <Stack.Screen name="T4gyms" component={T4gyms} />
        <Stack.Screen name="Cfgym" component={Cfgym} />
        <Stack.Screen name="Bgym" component={Bgym} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Chest" component={Chest} />
        <Stack.Screen name="Shoulder" component={Shoulder} />
        <Stack.Screen name="Tricep" component={Tricep} />
        <Stack.Screen name="GymDetailPage" component={GymDetailPage} />
        <Stack.Screen name="GymDetailPage2" component={GymDetailPage2} />
        <Stack.Screen name="GymDetailPage3" component={GymDetailPage3} />
        <Stack.Screen name="GymDetailPage4" component={GymDetailPage4} />
        <Stack.Screen name="notification" component={notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
