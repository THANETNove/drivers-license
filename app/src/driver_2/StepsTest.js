import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, Button, Alert, Animated, Pressable } from 'react-native';
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import Artboard6 from "../../../assets/images/coverImg/Artboard6.png";
import Artboard6_1 from "../../../assets/images/coverImg/Artboard6_1.png";
import Artboard6_2 from "../../../assets/images/coverImg/Artboard6_2.png";
import Artboard6_3 from "../../../assets/images/coverImg/Artboard6_3.png";
import { Colors } from '@/constants/Colors';

const StepsTest = () => {
    const [randomImage, setRandomImage] = useState(null);
    const [buttonIndex, setButtonIndex] = useState(null);
    const [score, setScore] = useState(0); // สำหรับนับคะแนน
    const [attempts, setAttempts] = useState(1); // สำหรับนับจำนวนครั้งที่สุ่ม
    const [countdown, setCountdown] = useState(5); // เวลานับถอยหลัง (5 วินาที)
    const [attemptResults, setAttemptResults] = useState(Array(5).fill(null)); // Initialize with 5 elements
    const [buttonPressed, setButtonPressed] = useState(false); // สำหรับตรวจสอบว่ากดปุ่มแล้วหรือยัง
    const [isFinished, setIsFinished] = useState(false); // สำหรับตรวจสอบว่ากระบวนการเสร็จสิ้นหรือไม่
    const attemptsIntervalRef = useRef(null);
    const countdownIntervalRef = useRef(null);

    const progressAnim = useRef(new Animated.Value(0)).current;

    const imagesRandom = [
        { source: Artboard6_1, id: 1 },
        { source: Artboard6_2, id: 2 },
        { source: Artboard6_3, id: 3 },
    ];

    const getRandomImage = () => {
        const filteredImages = imagesRandom.filter(image => randomImage ? image.id !== randomImage.id : true);
        const randomIndex = Math.floor(Math.random() * filteredImages.length);
        setRandomImage(filteredImages[randomIndex]);
        setButtonIndex(filteredImages[randomIndex].id); // เก็บ id ของภาพที่สุ่มได้
    };

    useEffect(() => {
        getRandomImage();
        countdownIntervalRef.current = setInterval(() => {
            setCountdown(prev => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    // Update attempts when countdown reaches 0
                    setAttempts(attempts => {
                        if (attempts < 5) {
                            setButtonPressed(false); // Reset button press state for the new attempt
                            getRandomImage();
                            return attempts + 1;
                        } else {
                            clearInterval(countdownIntervalRef.current);
                            setIsFinished(true); // Mark the process as finished
                            return attempts;
                        }
                    });
                    return 5; // Reset countdown to 5
                }
            });
        }, 1000);

        return () => {
            clearInterval(countdownIntervalRef.current);
        };
    }, []);

    useEffect(() => {
        // ทำ Progress Bar เคลื่อนที่
        Animated.timing(progressAnim, {
            toValue: countdown,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [countdown]);

    const handleButtonPress = (index) => {
        if (!buttonPressed) {
            const isCorrect = index === buttonIndex;
            setScore(prev => prev + (isCorrect ? 1 : 0));
            setAttemptResults(prev => {
                const updatedResults = [...prev];
                updatedResults[attempts - 1] = isCorrect ? 'correct' : 'incorrect';
                return updatedResults;
            });
            setButtonPressed(true); // Mark the button as pressed for the current attempt
        }
    };

    const testSteps = () => {
        return (
            <ScreenContainer>
                <View style={styles.boxCenter}>
                    <Image
                        source={Artboard6}
                        style={styles.artboard6}
                        resizeMode="stretch"
                    />
                    {randomImage && (
                        <Image
                            source={randomImage.source}
                            style={randomImage.id === 1 ? styles.artboard6_1 : randomImage.id === 2 ? styles.artboard6_2 : styles.artboard6_3}
                            resizeMode="stretch"
                        />
                    )}
                    <Text style={{ fontSize: 20, color: "#FFF", marginTop: 32 }}>{`ครั้งที่สุ่ม: ${attempts}/5`}</Text>
                    <View style={styles.attemptsContainer}>
                        {attemptResults.map((result, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.attemptBox,
                                    {
                                        backgroundColor: result === 'correct' ? 'green' : result === 'incorrect' ? 'red' : 'transparent',
                                        borderColor: 'red',
                                        borderWidth: 2
                                    }
                                ]}
                            >

                            </View>
                        ))}
                    </View>
                    <View style={styles.progressContainer}>
                        <Text style={{ color: Colors.white }}>สุ่มภาพใหม่ใน {countdown} วินาที</Text>
                        <Animated.View
                            style={[
                                styles.progressBar,
                                {
                                    width: progressAnim.interpolate({
                                        inputRange: [0, 5],
                                        outputRange: ['0%', '100%']
                                    })
                                },
                            ]}
                        />
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
                    {isFinished && (
                        <Text style={{ fontSize: 20, color: 'yellow', marginTop: 20 }}>
                            กระบวนการเสร็จสิ้นแล้ว
                        </Text>
                    )}
                </View>
            </ScreenContainer>
        );
    };

    return (
        <View style={styles.container}>
            {testSteps()}
        </View>
    );
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxCenter: {
        flex: 1,
        marginTop: 32,
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
    }
});

export default StepsTest;
