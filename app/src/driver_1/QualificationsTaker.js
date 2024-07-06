
import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Artboard10_0 from "../../../assets/images/coverImg/Artboard10-0.jpg"
import ScreenContainer from "../NavigationProvider"; // 



const QualificationsTaker = () => {

    return (
        <ScreenContainer>
            <ScrollView contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image
                        source={Artboard10_0}
                        style={styles.image} // ลดขนาดความกว้างของภาพลง 32 (16*2) เพื่อเพิ่ม paddingHorizontal
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
        height: height * 0.85, // ปล่อยให้ความสูงเป็นอัตโนมัติเพื่อให้สัดส่วนถูกต้อง

    },

});


export default QualificationsTaker;