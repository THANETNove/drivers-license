import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Artboard9_0 from "../../../assets/images/coverImg/Artboard9_0.jpg";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง

const InterestingDriverLicense = () => {


    return (
        <ScreenContainer>
            <ScrollView contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image
                        source={Artboard9_0}
                        style={styles.image} // ใช้ขนาดของหน้าจอ
                        resizeMode="stretch" // แสดงภาพทั้งหมดในขนาดที่สัดส่วนเดิม
                    />
                </View>

            </ScrollView>
        </ScreenContainer>
    );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // ทำให้ ScrollView ขยายตามเนื้อหา
    },
    imageContainer: {
        flex: 1,

    },
    image: {
        width: '100%',
        height: height * 0.85,

    },
});

export default InterestingDriverLicense;
