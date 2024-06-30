import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard5_63 from "../../../assets/images/coverImg/Artboard5_63.png";
import Artboard5_64 from "../../../assets/images/coverImg/Artboard5_64.png";
import { useNavigation } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation



const ClipTeachingPracticePoses = () => {
    const navigation = useNavigation();

    return (
        <ScreenContainer>
            <View style={styles.box_1}>
                <View style={styles.boxText}>
                    <Text style={styles.textBox}>รถยนต์</Text>
                </View>
                <Pressable onPress={() => navigation.navigate('DriverLicenseExaminationProcess', { id: 1 })}>
                    <Image
                        source={Artboard5_63} // ใช้ source แทน src
                        style={styles.imageArt5}
                    />
                </Pressable>
            </View>

            <View style={styles.box_2}>
                <Pressable onPress={() => navigation.navigate('DriverLicenseExaminationProcess', { id: 2 })}>
                    <Image
                        source={Artboard5_64} // ใช้ source แทน src
                        style={styles.imageArt5}
                    />
                </Pressable>
                <View style={styles.boxText2}>
                    <Text style={styles.textBox}>รถยนต์จักรยานยนต์</Text>
                </View>
            </View>

        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    box_1: {
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 16,
        width: "100%",
        height: "50%",
    },
    box_2: {
        marginTop: -32,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 16,
        width: "100%",
        height: "50%",

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
    }


})
export default ClipTeachingPracticePoses;