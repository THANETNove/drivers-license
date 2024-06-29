import React from 'react';
import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable, Dimensions } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard60 from "../../../assets/images/coverImg/Artboard60.png";
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation

const IndexExamination = () => {
    const navigation = useNavigation();
    return (
        <ScreenContainer >
            <View style={styles.container}>
                <Image
                    source={Artboard60} // ใช้ source แทน src
                    style={styles.artboardx}
                    resizeMode="stretch"
                />

                <Pressable onPress={() => navigation.navigate('Examination_3')} style={styles.boxText}>
                    <Text style={styles.text}>เลือกหมวดหมู่</Text>
                </Pressable>
                <View style={styles.boxText}>
                    <Text style={styles.text}>สุ่มเลือก 50 ข้อ</Text>
                </View>
            </View>
        </ScreenContainer>

    )
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",

    },
    artboardx: {
        width: "100%",
        height: "75%"

    },
    boxText: {
        width: width - 64,
        height: 50,
        backgroundColor: Colors.primary2,
        borderRadius: 4,
        marginBottom: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: Colors.white, // สีของข้อความ
        fontSize: 18, // ขนาดของข้อความ
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    }
})

export default IndexExamination;