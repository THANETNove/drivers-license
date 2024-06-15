
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Artboard10_0 from "../../../assets/images/coverImg/Artboard10-0.jpg"




const QualificationsTaker = () => {


    return (
        <View style={styles.container}>
            <Image
                source={Artboard10_0} // ใช้ source แทน src
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


export default QualificationsTaker;