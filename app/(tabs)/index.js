import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading"; // ใช้ AppLoading เพื่อแสดงระหว่างการโหลดฟอนต์

import NewScreen from "../src/capacity/NewScreen";
import indexCapacity from "../src/capacity/IndexCapacity";
import Examination from "../src/capacity/Examination";
import Category from "../src/capacity/Category";
import Box from "../src/Box"; // ใช้ AppLoading เพื่อแสดงระหว่างการโหลดฟอนต์

const Stack = createNativeStackNavigator();
// ฟังก์ชันโหลดฟอนต์
const loadFonts = async () => {
  await Font.loadAsync({
    'SpaceMono-Regular': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    'SukhumvitSet-Bold': require('../../assets/fonts/SukhumvitSet-Bold.ttf'),
    'SukhumvitSet-Light': require('../../assets/fonts/SukhumvitSet-Light.ttf'),
    'SukhumvitSet-Medium': require('../../assets/fonts/SukhumvitSet-Medium.ttf'),
    'SukhumvitSet-SemiBold': require('../../assets/fonts/SukhumvitSet-SemiBold.ttf'),
    'SukhumvitSet-Thin': require('../../assets/fonts/SukhumvitSet-Thin.ttf'),
  });
};



export default function App() {

  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true)).catch(console.error);
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="IndexCapacity">
        <Stack.Screen
          name="indexCapacity"
          component={indexCapacity}
          options={({ navigation }) => ({
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
          })}
        />
        <Stack.Screen
          name="NewScreen"
          component={NewScreen}
          options={({ navigation }) => ({
            title: "ทดสอบสมรรณภาพ",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
          })}
        />
        <Stack.Screen
          name="Examination"
          component={Examination}
          options={({ navigation }) => ({
            title: "หมวดหมู่ข้อสอบใบขับขี่",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
          })}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={({ navigation }) => ({
            title: "หมวดหมู่",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
          })}
        />
      </Stack.Navigator>
      <Box />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
