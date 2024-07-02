import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard7_100 from "../../../assets/images/coverImg/Artboard7-100.jpg";
import Artboard5_64 from "../../../assets/images/coverImg/Artboard5_64.png";

import { useNavigation } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation



const ClipTeachingPracticePoses = () => {
    const navigation = useNavigation();

    return (
        <ScreenContainer>

            <Image
                source={Artboard7_100} // ใช้ source แทน src
                style={styles.artboard7_100}
            />
            <Pressable onPress={() => navigation.navigate('DriverLicenseExaminationProcess', { id: 1 })} style={styles.box_1} />


            <Pressable onPress={() => navigation.navigate('DriverLicenseExaminationProcess', { id: 2 })} style={styles.box_2} />






        </ScreenContainer >
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    box_1: {
        position: "absolute",
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        width: width - 32,
        height: "45%",
        marginLeft: 16,
        marginBottom: 42,
        zIndex: 1
    },
    box_2: {
        position: "absolute",
        bottom: 32,
        justifyContent: "center",
        alignItems: "center",
        width: width - 32,
        height: "45%",
        marginLeft: 16,
        zIndex: 1

    },
    imageArt5: {
        width: 400,
        height: 270,
        resizeMode: "stretch"
    },
    boxText: {
        marginTop: 16,
        backgroundColor: Colors.primary2,
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    boxText2: {
        marginTop: -16,
        backgroundColor: Colors.primary2,
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    textBox: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: 'SukhumvitSet-Bold',
    },
    artboard7_100: {
        marginTop: 8,
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        zIndex: 0
    }


})
export default ClipTeachingPracticePoses;