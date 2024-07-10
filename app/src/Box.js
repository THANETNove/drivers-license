// Box.js
import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Colors } from "@/constants/Colors";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : Platform.OS ? 'ca-app-pub-6813229715486122/2248366452' : 'ca-app-pub-6813229715486122/8953375601';

const Box = () => {
    return <View style={styles.box} >
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
    </View>;
};

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: "auto",
        backgroundColor: Colors.green, // เปลี่ยนสีตามที่ต้องการ
    },
});

export default Box;
