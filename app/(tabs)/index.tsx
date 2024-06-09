import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import newScreen from "../src/capacity/NewScreen"; // Adjust the path as needed
import indexCapacity from "../src/capacity/IndexCapacity"; // Adjust the path as needed
import { Colors } from "@/constants/Colors";

import Box from "../src/Box"; // ปรับเส้นทางตามที่ถูกต้อง

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="TabTwo">
        <Stack.Screen
          name="IndexCapacity"
          component={indexCapacity}
          options={({ route, navigation }) => ({
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
          component={newScreen}
          options={({ route, navigation }) => ({
            title: "ทดสอบสมรรณภาพ",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white, // Change this to your desired color
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
