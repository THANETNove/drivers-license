import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import categories from "../categoriesArray"; // ปรับเส้นทางตามที่ถูกต้อง


const ClipTeachingPracticePoses = () => {
    return (
        <Text>ClipTeachingPracticePoses</Text>
    )
}
export default ClipTeachingPracticePoses;