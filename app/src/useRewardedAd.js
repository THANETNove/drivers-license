// useRewardedAd.js
import { useState, useEffect } from 'react';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { View, StyleSheet, Text, Platform } from 'react-native';

const adUnitId = __DEV__ ? TestIds.REWARDED : Platform.OS ? 'ca-app-pub-6813229715486122/9822306975' : 'ca-app-pub-6813229715486122/9847740591';


/* const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
}); */
const createRewardedAd = () => RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});




export const useRewardedAd = () => {
    const [loaded, setLoaded] = useState(false);
    const [loadedPlay, setLoadedPlay] = useState(true);
    const [rewarded, setRewarded] = useState(createRewardedAd());




    useEffect(() => {
        /*   const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
              setLoaded(true);
          });
          const unsubscribeEarned = rewarded.addAdEventListener(
              RewardedAdEventType.EARNED_REWARD,
              reward => {
                  setLoadedPlay(false);
              },
          ); */

        const onAdLoaded = () => setLoaded(true);
        const onAdEarned = () => setLoadedPlay(false);

        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, onAdLoaded);
        const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, onAdEarned);

        // Start loading the rewarded ad straight away
        rewarded.load();

        // Unsubscribe from events on unmount
        return () => {

            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, [rewarded]); // เพิ่ม rewarded เป็น dependency ที่จำเป็น


    const showAd = () => {

        if (loaded) {
            /*  rewarded.show(); */
            rewarded.show().then(() => {
                rewarded.load();
            });
        } else {
            rewarded.load();
        }
    };

    const resetLoadedPlay = () => {
        rewarded.load();
        setLoadedPlay(true); // เมื่อต้องการรีเซ็ต loadedPlay เป็น true อีกครั้ง
        setLoaded(false);
    };


    return { showAd, loaded, loadedPlay, resetLoadedPlay };
};
