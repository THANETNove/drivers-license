import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";

import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import { LinearGradient } from 'expo-linear-gradient';

const Category = ({ route, navigation }) => {

    const { category, categoryIndex, selectedSet, indexSet } = route.params;

    console.log("set", category, categoryIndex, selectedSet, indexSet);

    const buttons = [
        {
            text: `ข้อสอบใบขับขี่หมวดที่ ${categoryIndex}`, category: category,
        },
        { text: `เฉลย ข้อสอบใบขับขี่หมวดที่ ${categoryIndex}`, category: category },
    ];
    return (
        <ScreenContainer>
            <View style={styles.container}>
                {buttons.map((button, index) => (
                    <Pressable key={index} onPress={() => navigation.navigate('Questions', {
                        category: category,
                        categoryIndex: categoryIndex,
                    })} >

                        <LinearGradient
                            colors={['#8B317E', '#662D91']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.button}
                        >
                            <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>{button.text}</Text>
                                <Text style={styles.categoryText}>{button.category}</Text>
                            </View>
                        </LinearGradient>
                    </Pressable>
                ))}
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        alignItems: 'center', // จัดตำแหน่งตรงกลางในแนวนอน
        paddingTop: 60,
        paddingBottom: 50,
        borderRadius: 6, // 
        marginTop: "35%"
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
    categoryText: {
        color: Colors.white, // สีของหมวดหมู่
        fontSize: 14, // ขนาดของหมวดหมู่
    },
});

export default Category;