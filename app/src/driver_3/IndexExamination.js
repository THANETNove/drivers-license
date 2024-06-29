import React from 'react';
import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable, Dimensions } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard60 from "../../../assets/images/coverImg/Artboard60.png";
import { Colors } from '@/constants/Colors';

const IndexExamination = () => {
    return (
        <ScreenContainer >
            <View style={styles.container}>
                <Image
                    source={Artboard60} // ใช้ source แทน src
                    style={styles.artboardx}
                    resizeMode="stretch"
                />
                <View style={styles.boxText}>
                    <Text style={styles.text}>เลือกหมวดหมู่</Text>
                </View>
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
        height: "80%"

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