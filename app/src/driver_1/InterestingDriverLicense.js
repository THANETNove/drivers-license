
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Artboard9_0 from "../../../assets/images/coverImg/Artboard9_0.png"




const InterestingDriverLicense = () => {


    return (
        <View style={styles.container}>
            <Image
                source={Artboard9_0} // ใช้ source แทน src
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});


export default InterestingDriverLicense;