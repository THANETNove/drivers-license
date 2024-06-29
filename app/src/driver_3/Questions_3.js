import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import Category_1 from '../questionsCategory/category_1.json'; // ปรับเส้นทางให้ถูกต้อง
import Category_2 from '../questionsCategory/category_2.json'; // ปรับเส้นทางให้ถูกต้อง
import Category_3 from '../questionsCategory/category_3.json'; // ปรับเส้นทางให้ถูกต้อง
import Category_4 from '../questionsCategory/category_4.json'; // ปรับเส้นทางให้ถูกต้อง
import Category_5 from '../questionsCategory/category_5.json'; // ปรับเส้นทางให้ถูกต้อง
import Previous from "../../../assets/images/coverImg/Artboard63.png";
import Next from "../../../assets/images/coverImg/Artboard64.png";
import Artboard90 from "../../../assets/images/coverImg/Artboard90.png";


const Questions_3 = ({ route, navigation }) => {
    const { category, categoryIndex, selectedSet, indexSet } = route.params;

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // ดัชนีคำถามปัจจุบัน
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [results, setResults] = useState({});
    const [statusTakeTheExam, setStatusTakeTheExam] = useState(true);

    useEffect(() => {
        // Load questions from JSON file
        if (categoryIndex == 1) {
            setQuestions(Category_1[indexSet - 1]);
        }
        if (categoryIndex == 2) {
            setQuestions(Category_2[indexSet - 1]);
        }
        if (categoryIndex == 3) {
            setQuestions(Category_3[indexSet - 1]);
        }
        if (categoryIndex == 4) {
            setQuestions(Category_4[indexSet - 1]);
        }
        if (categoryIndex == 5) {
            setQuestions(Category_5[indexSet - 1]);
        }
    }, []);

    const handleSelect = (questionIndex, choiceLetter) => {
        setSelectedAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionIndex]: {
                index: questions[questionIndex].index,
                enterAnswer: choiceLetter,
            }
        }));
    };

    const calculateScore = () => {
        let newScore = 0;
        const newResults = {};
        questions.forEach((question, questionIndex) => {
            const userAnswer = selectedAnswers[questionIndex];
            if (userAnswer) {
                if (userAnswer.enterAnswer === question.answer) {
                    newScore += 1;
                    newResults[questionIndex] = 'correct';
                } else {
                    newResults[questionIndex] = 'incorrect';
                }
            } else {
                newResults[questionIndex] = 'unanswered';
            }
        });
        setScore(newScore);
        setResults(newResults);
        setStatusTakeTheExam(false)
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];


    const resetGame = () => {

        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setScore(0);
        setStatusTakeTheExam(true);

    }


    const takeTheExam = () => {
        return (
            <View style={styles.container}>

                <View style={styles.boxHead}>
                    <Image
                        source={Artboard90} // ใช้ source แทน src
                        style={{ width: 120, height: 120, marginTop: -16 }}
                        resizeMode="stretch"
                    />
                    <View style={styles.boxHeadText}>
                        <Text style={styles.headText1}>
                            ทำข้อสอบ
                        </Text>
                        <Text style={styles.headText2}>
                            {currentQuestionIndex + 1}/{questions.length}
                        </Text>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {currentQuestion && (
                        <View style={styles.questionContainer}>
                            <View style={styles.boxQuestion}>
                                <Text style={styles.questionText}>{currentQuestion.index}. {currentQuestion.question}</Text>
                                {currentQuestion.img && <Image
                                    source={{ uri: currentQuestion.img }} // ใช้ source แทน src
                                    style={styles.imageQue}
                                    resizeMode="stretch"
                                />}

                            </View>

                            <RadioButton.Group
                                onValueChange={(newValue) => handleSelect(currentQuestionIndex, newValue)}
                                value={selectedAnswers[currentQuestionIndex]?.enterAnswer}
                            >
                                {currentQuestion.choices.map((choice, choiceIndex) => {
                                    const choiceLetter = choice.charAt(0);
                                    const isCorrectAnswer = currentQuestion.answer === choiceLetter;
                                    const isSelectedAnswer = selectedAnswers[currentQuestionIndex]?.enterAnswer === choiceLetter;
                                    const isIncorrectSelection = results[currentQuestionIndex] === 'incorrect' && isSelectedAnswer;
                                    return (
                                        <Pressable
                                            key={choiceIndex}
                                            style={[
                                                styles.choiceContainer,
                                                isSelectedAnswer && results[currentQuestionIndex] === 'correct' ? styles.correctChoice : null,
                                                isIncorrectSelection ? styles.incorrectChoice : null,
                                                results[currentQuestionIndex] === 'incorrect' && isCorrectAnswer ? styles.correctAnswer : null,
                                                { backgroundColor: choiceIndex % 2 === 0 ? '#B16DC0' : '#B77DC7' }
                                            ]}
                                        >
                                            <View style={styles.radioButtonWrapper}>
                                                <RadioButton
                                                    value={choiceLetter}
                                                    status={isSelectedAnswer ? 'checked' : 'unchecked'}
                                                    color={Colors.green}
                                                    fontSize={64}
                                                />
                                            </View>
                                            <Text style={styles.choiceText}>{choice}</Text>
                                        </Pressable>
                                    );
                                })}
                            </RadioButton.Group>
                        </View>
                    )}

                    {
                        currentQuestionIndex === questions.length - 1 &&
                        <Pressable style={styles.button} onPress={calculateScore}>
                            <Text style={styles.buttonText}>ตรวจสอบคะแนน</Text>
                        </Pressable>
                    }


                </ScrollView>

                <View style={styles.navigationButtons}>
                    <Pressable
                        style={[styles.navButton, currentQuestionIndex === 0 ? styles.disabledButton : null]}
                        onPress={goToPreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                    >
                        <Image
                            source={Previous} // ภาพปุ่ม Previous
                            style={[
                                styles.buttonImage,
                                currentQuestionIndex === 0 && styles.disabledButton // ถ้าปุ่มถูกปิดการทำงาน (disabled) ใช้สไตล์นี้
                            ]}
                        />
                    </Pressable>

                    <Pressable
                        style={[styles.navButton, currentQuestionIndex === questions.length - 1 ? styles.disabledButton : null]}
                        onPress={goToNextQuestion}
                        disabled={currentQuestionIndex === questions.length - 1}
                    >
                        {
                            <Image
                                source={Next} // ภาพปุ่ม Previous
                                style={[
                                    styles.buttonImage,
                                    currentQuestionIndex === questions.length - 1 && styles.disabledButton // ถ้าปุ่มถูกปิดการทำงาน (disabled) ใช้สไตล์นี้
                                ]}
                            />}
                    </Pressable>


                </View>
            </View>
        )
    }

    const scoreSteps = () => {
        return (
            <View>
                <View style={styles.boxHead2}>
                    <Image
                        source={Artboard90} // ใช้ source แทน src
                        style={{ width: 180, height: 180, marginTop: -16 }}
                        resizeMode="stretch"
                    />

                </View>
                <View style={styles.scoreBox}>
                    <Text style={styles.scoreName}>คะเเนนของคุณคือ</Text>
                    <Text style={styles.scoreNumber}>{score}/{questions.length}</Text>
                </View>
                <View style={styles.attemptsContainer2}>
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
        )
    }

    return (
        <ScreenContainer>
            {statusTakeTheExam ? takeTheExam() : scoreSteps()}
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 6,
        paddingHorizontal: 4,
    },
    questionContainer: {
        marginBottom: 8,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    choiceContainer: {
        flexDirection: 'row',
        paddingRight: 32,
        paddingTop: 8
    },
    radioButtonWrapper: {
        backgroundColor: Colors.white,
        borderRadius: 2,
        marginRight: 16,
        marginLeft: 8,
        marginBottom: 8,
        height: 35
    },
    choiceText: {
        fontSize: 16,
        width: '90%', // จำกัดความกว้างสูงสุดของ container
        paddingBottom: 8
    },
    button: {
        marginTop: 20,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
    },
    correctChoice: {
        backgroundColor: Colors.light_green, // สีเขียวอ่อน
    },
    incorrectChoice: {
        backgroundColor: Colors.light_red, // สีแดงอ่อน
    },
    correctAnswer: {
        backgroundColor: Colors.light_green, // สีเขียวอ่อน
    },
    scoreText: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 150
    },
    categoryIndex: {
        color: Colors.black,
        fontSize: 20,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    category1: {
        color: Colors.black,
        fontSize: 18,
        marginBottom: 16,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    imageQue: {
        width: 100,
        height: 100,
        marginVertical: 16
    },
    boxQuestion: {
        paddingHorizontal: 8,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "#A45DB6"
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    navButton: {
        /*      backgroundColor: Colors.primary, */
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    navButtonText: {
        color: Colors.white,
        fontSize: 18,
    },
    disabledButton: {
        backgroundColor: '#aaa',
    },
    questionCounter: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
    },
    buttonImage: {
        width: 50, // กำหนดขนาดภาพปุ่ม
        height: 50,
    },
    disabledButton: {
        opacity: 0.5,
    },
    boxHead: {
        flexDirection: "row",
        paddingTop: 16,
        paddingLeft: 16,
        backgroundColor: Colors.primary,
        width: "100%",
        height: 120,
        marginBottom: 8,
        marginTop: 8,
    },
    boxHeadText: {
        marginLeft: 40
    },
    headText1: {
        fontSize: 28,
        color: Colors.white,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    headText2: {
        color: Colors.white,
        fontSize: 28,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
        textAlign: "center"
    },
    boxHead2: {
        flexDirection: "row",
        paddingTop: 16,
        paddingLeft: 16,
        backgroundColor: Colors.primary,
        width: "100%",
        height: 120,
        marginBottom: 8,
        marginTop: 8,
        justifyContent: "center",

    },
    scoreBox: {
        marginTop: "35%",
        justifyContent: "center",
        alignItems: "center"
    },
    scoreName: {
        color: Colors.black,
        fontSize: 48,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    scoreNumber: {
        color: Colors.green,
        fontSize: 48,
        fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
    },
    attemptsContainer2: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 84,
        width: "100%",
        marginBottom: 32
    },
    boxBack: {
        width: 180,
        height: 80,
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

export default Questions_3;
