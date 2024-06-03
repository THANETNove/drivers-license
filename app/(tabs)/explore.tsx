// App.js or index.js

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import newScreen from "../src/capacity/newScreen"; // Adjust the path as needed
import indexCapacity from "../src/capacity/indexCapacity"; // Adjust the path as needed
import { Colors } from "@/constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="TabTwo">
      <Stack.Screen
        name="indexCapacity"
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
        name="newScreen"
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
  );
}
