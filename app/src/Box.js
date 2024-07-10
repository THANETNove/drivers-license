// Box.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from "@/constants/Colors";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

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
