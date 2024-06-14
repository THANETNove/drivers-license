
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';
import Artboard17_0 from "../../../assets/images/coverImg/Artboard17_0.png"
import Artboard75 from "../../../assets/images/coverImg/Artboard75.png"




const PrepareBeforeExam = () => {
    const [clickBok_1, setClickBok_1] = useState(false);
    const [clickBok_2, setClickBok_2] = useState(false);
    const [clickBok_3, setClickBok_3] = useState(false);
    console.log("clickBok_1", clickBok_1);

    return (
        <View style={styles.container}>
            <Image
                source={Artboard17_0} // ใช้ source แทน src
                style={{ width: '100%', height: '100%', zIndex: 0 }}
                resizeMode="stretch"
            />
            <Pressable onPress={() => setClickBok_1(!clickBok_1)} style={styles.checkBok_1}>
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
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBok_1: {
        width: 60,
        height: 60,
        top: 0,
        left: 0,
        marginTop: "66%",
        marginLeft: "13%",

        position: "absolute",
        zIndex: 1
    },
    checkBok_2: {
        width: 60,
        height: 60,
        top: 0,
        left: 0,
        marginTop: "84%",
        marginLeft: "13%",
        position: "absolute",
        zIndex: 1
    },
    checkBok_3: {
        width: 60,
        height: 60,
        top: 0,
        left: 0,
        marginTop: "102%",
        marginLeft: "13%",
        position: "absolute",
        zIndex: 1
    }

});


export default PrepareBeforeExam;