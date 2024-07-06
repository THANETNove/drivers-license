
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import Artboard17_0 from "../../../assets/images/coverImg/Artboard17_0.jpg"
import Artboard75 from "../../../assets/images/coverImg/Artboard75.png"
import ScreenContainer from "../NavigationProvider"; // 





const PrepareBeforeExam = () => {
    const [clickBok_1, setClickBok_1] = useState(false);
    const [clickBok_2, setClickBok_2] = useState(false);
    const [clickBok_3, setClickBok_3] = useState(false);

    const { width, height } = Dimensions.get('window');
    return (
        <ScreenContainer>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image
                        source={Artboard17_0} // ใช้ source แทน src
                        style={{ width: '100%', height: height * 0.85, zIndex: 0 }}
                        resizeMode="stretch"
                    />
                    {/*  <Pressable onPress={() => setClickBok_1(!clickBok_1)} style={styles.checkBok_1}>
                {clickBok_1 && <Image
                    source={Artboard75} // ใช้ source แทน src
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="stretch"
                />}
            </Pressable>
            <Pressable onPress={() => setClickBok_2(!clickBok_2)} style={styles.checkBok_2}>
                {clickBok_2 && <Image
                    source={Artboard75} // ใช้ source แทน src
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="stretch"
                />}
            </Pressable>
            <Pressable onPress={() => setClickBok_3(!clickBok_3)} style={styles.checkBok_3}>
                {clickBok_3 && <Image
                    source={Artboard75} // ใช้ source แทน src
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="stretch"
                />}
            </Pressable> */}
                </View>
            </ScrollView>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBok_1: {
        width: 55,
        height: 60,
        top: 0,
        left: 0,
        marginTop: "65%",
        marginLeft: "13%",

        position: "absolute",
        zIndex: 1
    },
    checkBok_2: {
        width: 55,
        height: 60,
        top: 0,
        left: 0,
        marginTop: "83%",
        marginLeft: "13%",
        position: "absolute",
        zIndex: 1
    },
    checkBok_3: {
        width: 55,
        height: 60,
        top: 0,
        left: 0,
        marginTop: "101%",
        marginLeft: "13%",
        position: "absolute",
        zIndex: 1
    }

});


export default PrepareBeforeExam;