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
        barStyle="light-content" // ตั้งค่าสีของข้อความและไอคอนในแถบสถานะเป็นสีขาว
        backgroundColor={Colors[colorScheme ?? "light"].background} // ตั้งค่าสีพื้นหลังของแถบสถานะ
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: hideTabBar ? styles.hiddenTabBar : {},
          headerTintColor: Colors.white, // สีของข้อความใน headerd

          headerStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].background, // เปลี่ยนสีพื้นหลังของ header
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "สอบใบขับขี่",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

// สไตล์สำหรับซ่อนแถบแท็บ
const styles = StyleSheet.create({
  hiddenTabBar: {
    display: "none", // ซ่อนแถบแท็บ
  },
});
