import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard5_63 from "../../../assets/images/coverImg/Artboard5_63.png";
import Artboard5_64 from "../../../assets/images/coverImg/Artboard5_64.png";


const DriverLicenseExaminationProcess = () => {

    const route = useRoute();
    const { id } = route.params; // รับพารามิเตอร์ id
    console.log("id", id);
    return (
        <ScreenContainer>
            <Text>DriverLicenseExaminationProcess</Text>
        </ScreenContainer>

    )
}
export default DriverLicenseExaminationProcess;