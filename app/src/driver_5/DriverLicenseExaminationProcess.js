import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard15 from "../../../assets/images/coverImg/Artboard57-100.jpg";
import Artboard16 from "../../../assets/images/coverImg/Artboard59-100.jpg";


const DriverLicenseExaminationProcess = () => {

    const route = useRoute();
    const { id } = route.params; // รับพารามิเตอร์ id
    console.log("id", id);
    return (
        <ScreenContainer >
            <View style={styles.container}>
                <Image
                    source={id && id == 1 ? Artboard15 : Artboard16} // ใช้ source แทน src
                    style={styles.imageArt5}
                />
                <View style={styles.boxVideo}></View>
            </View>
        </ScreenContainer>

    )
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    imageArt5: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        zIndex: 0
    },
    boxVideo: {
        width: width - 64,
        height: 200,
        borderColor: Colors.primary2,
        borderWidth: 1,
        zIndex: 1,
        position: "absolute",
        bottom: 120
    }
});
export default DriverLicenseExaminationProcess;