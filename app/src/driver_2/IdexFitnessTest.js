import React from "react";
import { Colors } from "@/constants/Colors";
import { Image, ScrollView, View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง

import Animated56 from "../../../assets/images/coverImg/Artboard56.png";
import Animated57 from "../../../assets/images/coverImg/Artboard57.png";
import Animated58 from "../../../assets/images/coverImg/Artboard58.png";
import Animated59 from "../../../assets/images/coverImg/Artboard59.png";


const Capacity = ({ navigation }) => {



    return (
        <ScreenContainer >
            <ScrollView contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Pressable onPress={() => navigation.navigate('StepsTest')}>
                            <Image
                                source={Animated56} // ใช้ source แทน src
                                style={styles.image} // กำหนดขนาดของภาพ
                            />
                        </Pressable>
                    </View>

                    <View style={styles.box}>
                        <Pressable onPress={() => navigation.navigate('ReactionTest')}>
                            <Image
                                source={Animated57} // ใช้ source แทน src
                                style={styles.image} // กำหนดขนาดของภาพ
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Pressable onPress={() => navigation.navigate('InDepthLook')}>
                            <Image
                                source={Animated58} // ใช้ source แทน src
                                style={styles.image} // กำหนดขนาดของภาพ
                            />
                        </Pressable>
                    </View>
                    <View style={styles.box}>
                        <Pressable onPress={() => navigation.navigate('ColorBlindnessTest')}>
                            <Image
                                source={Animated59} // ใช้ source แทน src
                                style={styles.image} // กำหนดขนาดของภาพ
                            />
                        </Pressable>
                    </View>

                </View>

            </ScrollView>
        </ScreenContainer >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        marginTop: "15%",
        paddingTop: 8,
        borderRadius: 6,
        zIndex: 0
    },
    absoluteContainer: {
        position: 'absolute',
        top: 32,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        width: '49%',
        height: 250,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
    image90: {
        marginTop: -20,
        marginLeft: "32%",
        width: 150,
        height: 150,
        position: "absolute",
        zIndex: 10
    },
    knowing: {
        color: Colors.primary2,
        textAlign: "center",
        fontSize: 28,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    }
});

export default Capacity;
