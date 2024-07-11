import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard32 from '../../../assets/images/coverImg/Artboard-17.png'; // Update the path as needed
import Artboard18 from '../../../assets/images/coverImg/Artboard-18.png'; // Update the path as needed
import Artboard14 from '../../../assets/images/coverImg/Artboard14.png'; // Update the path as needed
import Artboard16 from '../../../assets/images/coverImg/Artboard16.png'; // Update the path as needed
import TopView from '../../../assets/images/coverImg/Artboard-21.png'; // Update the path as needed
import { Colors } from '@/constants/Colors';
import Next from "../../../assets/images/coverImg/Artboard64.png";
import Previous from "../../../assets/images/coverImg/Artboard63.png";
import Artboard90 from "../../../assets/images/coverImg/Artboard90.png";
import { useRewardedAd } from '../useRewardedAd'; // นำเข้า useRewardedAd

const DepthPerceptionTest = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [polePosition, setPolePosition] = useState(40); // For managing the position of the pole
    const [submitted, setSubmitted] = useState(false); // For managing the submission state
    const [stepsImgCountdown, setStepsImgCountdown] = useState(false);
    const [stepsImg, setStepsImg] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [distance, setDistance] = useState(20);
    const [isCorrect, setIsCorrect] = useState(20);
    const { showAd, loaded, loadedPlay, resetLoadedPlay } = useRewardedAd();



    const handleMoveForward = () => {
        // Logic for moving the pole forward
        setPolePosition(prev => Math.max(prev - 5, 0)); // Example logic
    };

    const handleMoveBackward = () => {
        // Logic for moving the pole backward
        setPolePosition(prev => Math.min(prev + 5, 40)); // Example logic
    };

    const handleSubmit = () => {




        // Define the correct position (example value)
        const correctPosition = 20; // Adjust this value based on the correct position

        setIsCorrect(polePosition - correctPosition == 20);

        let distance2 = correctPosition - polePosition;
        /*  if (correctPosition - polePosition == 15) {
             distance2 = -10;
         }
         if (correctPosition - polePosition == 10) {
             distance2 = -20;
         }
         if (correctPosition - polePosition == 5) {
             distance2 = -30;
         }
         if (correctPosition - polePosition == 0) {
             distance2 = -40;
         } */
        setDistance(distance2);
        // Logic for handling the submission
        setSubmitted(true);

        setTimeout(() => {
            setIsFinished(true)
        }, 2000);
    };

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
    const resetGame = () => {
        resetLoadedPlay();
        setSubmitted(false);
        setPolePosition(40);
        setIsFinished(false);
    };


    // Calculate scale based on the pole position
    const scale = 1 + (polePosition / 300);




    const scoreSteps = () => {

        return (
            <ScreenContainer>
                <ScrollView contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <Image
                        source={Artboard90}
                        style={styles.artboard90}
                        resizeMode="stretch"
                    />
                    <Text style={styles.testResults}>
                        ผลการทดสอบ
                    </Text>
                    <Text style={styles.sourceUser}> {distance}  นิ้ว</Text>
                    {polePosition == 20 ? <Text style={styles.sourceUser}>ผ่านการทดสอบ</Text> : <Text style={styles.sourceUser}>ไม่ผ่านการทดสอบ</Text>}

                    <View style={styles.attemptsContainer2}>

                        <Pressable style={styles.boxBack} onPress={() => {
                            if (!loadedPlay) {
                                navigation.goBack();
                            } else {
                                showAd();
                            }
                        }}>
                            <Text style={styles.textBack}>กลับสู่เมนู</Text>
                        </Pressable>

                        <Pressable style={styles.boxBack} onPress={() => {
                            if (!loadedPlay) {
                                resetGame();
                            } else {
                                showAd();
                            }
                        }}>
                            <Text style={styles.textBack}>ทดสอบใหม่</Text>
                        </Pressable>

                    </View>
                </ScrollView>
            </ScreenContainer>
        )
    }




    const depthKook = () => {
        const { width, height } = Dimensions.get('window');


        return (
            <ScreenContainer>
                <ScrollView contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>


                    {!submitted && (
                        <>
                            <Image source={Artboard32} style={styles.imageBackground} resizeMode="stretch" />
                            <View style={styles.testingBox}>
                                <View style={[styles.pole, { transform: [{ translateY: polePosition * 2 }, { scale }] }]} >
                                    <Image source={Artboard18} style={{ width: "100%", height: "100%" }} resizeMode="stretch" />
                                </View>
                                {/*  <View style={styles.fixedPole} >
                                    <Image source={Artboard18} style={{ width: "100%", height: "100%" }} resizeMode="stretch" />
                                </View> */}
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={handleMoveForward} style={styles.button}>
                                    <Text style={styles.buttonText}>▲</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleMoveBackward} style={styles.button2}>
                                    <Text style={styles.buttonText}>▼</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>ยืนยันคำตอบ</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    {submitted && (
                        <View style={styles.submittedContainer}>
                            <Image source={TopView} style={styles.topViewImage} resizeMode="stretch" />
                            <View style={styles.sideViewContainer}>
                                <View style={[styles.poleSideView, { transform: [{ translateY: distance * -4 }, { scale }] }]} >
                                    <Image source={Artboard14} style={{ width: "100%", height: "100%" }} resizeMode="stretch" />
                                </View>
                                <View style={styles.fixedPoleSideView} >
                                    <Image source={Artboard16} style={{ width: "100%", height: "100%" }} resizeMode="stretch" />
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>
            </ScreenContainer>

        )
    }

    const images = [
        require('../../../assets/images/coverImg/3_1.png'),
        require('../../../assets/images/coverImg/3_2.png'),
        require('../../../assets/images/coverImg/3_3.png'), // Ensure this path is correct
    ];
    const imgCount = () => {
        setStepsImgCountdown(true);
    }

    const imageSteps = () => {
        return (
            <>
                <ScrollView contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {images.map((img, index) => (
                        <View key={index} style={stepsImg === index ? styles.imageContainer : styles.hidden}>
                            {stepsImg === index && (
                                <Pressable onPress={() => stepsImg == 2 && imgCount()}>
                                    <Image
                                        source={img}
                                        style={styles.image}
                                        resizeMode="stretch"
                                    />
                                </Pressable>
                            )}
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.buttonContainerImg}>
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
        <>
            {
                !stepsImgCountdown ? imageSteps() : isFinished ? scoreSteps() : depthKook()
            }
        </>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: 64,

        alignItems: 'center',
        paddingBottom: 200
    },
    imageBackground: {
        top: 0,
        position: 'absolute',
        width: 350,
        height: 500,
    },
    submittedContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    },
    submittedText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    topViewContainer: {
        position: 'relative',
        width: 300,
        height: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topViewImage: {
        width: 250,
        height: 350,
        zIndex: 0
    },
    poleTopView: {
        position: 'absolute',
        width: 10,
        height: 100,
        backgroundColor: 'black',
    },
    fixedPoleTopView: {
        position: 'absolute',
        width: 10,
        height: 100,
        backgroundColor: 'black',
        top: 100, // Adjust this value based on the fixed pole position
    },
    testingBox: {
        top: 20,
        width: 190,
        height: 260,

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 20



    },
    pole: {
        width: 40,
        height: 200,
        position: 'absolute',
        left: 60
    },
    fixedPole: {

        width: 50,
        height: 210,
        position: 'absolute',
        left: 115,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width * 0.8,
        marginBottom: 0,
        marginTop: 100,
        marginBottom: 32
    },
    button: {

        width: 50,
        height: 50,
        backgroundColor: '#90EE90',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000',
    },
    button2: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#000',
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    },
    submitButton: {
        bottom: 0,
        backgroundColor: '#FFA500',
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 60,
    },
    submitButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    sideViewContainer: {
        position: "absolute",
        marginTop: 125,
        left: 20,
        alignItems: 'center',
    },
    poleSideView: {
        position: 'absolute',
        width: 50,
        height: 30,
        left: 33,
        borderRadius: 50,
    },
    fixedPoleSideView: {
        position: 'absolute',
        width: 50,
        height: 30,
        borderRadius: 50,

        left: 127,
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
    buttonContainerImg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        position: "absolute",
        bottom: 0,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainerImg: {
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
    boxCenter: {
        flex: 1,
        marginTop: 32,
        alignItems: 'center',
    },
    boxCenter2: {
        flex: 1,
        marginTop: 16,
        alignItems: 'center',
    },
    artboard90: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        maxWidth: 150,
        maxHeight: 150,
    },
    testResults: {
        marginTop: 16,
        color: Colors.black,
        textAlign: "center",
        fontSize: 48,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    sourceUser: {
        marginTop: 32,
        color: Colors.black,
        fontSize: 48,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    attemptsContainer2: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 32,
        width: "100%",
        marginBottom: 32
    },
    boxBack: {
        width: 180,
        height: 100,
        marginTop: 6,
        backgroundColor: Colors.primary2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.white,
        justifyContent: "center",
        alignItems: "center"
    },
    textBack: {
        color: Colors.white,
        fontSize: 30,
    },


});

export default DepthPerceptionTest;
