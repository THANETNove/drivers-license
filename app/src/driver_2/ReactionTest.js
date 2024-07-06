import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, ScrollView, Animated, Pressable } from 'react-native';
import ScreenContainer from "../NavigationProvider"; // Adjust the path as needed
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Colors } from '@/constants/Colors';
import Artboard28 from "../../../assets/images/coverImg/Artboard-28.png";
import Artboard29 from "../../../assets/images/coverImg/Artboard-29.png";
import Artboard30 from "../../../assets/images/coverImg/Artboard-30.png";
import Previous from "../../../assets/images/coverImg/Artboard63.png";
import Next from "../../../assets/images/coverImg/Artboard64.png";
import Artboard90 from "../../../assets/images/coverImg/Artboard90.png";

const ReactionTest = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [score, setScore] = useState(0); // For counting score
    const [attempts, setAttempts] = useState(0); // For counting attempts
    const [attemptResults, setAttemptResults] = useState(Array(3).fill(null)); // Initialize with 3 elements
    const [isFinished, setIsFinished] = useState(false); // To check if the process is finished
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 16;
    const [isPaused, setIsPaused] = useState(false); // To manage the stop condition
    const [animationRuns, setAnimationRuns] = useState(0); // Track number of animation runs
    const [canStop, setCanStop] = useState(false); // To allow stopping the animation
    const [stopButtonColor, setStopButtonColor] = useState("grey"); // Button color
    const animation = useRef(new Animated.Value(0)).current;
    const [stepsImg, setStepsImg] = useState(0);
    const [stepsImgCountdown, setStepsImgCountdown] = useState(false);
    const animationIntervalRef = useRef(null);

    useEffect(() => {
        if (!isPaused) {
            Animated.timing(animation, {
                toValue: currentPage,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [currentPage, isPaused]);

    useEffect(() => {
        if (currentPage > 7) {
            setStopButtonColor("red"); // Change to red when currentPage > 7
        }
    }, [currentPage, canStop]);

    const startAnimation = () => {
        setStopButtonColor("green")
        // Clear any existing interval
        if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
        }

        // Reset currentPage to 0
        setCurrentPage(0);
        animation.setValue(0); // Reset the animated value

        setIsPaused(false); // Reset pause state
        setCanStop(true); // Allow stopping the animation

        let page = 0;
        animationIntervalRef.current = setInterval(() => {
            setCurrentPage(page);
            page += 1;
            if (page > totalPages) {
                clearInterval(animationIntervalRef.current);
            }
        }, 200); // Adjust the interval as needed
    };

    const stopAnimation = () => {
        if (!canStop) return; // Prevent stopping the animation if not allowed

        setIsPaused(true);
        clearInterval(animationIntervalRef.current); // Stop the interval

        setAnimationRuns(prevRuns => {
            const newRunCount = prevRuns + 1;
            if (newRunCount >= 3) {
                setIsFinished(true); // Show scoreSteps after 3 runs
            }
            return newRunCount;
        });

        const newAttemptResults = [...attemptResults];
        if (currentPage < 10) {
            setScore(prevScore => prevScore + 1);
            newAttemptResults[attempts] = 'correct';
        } else {
            newAttemptResults[attempts] = 'incorrect';
        }
        setAttemptResults(newAttemptResults);
        setAttempts(prevAttempts => prevAttempts + 1);
        setCanStop(false); // Disable stopping until next start
    };

    const resetGame = () => {
        setAnimationRuns(0);
        setAttempts(0);
        setAttemptResults(Array(3).fill(null));
        setIsFinished(false);
        setScore(0);
    };


    const images = [
        require('../../../assets/images/coverImg/2_1.png'),
        require('../../../assets/images/coverImg/2_2.png'),
        require('../../../assets/images/coverImg/2_3.png'), // Ensure this path is correct
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
                    <Text style={styles.sourceUser}>{score} / 3</Text>
                    {score >= 2 ? <Text style={styles.sourceUser}>ผ่านการทดสอบ</Text> : <Text style={styles.sourceUser}>ไม่ผ่านการทดสอบ</Text>}

                    <View style={styles.buttonContainer2}>
                        <View style={styles.boxBack}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Text style={styles.textBack}>กลับสู่เมนู</Text>
                            </Pressable>
                        </View>
                        <View style={styles.boxBack}>
                            <Pressable onPress={resetGame}>
                                <Text style={styles.textBack}>ทดสอบใหม่</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScreenContainer>
        );
    };

    const testSteps = () => {
        return (
            <ScreenContainer style={styles.container}>
                <View style={styles.boxCenter}>
                    <Image
                        source={Artboard28}
                        style={styles.artboard28}
                        resizeMode="stretch"
                    />
                    <View
                        style={stopButtonColor == "green" ? styles.boxGreen : stopButtonColor == "red" && styles.boxRed}
                    />


                    <View style={styles.resultsContainer}>
                        {attemptResults.map((result, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.resultBox,
                                    {
                                        backgroundColor: result === 'correct' ? 'green' : result === 'incorrect' ? 'red' : 'white',
                                    }
                                ]}
                            />
                        ))}
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={stopAnimation}>
                            {/*  <Text style={styles.buttonText}>Start</Text> */}
                            <Image
                                source={Artboard29}
                                style={styles.artboard29}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={startAnimation} >
                            <Image
                                source={Artboard30}
                                style={styles.artboard30}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.dotsContainer}>
                    {Array.from({ length: totalPages }).reverse().map((_, index) => {
                        const scale = animation.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0, 1, 1],
                            /* outputRange: [1, 0, 0], */
                            extrapolate: 'clamp',
                        });

                        const backgroundColor = index < 10 ? '#90EE90' : '#FF6347';

                        return (
                            <Animated.View
                                key={index}
                                style={[
                                    styles.dot,
                                    /*    { transform: [{ scale }], backgroundColor }, */
                                    { transform: [{ scale }], backgroundColor },
                                ]}
                            />
                        );
                    }).reverse()}
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
            {/*   {isFinished ? scoreSteps() : testSteps()} */}
            {!stepsImgCountdown ? imageSteps() : isFinished ? scoreSteps() : testSteps()}
        </View>
    );
};

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
        width: 250,
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
        width: width - 16,
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
        marginTop: 32,
        width: "100%",
        marginBottom: 32
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
        fontFamily: 'SukhumvitSet-Bold', // Use the loaded font
    },
    artboard90: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        maxWidth: 150,
        maxHeight: 150,
    },
    sourceUser: {
        marginTop: 16,
        color: Colors.black,
        fontSize: 48,
        fontFamily: 'SukhumvitSet-Bold', // Use the loaded font
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
        fontFamily: 'SukhumvitSet-Bold', // Use the loaded font
    },
    artboard29: {
        width: 150,
        height: 120
    },
    artboard30: {
        width: 150,
        height: 220
    },
    dotsContainer: {
        position: "absolute",
        marginTop: 65,
        marginLeft: "36%",
        flexDirection: "column",
        justifyContent: 'center',
        zIndex: 1
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 50,
        marginVertical: 1
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 20,
    },
    button: {
        backgroundColor: Colors.primary2,
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        textAlign: 'center',
    },
    resultsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,

    },
    resultBox: {
        width: 30,
        height: 30,
        margin: 5,
        borderRadius: 5,
        borderColor: Colors.red,
        borderWidth: 1,
    },
    artboard28: {
        width: 250,
        height: 350,
        zIndex: 0
    },
    boxRed: {
        width: 50,
        height: 50,
        zIndex: 2,
        position: "absolute",
        backgroundColor: Colors.red,
        marginTop: 82,
        right: "31%",
        borderRadius: 50,
    },
    boxGreen: {
        width: 50,
        height: 50,
        zIndex: 2,
        position: "absolute",
        backgroundColor: "#90EE90",
        marginTop: 200,
        right: "31%",
        borderRadius: 50,
    }
});

export default ReactionTest;
