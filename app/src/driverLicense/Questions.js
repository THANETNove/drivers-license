import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";

import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import { LinearGradient } from 'expo-linear-gradient';

const Questions = ({ route, navigation }) => {

    const { category, categoryIndex } = route.params;

    return (
        <ScreenContainer>

            <View style={styles.container}>
                <Text style={styles.categoryIndex}>ข้อสอบใบขับขี่หมวดที่ {categoryIndex}</Text>
                <Text style={styles.category}>- {category}</Text>
                <Text>{category}</Text>
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: "auto",
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        padding: 16,
        paddingBottom: 50,
        borderRadius: 6, // 
    },
    button: {
        marginBottom: 16,
        width: 320, // กำหนดความกว้างของปุ่ม
        height: 70, // กำหนดความสูงของปุ่ม
        borderRadius: 50, // ทำให้มุมของปุ่มโค้งมน
        justifyContent: 'center', // จัดตำแหน่งข้อความตรงกลางในแนวตั้ง
        alignItems: 'center', // จัดตำแหน่งข้อความตรงกลางในแนวนอน
        elevation: 5, // เพิ่มเงาเพื่อให้ปุ่มดูยกขึ้น (เฉพาะ Android)
    },
    buttonText: {
        color: Colors.white, // สีของข้อความ
        fontSize: 18, // ขนาดของข้อความ
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    buttonContent: {
        alignItems: 'center', // จัดตำแหน่งข้อความตรงกลางในแนวนอน
    },
    categoryIndex: {
        color: Colors.black, // สีของหมวดหมู่
        fontSize: 20, // ขนาดของหมวดหมู่
    },
    category: {
        color: Colors.black, // สีของหมวดหมู่
        fontSize: 18, // ขนาดของหมวดหมู่
        marginBottom: 16
    },
    categoryText: {
        color: Colors.white, // สีของหมวดหมู่
        fontSize: 14, // ขนาดของหมวดหมู่
    },
});

export default Questions;