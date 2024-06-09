import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NewScreen from "../src/capacity/NewScreen";
import indexCapacity from "../src/capacity/indexCapacity";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

export default function App() {
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
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
