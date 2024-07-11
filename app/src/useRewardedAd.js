// useRewardedAd.js
import { useState, useEffect } from 'react';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { View, StyleSheet, Text, Platform } from 'react-native';

const adUnitId = __DEV__ ? TestIds.REWARDED : Platform.OS ? 'ca-app-pub-6813229715486122/9822306975' : 'ca-app-pub-6813229715486122/9847740591';


const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});



export const useRewardedAd = () => {
    const [loaded, setLoaded] = useState(false);
    const [loadedPlay, setLoadedPlay] = useState(true);




    useEffect(() => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true);
        });
        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                /*  console.log('User earned reward of ', reward); */
                setLoadedPlay(false);
            },
        );

        // Start loading the rewarded ad straight away
        rewarded.load();

        // Unsubscribe from events on unmount
        return () => {

            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, [rewarded]); // เพิ่ม rewarded เป็น dependency ที่จำเป็น


    const showAd = () => {

        /*  if (loaded) {
             rewarded.show();
         } else {
             rewarded.load();
         } */
        rewarded.show();
    };

    const resetLoadedPlay = () => {
        rewarded.load();
        setLoadedPlay(true); // เมื่อต้องการรีเซ็ต loadedPlay เป็น true อีกครั้ง
        setLoaded(false);
    };


    return { showAd, loaded, loadedPlay, resetLoadedPlay };
};
