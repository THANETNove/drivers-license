import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation, useIsFocused } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useColorScheme } from "@/hooks/useColorScheme";
import Box from "../src/Box";

import NewScreen from "../src/driver_1/NewScreen";
import indexCapacity from "../src/driver_1/IndexCapacity";
import ExaminationQ from "../src/driver_1/Examination";
import Category from "../src/driver_1/Category";
import Questions from "../src/driver_1/Questions";
import HomeDriver from "../src/driver_1/HomeDriver";
import InterestingDriverLicense from "../src/driver_1/InterestingDriverLicense";
import StepsDriversLicense from "../src/driver_1/StepsDriversLicense";
import PrepareBeforeExam from "../src/driver_1/PrepareBeforeExam";
import QualificationsTaker from "../src/driver_1/QualificationsTaker";

const Stack = createNativeStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
    "SukhumvitSet-Bold": require("../../assets/fonts/SukhumvitSet-Bold.ttf"),
    "SukhumvitSet-Light": require("../../assets/fonts/SukhumvitSet-Light.ttf"),
    "SukhumvitSet-Medium": require("../../assets/fonts/SukhumvitSet-Medium.ttf"),
    "SukhumvitSet-SemiBold": require("../../assets/fonts/SukhumvitSet-SemiBold.ttf"),
    "SukhumvitSet-Thin": require("../../assets/fonts/SukhumvitSet-Thin.ttf"),
  });
};

function CurrentRouteName() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const routeName = navigation.getState().routes[navigation.getState().index].name;

  React.useEffect(() => {
    if (isFocused) {
      console.log('Current route name:', routeName);
    }
  }, [isFocused, routeName]);

  return null;
}

export default function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    loadFonts()
      .then(() => setFontsLoaded(true))
      .catch(console.error);
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>

      <CurrentRouteName />
      <Stack.Navigator initialRouteName="HomeDriver">
        <Stack.Screen
          name="HomeDriver"
          component={HomeDriver}
          options={{
            title: "",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="indexCapacity"
          component={indexCapacity}
          options={{
            title: "รอบรู้เรื่อง การสอบใบขับขี่",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold",
              fontSize: 20,
            },
          }}
        />
        {/* Add other screens here similarly */}
      </Stack.Navigator>

      <Box />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70
  },
});
