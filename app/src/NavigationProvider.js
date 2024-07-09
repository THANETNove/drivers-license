import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "@/constants/Colors";

const ScreenContainer = ({ children }) => {
    return (
        /*  <LinearGradient colors={["#DFE9F6", "#DBDEF1", "#DCD2EA"]} style={{ flex: 1, zIndex: 0 }}>
             {children}
         </LinearGradient> */
        <ImageBackground
            source={require('../../assets/images/coverImg/bg-2.png')} // เปลี่ยนเป็น path ของภาพพื้นหลังที่คุณต้องการใช้
            style={{ flex: 1, zIndex: 0 }}
            resizeMode="cover" // หรือ resizeMode ตามที่ต้องการ
        >
            {children}
        </ImageBackground>
    );
};

export default ScreenContainer;
