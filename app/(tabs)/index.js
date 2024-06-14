import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading"; // ใช้ AppLoading เพื่อแสดงระหว่างการโหลดฟอนต์
import { useColorScheme } from "@/hooks/useColorScheme";
import Box from "../src/Box"; // ใช้ AppLoading เพื่อแสดงระหว่างการโหลดฟอนต์

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
// ฟังก์ชันโหลดฟอนต์
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

export default function App() {
  const colorScheme = useColorScheme();
  /*   const routeName = useNavigationState(state => state.routes[state.index].name);
   */
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

      {/*   {currentRouteName !== 'HomeDriver' && (
        <View style={styles.image}>
          <Image
            source={Artboard90} // ใช้ source แทน src
            style={{ width: '100%', height: '100%' }}
            resizeMode="stretch"
          />
        </View>
      )} */}
      <Stack.Navigator initialRouteName="HomeDriver">
        <Stack.Screen
          name="HomeDriver"
          component={HomeDriver}
          options={({ navigation }) => ({
            title: "",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerShown: false
          })}
        />
        <Stack.Screen
          name="indexCapacity"
          component={indexCapacity}
          options={({ navigation }) => ({
            title: "รอบรู้เรื่อง การสอบใบขับขี่",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
          })}
        />
        <Stack.Screen
          name="InterestingDriverLicense"
          component={InterestingDriverLicense}
          options={({ navigation }) => ({
            title: "ใบอนุญาติขับขี่น่ารู้",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
            /*    headerShown: false, // ซ่อน Navigation Bar ของหน้า Questions */
          })}

        />
        <Stack.Screen
          name="QualificationsTaker"
          component={QualificationsTaker}
          options={({ navigation }) => ({
            title: "คุณสมบัติของผู้สอบ",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
          })}
        />
        <Stack.Screen
          name="StepsDriversLicense"
          component={StepsDriversLicense}
          options={({ navigation }) => ({
            title: "ขั้นตอนการสอบใบขับขี่",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
          })}
        />
        <Stack.Screen
          name="PrepareBeforeExam"
          component={PrepareBeforeExam}
          options={({ navigation }) => ({
            title: "การเตรียมตัวก่อนสอบ",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
          })}
        />


        <Stack.Screen
          name="NewScreen"
          component={NewScreen}
          options={({ navigation }) => ({
            title: "ทดสอบสมรรณภาพ",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
          })}
        />
        <Stack.Screen
          name="ExaminationQ"
          component={ExaminationQ}
          options={({ navigation }) => ({
            title: "หมวดหมู่ข้อสอบใบขับขี่",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
          })}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={({ navigation }) => ({
            title: "ข้อสอบใบขับขี่",
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
          })}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={({ navigation }) => ({
            title: "ตอบคำถาม",
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
            showLabel: false,
            headerTitleStyle: {
              fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
              fontSize: 20, // ขนาดฟอนต์
            },
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
  image: {
    width: 70,
    height: 70
  },
});
