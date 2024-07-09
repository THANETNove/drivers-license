import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import a5_1_1 from "../../../assets/images/coverImg/5-1_1.png";
import a5_1_2 from "../../../assets/images/coverImg/5-1_2.png"
import a5_2_1 from "../../../assets/images/coverImg/5-2_1.png"
import a5_2_2 from "../../../assets/images/coverImg/5-2_2.png";

import { Video, ResizeMode } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';


const DriverLicenseExaminationProcess = () => {

    const route = useRoute();
    const { id } = route.params; // รับพารามิเตอร์ id

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const { width, height } = Dimensions.get('window');

    return (
        <ScreenContainer >
            <ScrollView contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Image
                    source={id && id == 1 ? a5_2_1 : a5_1_1} // ใช้ source แทน src
                    style={styles.imageArt5}
                />
                <YoutubePlayer
                    height={250}
                    width={width - 64}
                    videoId={id == 1 ? "o_DmbssHhoE" : "reVUfbP7pWo"} // Replace with your YouTube video ID
                    play={true} // Autoplay the video

                />
                <Image
                    source={id && id == 1 ? a5_2_2 : a5_1_2} // ใช้ source แทน src
                    style={styles.imageArt2}
                />
            </ScrollView>
        </ScreenContainer>

    )
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        top: 0,
        alignItems: "center",



    },
    imageArt5: {
        width: "100%",
        height: 450,
        resizeMode: "contain"

    },
    imageArt2: {

        width: "100%",
        height: 100,
        resizeMode: "contain",

    },

    video: {
        width: "100%",
        height: "100%",
        zIndex: 2,
    }
});
export default DriverLicenseExaminationProcess;