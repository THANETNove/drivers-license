/* // Box.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Colors } from "@/constants/Colors";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : Platform.OS ? 'ca-app-pub-6813229715486122/2248366452' : 'ca-app-pub-6813229715486122/8953375601';

const Box = () => {

    const [isAdLoaded, setIsAdLoaded] = useState(true);

    useEffect(() => {
        const loadBannerAd = async () => {
            // Load the banner ad
            await BannerAd.requestAd(adUnitId);
            setIsAdLoaded(true);
        };

        loadBannerAd();

        return () => {
            // Clean up when unmounting the component
            setIsAdLoaded(false);
        };
    }, []);


    return <View style={styles.box} >
        {isAdLoaded && (
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            />
        )}
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
 */