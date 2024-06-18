import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Previous from "../../../assets/images/coverImg/Artboard63.png";
import Next from "../../../assets/images/coverImg/Artboard64.png";

const StepsTest = () => {
    const [stepsImg, setStepsImg] = useState(0);
    const images = [
        require('../../../assets/images/coverImg/Artboard01.png'),
        require('../../../assets/images/coverImg/Artboard02.png'),
        require('../../../assets/images/coverImg/Artboard03.png'), // Ensure this path is correct
    ];

    const handleNext = () => {
        if (stepsImg < images.length - 1) {
            setStepsImg(stepsImg + 1);
        }
    };

    const handlePrevious = () => {
        if (stepsImg > 0) {
            setStepsImg(stepsImg - 1);
        }
    };

    const imageSteps = () => {
        return (
            <>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {images.map((img, index) => (
                        <View key={index} style={stepsImg === index ? styles.imageContainer : styles.hidden}>
                            {stepsImg === index && (
                                <Image
                                    source={img}
                                    style={styles.image}
                                    resizeMode="stretch"
                                />
                            )}
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handlePrevious} disabled={stepsImg === 0}>
                        {stepsImg !== 0 &&
                            <Image
                                source={Previous}
                                style={[
                                    styles.buttonImage,
                                    stepsImg === 0 && styles.disabledButton
                                ]}
                            />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext} disabled={stepsImg === images.length - 1}>
                        {stepsImg !== images.length - 1 &&
                            <Image
                                source={Next}
                                style={[
                                    styles.buttonImage,
                                    stepsImg === images.length - 1 && styles.disabledButton
                                ]}
                            />
                        }
                    </TouchableOpacity>
                </View>
            </>
        );
    }

    return (
        <View style={styles.container}>
            {imageSteps()}
        </View>
    );
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: "100%",
    },
    hidden: {
        display: 'none',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        position: "absolute",
        bottom: 0,
    },
    buttonImage: {
        marginHorizontal: 16,
        marginVertical: 8,
        width: 50,
        height: 50,
    },
    disabledButton: {
        opacity: 0.5,
    },
});

export default StepsTest;
