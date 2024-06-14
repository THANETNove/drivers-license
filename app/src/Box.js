// Box.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from "@/constants/Colors";
const Box = () => {
    return <View style={styles.box} >
        <Text style={{ fontSize: 20, paddingTop: 8, color: "#FFF", textAlign: "center" }}> โฆษณา Google</Text>
    </View>;
};

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 54,
        backgroundColor: Colors.green, // เปลี่ยนสีตามที่ต้องการ
    },
});

export default Box;
