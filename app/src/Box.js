// Box.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";
const Box = () => {
    return <View style={styles.box} />;
};

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 65,
        backgroundColor: Colors.green, // เปลี่ยนสีตามที่ต้องการ
    },
});

export default Box;
