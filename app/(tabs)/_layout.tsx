import React, { useState } from "react";
import { View, Button, StyleSheet, StatusBar } from "react-native";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // State เพื่อควบคุมการแสดงผลของแถบแท็บ
  const [hideTabBar, setHideTabBar] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content" // สีของข้อความและไอคอนในแถบสถานะเป็นสีขาว
        backgroundColor="transparent" // ตั้งค่าสีพื้นหลังของแถบสถานะให้โปร่งใส
        translucent={true} // ให้แถบสถานะโปร่งใส
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: hideTabBar ? styles.hiddenTabBar : {},
          headerTintColor: Colors.white, // Change this to your desired color
        }}
      ></Tabs>
    </View>
  );
}

// สไตล์สำหรับซ่อนแถบแท็บ
const styles = StyleSheet.create({
  hiddenTabBar: {
    display: "none", // ซ่อนแถบแท็บ
  },
});
