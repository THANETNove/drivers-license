import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, Button, TouchableOpacity, ScrollView, Animated, Pressable } from 'react-native';
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Artboard6 from "../../../assets/images/coverImg/Artboard6.png";
import Artboard6_1 from "../../../assets/images/coverImg/Artboard6_1.png";
import Artboard6_2 from "../../../assets/images/coverImg/Artboard6_2.png";
import Artboard6_3 from "../../../assets/images/coverImg/Artboard6_3.png";
import { Colors } from '@/constants/Colors';
import Previous from "../../../assets/images/coverImg/Artboard63.png";
import Next from "../../../assets/images/coverImg/Artboard64.png";
import Artboard90 from "../../../assets/images/coverImg/Artboard90.png";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setIndexImage } from '../../../redux/userSlice';

import { useRewardedAd } from '../useRewardedAd'; // นำเข้า useRewardedAd

const getRandomNumber = (exclude) => {
    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * 3) + 1;
    } while (newNumber === exclude);

    return newNumber;
};



const StepsTest = () => {
    const navigation = useNavigation(); // Initialize navigation
    const dispatch = useDispatch();

    const [randomImage, setRandomImage] = useState(null);
    const [buttonIndex, setButtonIndex] = useState(null);

    const [score, setScore] = useState(0); // สำหรับนับคะแนน
    const [attempts, setAttempts] = useState(0); // สำหรับนับจำนวนครั้งที่สุ่ม
    const [countdown, setCountdown] = useState(2); // เวลานับถอยหลัง (5 วินาที)
    const [attemptResults, setAttemptResults] = useState(Array(5).fill(null)); // Initialize with 5 elements
    const [buttonPressed, setButtonPressed] = useState(false); // สำหรับตรวจสอบว่ากดปุ่มแล้วหรือยัง
    const [isFinished, setIsFinished] = useState(false); // สำหรับตรวจสอบว่ากระบวนการเสร็จสิ้นหรือไม่
    const [stepsImg, setStepsImg] = useState(0);
    const [stepsImgCountdown, setStepsImgCountdown] = useState(false);
    const attemptsIntervalRef = useRef(null);
    const countdownIntervalRef = useRef(null);
    const { indIma } = useSelector(selectUser); // ดึงค่า indexImage จาก Redux state
    const { showAd, loaded, loadedPlay, resetLoadedPlay } = useRewardedAd();

    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [prevRandom, setPrevRandom] = useState(null);
    const progressAnim = useRef(new Animated.Value(0)).current;


    const images = [
        require('../../../assets/images/coverImg/1_1.jpg'),
        require('../../../assets/images/coverImg/1_2.jpg'),
        require('../../../assets/images/coverImg/1_3.jpg'), // Ensure this path is correct
    ];

    const imagesRandom = [
        { source: Artboard6_1, id: 1 },
        { source: Artboard6_2, id: 2 },
        { source: Artboard6_3, id: 3 },
    ];


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCounting(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [stepsImgCountdown]);

    useEffect(() => {
        let interval;
        if (isCounting && stepsImgCountdown) {
            interval = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount >= 4) {
                        clearInterval(interval);
                        setIsCounting(false); // Stop counting
                        return prevCount;
                    }
                    return prevCount + 1;
                });
                setAttempts(prevCount => {
                    if (prevCount >= 5) {

                        return prevCount;
                    }
                    return prevCount + 1;
                });

                setButtonPressed(false); // Reset button press state for next attempt
                const newRandom = getRandomNumber(prevRandom);
                setPrevRandom(newRandom);

                progressAnim.setValue(0); // Reset animation value
                Animated.timing(progressAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: false,
                }).start();
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isCounting, stepsImgCountdown, prevRandom]);


    useEffect(() => {
        if (!isCounting) {
            Animated.timing(progressAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
    }, [isCounting, stepsImgCountdown]);

    useEffect(() => {

        if (!isCounting && attempts) {

            setTimeout(() => {
                setIsFinished(true);

            }, 3000);
        }
    }, [!isCounting, attempts]);

    const animatedWidth = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['100%', '0%'],
    });



    const resetGame = () => {
        resetLoadedPlay();
        setCount(0);
        setIsCounting(true);
        setPrevRandom(null);
        setRandomImage(null);
        setButtonIndex(null);
        setIsFinished(false);
        setStepsImgCountdown(true);
        setScore(0);
        setAttempts(0);
        setCountdown(2);
        setAttemptResults(Array(5).fill(null));
        setButtonPressed(false);
        setIsFinished(false);

        return () => clearTimeout(timer);
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

    const handleButtonPress = (index) => {

        if (!buttonPressed) {
            const isCorrect = index === prevRandom;
            setScore(prev => prev + (isCorrect ? 1 : 0));
            setAttemptResults(prev => {
                const updatedResults = [...prev];
                updatedResults[attempts - 1] = isCorrect ? 'correct' : 'incorrect';
                return updatedResults;
            });
            setButtonPressed(true); // Mark the button as pressed for the current attempt
        }
    };



    const scoreSteps = () => {

        return (
            <ScreenContainer>
                <View style={styles.boxCenter2}>
                    <Image
                        source={Artboard90}
                        style={styles.artboard90}
                        resizeMode="stretch"
                    />
                    <Text style={styles.testResults}>
                        ผลการทดสอบ
                    </Text>
                    <View style={styles.attemptsContainer}>
                        {attemptResults.map((result, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.attemptBox,
                                    {
                                        backgroundColor: result === 'correct' ? 'green' : result === 'incorrect' ? 'red' : 'white',
                                        borderColor: 'red',
                                        borderWidth: 2
                                    }
                                ]}
                            >
                            </View>
                        ))}
                    </View>
                    <Text style={styles.sourceUser}>{score} / 5</Text>
                    {score >= 3 ? <Text style={styles.sourceUser}>ผ่านการทดสอบ</Text> : <Text style={styles.sourceUser}>ไม่ผ่านการทดสอบ</Text>}

                    <View style={styles.attemptsContainer2}>

                        <Pressable style={styles.boxBack}
                            onPress={() => {
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
                </View>
            </ScreenContainer>
        )
    }

    const testSteps = () => {

        return (
            <ScreenContainer>
                <View style={styles.boxCenter}>
                    <Image
                        source={Artboard6}
                        style={styles.artboard6}
                        resizeMode="stretch"
                    />

                    <Image
                        source={prevRandom === 1 ? Artboard6_1 : prevRandom === 2 ? Artboard6_2 : Artboard6_3}

                        style={prevRandom === 1 ? styles.artboard6_1 : prevRandom === 2 ? styles.artboard6_2 : styles.artboard6_3}
                        resizeMode="stretch"
                    />

                    <Text style={{ fontSize: 20, color: "#FFF", marginTop: 22 }}>{`ครั้งที่ : ${attempts}/5`}</Text>
                    <View style={styles.attemptsContainer}>
                        {attemptResults.map((result, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.attemptBox,
                                    {
                                        backgroundColor: result === 'correct' ? 'green' : result === 'incorrect' ? 'red' : 'white',
                                        borderColor: 'red',
                                        borderWidth: 2
                                    }
                                ]}
                            >
                            </View>
                        ))}
                    </View>
                    {/*     <Text style={styles.countText}>Count: {count}</Text>
                    <Text style={styles.randomText}>Random: {prevRandom}</Text> */}
                    {/*   <View style={styles.progressBar}>
                        <Animated.View style={[styles.progress, { width: animatedWidth }]} />
                    </View> */}
                    <View style={styles.progressContainer}>
                        {/*  <Animated.View
                            style={[
                                styles.progressBar,
                                {
                                    width: progressAnim.interpolate({
                                        inputRange: [0, 2],
                                        outputRange: ['0%', '100%']
                                    })
                                },
                            ]}
                            
                        /> */}
                        <Animated.View style={[styles.progressBar, { width: animatedWidth }]} />
                    </View>
                    <View style={styles.boxButton}>
                        <View style={styles.buttonContainer2}>
                            {imagesRandom.map((img, index) => (
                                <Pressable key={index} onPress={() => handleButtonPress(index + 1)} // index + 1 เพื่อให้ตรงกับ id ของภาพ
                                    disabled={buttonPressed || attempts >= 6}>
                                    <Image
                                        source={img.source}
                                        style={styles.artboard6_1Button}
                                        resizeMode="stretch"
                                    />
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </View>
            </ScreenContainer>
        );
    };

    const imgCount = () => {
        setStepsImgCountdown(true);
    }

    const imageSteps = () => {
        return (
            <>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
        <View style={styles.container}>
            {!stepsImgCountdown ? imageSteps() : isFinished ? scoreSteps() : testSteps()}

        </View>
    );
}

const { width, height } = Dimensions.get('window');
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
        resizeMode: "contain"
    },
    hidden: {
        display: 'none',
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
    disabledButton: {
        opacity: 0.5,
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
    artboard6: {
        width: 200,
        height: 350
    },
    artboard6_1: {
        position: "absolute",
        top: 18,
        width: 70,
        height: 70
    },
    artboard6_2: {
        position: "absolute",
        top: 110,
        width: 70,
        height: 70
    },
    artboard6_3: {
        position: "absolute",
        top: 200,
        width: 70,
        height: 70
    },
    artboard6_1Button: {
        width: 70,
        height: 70
    },
    progressContainer: {
        width: '80%',
        marginTop: 8,
    },
    progressBar: {
        marginTop: 8,
        height: 15,
        backgroundColor: '#E88843',
        borderRadius: 10,
        marginBottom: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '60%',
    },
    buttonContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 65,
    },
    scoreContainer: {
        marginTop: 20,
    },
    attemptsContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    attemptsContainer2: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 8,
        width: "100%",

    },
    attemptBox: {
        width: 30,
        height: 30,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    attemptText: {
        color: 'black',
        fontSize: 16,
    },
    boxButton: {
        marginTop: 16,
        backgroundColor: Colors.black,
        width: width - 64,
        height: 70,
        borderRadius: 50,
    },
    restartButton: {
        marginTop: 20,
    },
    testResults: {
        marginTop: 8,
        color: Colors.black,
        textAlign: "center",
        fontSize: 48,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    artboard90: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        maxWidth: 150,
        maxHeight: 150,
    },
    sourceUser: {
        marginTop: 8,
        color: Colors.black,
        fontSize: 48,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
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
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    }
});

export default StepsTest;
