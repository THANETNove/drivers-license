import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper'; // You can use any library for radio buttons
import ScreenContainer from "../NavigationProvider"; // Adjust the path accordingly
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import Previous from "../../../assets/images/coverImg/Artboard63.png";
import Next from "../../../assets/images/coverImg/Artboard64.png";
import { useRewardedAd } from '../useRewardedAd'; // นำเข้า useRewardedAd


const ColorBlindnessTest = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [summaryStep, setSummaryStep] = useState(0);
    const [stepsImg, setStepsImg] = useState(0);
    const [stepsImgCountdown, setStepsImgCountdown] = useState(false);
    const { showAd, loaded, loadedPlay, resetLoadedPlay } = useRewardedAd();



    const images = [
        require('../../../assets/images/coverImg/4_1.png'),
        require('../../../assets/images/coverImg/4_2.png'),
        require('../../../assets/images/coverImg/4_3.png'), // Ensure this path is correct
    ];


    const steps = [
        {
            step: 1,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 3', 'หมายเลข 5', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard3.png'), // Ensure the path to your image is correct
            correctAnswer: '3',
            answerText: "ตาปกติจะอ่านได้หมายเลข 3 ตาบอดสีเเดง-เขียวจะอ่านได้หมายเลข 5 ตาบอดสีจะไม่สามารถอ่านได้"
        },
        {
            step: 2,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 11', 'หมายเลข 7', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard7.png'), // Ensure the path to your image is correct
            correctAnswer: '7',
            answerText: "ตาปกติจะอ่านได้หมายเลข 7  ตาบอดสีจะไม่สามารถอ่านได้"
        },
        {
            step: 3,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 7', 'หมายเลข 12', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard12.png'), // Ensure the path to your image is correct
            correctAnswer: '12',
            answerText: "ตาปกติเเละตาบอดสีจะอ่านได้หมายเลข 12"
        },
        {
            step: 4,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 29', 'หมายเลข 70', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard29.png'), // Ensure the path to your image is correct
            correctAnswer: '29',
            answerText: "ตาปกติจะอ่านได้หมายเลข 29 ตาบอดสีเเดง-เขียวจะอ่านได้หมายเลข 70 ตาบอดสีจะไม่สามารถอ่านได้"
        },
        {
            step: 5,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 24', 'หมายเลข 42', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard42.png'), // Ensure the path to your image is correct
            correctAnswer: '42',
            answerText: "ตาปกติจะอ่านได้หมายเลข 42 ตาบอดสีจะไม่สามารถอ่านได้"
        },
        {
            step: 6,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 45', 'หมายเลข 54', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard45.png'), // Ensure the path to your image is correct
            correctAnswer: '45',
            answerText: "ตาปกติจะอ่านได้หมายเลข 45  ตาบอดสีจะไม่สามารถอ่านได้"
        },
        {
            step: 7,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 37', 'หมายเลข 73', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard73.png'), // Ensure the path to your image is correct
            correctAnswer: '73',
            answerText: "ตาปกติจะอ่านได้หมายเลข 73 ตาบอดสีจะไม่สามารถอ่านได้"
        },
        {
            step: 8,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 74', 'หมายเลข 21', 'ไม่เห็นอะไร'],
            image: require('../../../assets/images/colorBlindness/Artboard74.png'), // Ensure the path to your image is correct
            correctAnswer: '74',
            answerText: "ตาปกติจะอ่านได้หมายเลข 74 ตาบอดสีเเดง-เขียวจะอ่านได้หมายเลข 21 ตาบอดสีจะไม่สามารถอ่านได้"
        },
        {
            step: 9,
            question: 'คุณเห็นอะไรในวงกลม',
            options: ['หมายเลข 45', 'หมายเลข 54', 'ไม่เห็นตัวเลข'],
            image: require('../../../assets/images/colorBlindness/Artboard77.png'), // Ensure the path to your image is correct
            correctAnswer: 'ไม่เห็นตัวเลข',
            answerText: "ตาปกติจะอ่านไม่สามารถอ่านเป็นตัวเลขได้ ตาบอดสีเเดง-เขียวจะอ่านได้หมายเลข 45 ตาบอดสีจะไม่สามารถอ่านเป็นตัวเลขได้"
        },
        {
            step: 10,
            question: 'คุณสามารถลากเส้น x ไป x ได้หรือไม่',
            options: ['ได้', 'ไม่ได้', 'ไม่เห็นเส้น'],
            image: require('../../../assets/images/colorBlindness/Artboard79.png'), // Ensure the path to your image is correct
            correctAnswer: 'ไม่เห็นเส้น',
            answerText: "ตาปกติสามารถลากเส้นตามสีส้มจาก x ไป x ได้  ตาบอดสีไม่สามารถลากเส้นตามสีส้มจาก x ไป x ได้ หรือ ลากได้คนละเส้นทาง"
        },
        // Add more steps as needed
    ];

    const handleSelect = (step, value) => {
        setAnswers({ ...answers, [step]: value });
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
        setSummaryStep(0); // Start summary from the first step
    };

    const handleNextSummary = () => {
        if (summaryStep < steps.length - 1) {
            setSummaryStep(summaryStep + 1);
        } else {
            // Optional: Handle end of summary, e.g., navigate back to home or restart test
        }
    };


    const handleNextText = () => {
        if (stepsImg < images.length - 1) {
            setStepsImg(stepsImg + 1);
        }
    };

    const handlePreviousText = () => {
        if (stepsImg > 0) {
            setStepsImg(stepsImg - 1);
        }
    };

    const imgCount = () => {
        setStepsImgCountdown(true);
    }


    const imageSteps = () => {
        return (
            <>
                <View style={{ flex: 1 }}>
                    {images.map((img, index) => (
                        <View key={index} style={stepsImg === index ? styles.imageContainer : styles.hidden}>
                            {stepsImg === index && (
                                <Pressable onPress={() => stepsImg == 2 && imgCount()}>
                                    <Image
                                        source={img}
                                        style={styles.imageSteps2}
                                        resizeMode="stretch"
                                    />
                                </Pressable>
                            )}
                        </View>
                    ))}
                </View>
                <View style={styles.buttonContainerImg}>
                    <TouchableOpacity onPress={handlePreviousText} disabled={stepsImg === 0}>
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
                    <TouchableOpacity onPress={handleNextText} disabled={stepsImg === images.length - 1}>
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



    const blindTest = () => {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {!submitted ? (
                    <View style={styles.stepContainer}>
                        <Text style={styles.title}>{steps[currentStep].question}</Text>
                        <Image source={steps[currentStep].image} style={styles.image} />
                        <View style={styles.boxCenter}>
                            {steps[currentStep].options.map((option, index) => (
                                <View key={index} style={styles.optionContainer}>
                                    <RadioButton
                                        value={option}
                                        status={answers[steps[currentStep].step] === option ? 'checked' : 'unchecked'}
                                        onPress={() => handleSelect(steps[currentStep].step, option)}
                                        color={answers[steps[currentStep].step] === option ? 'green' : 'black'}
                                    />
                                    <Text style={styles.optionText}>{option}</Text>
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity
                            style={[styles.button, !answers[steps[currentStep]?.step] && styles.buttonDisabled]}
                            /*    onPress={handleNext} */

                            onPress={() => {
                                if (currentStep < steps.length - 1) {
                                    handleNext();
                                } else {
                                    if (loadedPlay) {
                                        showAd();
                                    } else {
                                        handleNext();
                                    }


                                }
                            }}

                        /*  disabled={!answers[steps[currentStep]?.step]} */
                        >
                            <Text style={styles.buttonText}>{currentStep < steps.length - 1 ? 'ข้อถัดไป' : 'Submit'}</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.stepContainer2}>
                        <Text style={styles.title}>{steps[summaryStep].question}</Text>
                        <Image source={steps[summaryStep].image} style={styles.image} />
                        <Text style={styles.title}>คำตอบของคุณคือ: {answers[steps[summaryStep].step]}</Text>
                        <Text style={styles.answerText}>{steps[summaryStep].answerText}</Text>
                        <TouchableOpacity
                            style={[summaryStep < steps.length - 1 ? styles.button : styles.buttonDisabled2]}
                            onPress={handleNextSummary}
                        >
                            <Text style={styles.buttonText}>{summaryStep < steps.length - 1 ? 'ข้อถัดไป' : 'End'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.buttonText}>กลับสู่เมนู</Text>
                        </TouchableOpacity>
                    </View>
                )
                }
            </ScrollView >
        )
    }

    return (
        <ScreenContainer>
            {stepsImgCountdown ? blindTest() : imageSteps()}
        </ScreenContainer>
    );
};
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
    },
    boxCenter: {

        marginLeft: "26%"

    },
    stepContainer: {

        marginTop: 32,
        width: '100%',
        marginBottom: 20,
    },
    stepContainer2: {

        marginTop: 0,
        width: '100%',
        marginBottom: 20,
    },
    title: {
        textAlign: "center",
        marginVertical: 16,
        fontSize: 24,
        fontFamily: 'SukhumvitSet-Bold', // Use the loaded font
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        marginBottom: 10,
    },
    optionContainer: {
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionText: {
        marginLeft: 8,
        fontSize: 20,
        fontFamily: 'SukhumvitSet-Bold', // Use the loaded font
    },
    answerText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'SukhumvitSet-Bold', // Use the loaded font
    },
    button: {
        marginTop: 48,
        padding: 10,
        backgroundColor: 'orange',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8
    },
    button2: {
        marginTop: 16,
        padding: 10,
        backgroundColor: 'orange',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8
    },
    buttonDisabled2: {
        marginTop: 16,
        padding: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8
    },
    buttonDisabled: {
        backgroundColor: 'gray',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'SukhumvitSet-Bold', // Use the loaded font
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
    buttonImage: {
        marginHorizontal: 16,
        marginVertical: 8,
        width: 50,
        height: 50,
    },
    disabledButton: {
        opacity: 0.5,
    },
    imageSteps2: {
        width: "100%",
        height: "100%"
    }
});

export default ColorBlindnessTest;
