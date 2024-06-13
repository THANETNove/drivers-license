import React from 'react'
import { Colors } from "@/constants/Colors";

import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import { LinearGradient } from 'expo-linear-gradient';



const Examination = ({ navigation }) => {

    const buttons = [
        { text: 'ข้อสอบใบขับขี่หมวดที่ 1', category: 'กฎหมายว่าด้วยรถยนต์', categoryIndex: 1 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 2', category: 'กฎหมายว่าด้วยจราจรทางบก', categoryIndex: 2 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 3', category: 'เครื่องหมายพื้นทาง', categoryIndex: 3 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 4', category: ' ป้ายบังคับ', categoryIndex: 4 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 5', category: 'ป้ายเตือน', categoryIndex: 5 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 6', category: 'ป้ายแนะนำ', categoryIndex: 6 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 7', category: 'มารยาทและจติสานึก', categoryIndex: 7 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 8', category: 'เทคนิคการขับรถอย่างปลอดภัย', categoryIndex: 8 },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 9', category: 'การบำรุงรักษารถ', categoryIndex: 9 },
    ];
    return (
        <ScreenContainer>
            <View style={styles.scrollViewContent}>
                <ScrollView
                    contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>

                    {buttons && buttons.map((button, index) => (
                        <Pressable key={index} onPress={() => navigation.navigate('Category', {
                            category: button.category,
                            categoryIndex: button.categoryIndex,
                        })}>
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

                </ScrollView>
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

export default Examination;