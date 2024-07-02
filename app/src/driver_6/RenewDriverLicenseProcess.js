import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard15 from "../../../assets/images/coverImg/Artboard18_0.jpg";
import Artboard16 from "../../../assets/images/coverImg/Artboard18_0.jpg";
import { Video, ResizeMode } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';


const DriverLicenseExaminationProcess = () => {

    const route = useRoute();
    const { id } = route.params; // รับพารามิเตอร์ id

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <ScreenContainer >
            <View style={styles.container}>
                <Image
                    source={id && id == 1 ? Artboard15 : Artboard16} // ใช้ source แทน src
                    style={styles.imageArt5}
                />
                <View style={styles.boxVideo}>
                    {/*   <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: 'http://127.0.0.1/project/DriversLicenseImage/video/practiceMotorcycle.mp4',
                        }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    /> */}
                    <YoutubePlayer
                        height={250}
                        width={width - 64}
                        videoId={id == 1 ? "mwag25NZ1-U" : "TwPvU8mbY_0"} // Replace with your YouTube video ID
                        play={true} // Autoplay the video

                    />
                </View>
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
        height: 180,
        borderColor: Colors.primary2,
        borderWidth: 1,
        zIndex: 1,
        position: "absolute",
        bottom: "28%"
    },
    video: {
        width: "100%",
        height: "100%",
        zIndex: 2,
    }
});
export default DriverLicenseExaminationProcess;