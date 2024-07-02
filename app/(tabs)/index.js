import * as React from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading"; // ใช้ AppLoading เพื่อแสดงระหว่างการโหลดฟอนต์
import { useColorScheme } from "@/hooks/useColorScheme";
import Box from "../src/Box"; // ใช้ AppLoading เพื่อแสดงระหว่างการโหลดฟอนต์

import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { store } from '../../redux/store';


import Artboard90 from "../../assets/images/coverImg/Artboard90.png";
import HomeDriver from "../src/driver_1/HomeDriver";
import indexCapacity from "../src/driver_1/IndexCapacity";
import InterestingDriverLicense from "../src/driver_1/InterestingDriverLicense";
import StepsDriversLicense from "../src/driver_1/StepsDriversLicense";
import PrepareBeforeExam from "../src/driver_1/PrepareBeforeExam";
import QualificationsTaker from "../src/driver_1/QualificationsTaker";
import IdexFitnessTest from "../src/driver_2/IdexFitnessTest";
import StepsTest from "../src/driver_2/StepsTest";
import ReactionTest from "../src/driver_2/ReactionTest";
import InDepthLook from "../src/driver_2/InDepthLook";
import ColorBlindnessTest from "../src/driver_2/ColorBlindnessTest";
import IndexExamination from "../src/driver_3/IndexExamination";
import Examination_3 from "../src/driver_3/Examination_3";
import Questions_3 from "../src/driver_3/Questions_3";
import RandomQuestions from "../src/driver_3/RandomQuestions";
import ExaminationQ from "../src/driver_4/Examination";
import Category from "../src/driver_4/Category";
import Questions from "../src/driver_4/Questions";
import ClipTeachingPracticePoses from "../src/driver_5/ClipTeachingPracticePoses";
import DriverLicenseExaminationProcess from "../src/driver_5/DriverLicenseExaminationProcess";
import RenewDriverLicense from "../src/driver_6/RenewDriverLicense";
import RenewDriverLicenseProcess from "../src/driver_6/RenewDriverLicenseProcess";




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
  /*   const routeName = useNavigationState(state => state.routes[state.index]);
   */
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    loadFonts()
      .then(() => setFontsLoaded(true))
      .catch(console.error);
  }, []);
  const routeName = useNavigationState(state => {
    const route = state.routes[state.index];
    return route && route.state && typeof route.state.index !== 'undefined' ? route.state.index : null;
  });




  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <Provider store={store}>
      <View style={styles.container}>

        {routeName != 0 &&
          <View style={styles.boxImage}>
            <Image
              source={Artboard90} // ใช้ source แทน src
              style={{ width: '100%', height: '100%' }}
              resizeMode="stretch"
            />
          </View>
        }

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
              title: "รอบรู้เรื่องการสอบใบขับขี่",
              headerTitle: () => (
                <View style={styles.boxImage90}>
                  <Image
                    source={Artboard90} // ใช้ source แทน src
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
              ),
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
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
                fontSize: 18, // ขนาดฟอนต์
              },
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
                fontSize: 18, // ขนาดฟอนต์
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
                fontSize: 18, // ขนาดฟอนต์
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
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />


          <Stack.Screen
            name="IdexFitnessTest"
            component={IdexFitnessTest}
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
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="StepsTest"
            component={StepsTest}
            options={({ navigation }) => ({
              title: "การมองเห็นสัญญาณไฟจราจร",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="ReactionTest"
            component={ReactionTest}
            options={({ navigation }) => ({
              title: "ทดสอบปฏิกริยา",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="InDepthLook"
            component={InDepthLook}
            options={({ navigation }) => ({
              title: "ทดสอบการมองในเชิงลึก",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="ColorBlindnessTest"
            component={ColorBlindnessTest}
            options={({ navigation }) => ({
              title: "ทดสอบตาบอดสี",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="IndexExamination"
            component={IndexExamination}
            options={({ navigation }) => ({
              title: "ทดสอบพร้อมเฉลย",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="Examination_3"
            component={Examination_3}
            options={({ navigation }) => ({
              title: "ทดสอบพร้อมเฉลย",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="Questions_3"
            component={Questions_3}
            options={({ route, navigation }) => ({
              title: route.params.category + " " + route.params.selectedSet,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="RandomQuestions"
            component={RandomQuestions}
            options={({ route, navigation }) => ({
              title: "ทดสอบพร้อมเฉลย",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold", // ใช้ฟอนต์ที่โหลดเสร็จแล้ว
                fontSize: 18, // ขนาดฟอนต์
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
                fontSize: 18, // ขนาดฟอนต์
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
                fontSize: 18, // ขนาดฟอนต์
              },
            })}
          />
          <Stack.Screen
            name="Questions"
            component={Questions}
            options={({ route, navigation }) => ({
              title: route.params.category + " " + route.params.selectedSet,
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold",
                fontSize: 20,
              },
            })}
          />
          <Stack.Screen
            name="ClipTeachingPracticePoses"
            component={ClipTeachingPracticePoses}
            options={({ route, navigation }) => ({
              title: "คลิปสอนท่าสอบปฏิบัติ",
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold",
                fontSize: 20,
              },
            })}
          />
          <Stack.Screen
            name="DriverLicenseExaminationProcess"
            component={DriverLicenseExaminationProcess}
            options={({ route, navigation }) => ({
              title: "ขั้นตอนการสอบใบขับขี่",
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold",
                fontSize: 20,
              },
            })}
          />
          <Stack.Screen
            name="RenewDriverLicense"
            component={RenewDriverLicense}
            options={({ route, navigation }) => ({
              title: "การต่อใบขับขี่",
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold",
                fontSize: 20,
              },
            })}
          />
          <Stack.Screen
            name="RenewDriverLicenseProcess"
            component={RenewDriverLicenseProcess}
            options={({ route, navigation }) => ({
              title: "การต่อใบขับขี่",
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              showLabel: false,
              headerTitleStyle: {
                fontFamily: "SukhumvitSet-Bold",
                fontSize: 20,
              },
            })}
          />
        </Stack.Navigator>
        <Box />
      </View>
    </Provider>
  );
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0

  },
  boxImage: {
    width: 65,
    height: 60,
    zIndex: 10,
    right: 8,
    top: 40,
    position: "absolute"

  }
});
