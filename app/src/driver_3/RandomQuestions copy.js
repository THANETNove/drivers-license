import React, { useEffect, useState } from 'react'
import { Colors } from "@/constants/Colors";
import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable, Modal } from "react-native";
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



const RandomQuestions = ({ route, navigation }) => {


    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // ดัชนีคำถามปัจจุบัน
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [results, setResults] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    useEffect(() => {
        // Function to flatten nested arrays
        const flattenArray = (nestedArray) => {
            let flatArray = [];
            nestedArray.forEach(innerArray => {
                flatArray = flatArray.concat(innerArray);
            });
            return flatArray;
        };

        // Flatten Category_2 if it has nested structure
        let flatCategory1 = Array.isArray(Category_1[0]) ? flattenArray(Category_1) : Category_1;
        let flatCategory2 = Array.isArray(Category_2[0]) ? flattenArray(Category_2) : Category_2;
        let flatCategory3 = Array.isArray(Category_3[0]) ? flattenArray(Category_3) : Category_3;
        let flatCategory4 = Array.isArray(Category_4[0]) ? flattenArray(Category_4) : Category_4;
        let flatCategory5 = Array.isArray(Category_5[0]) ? flattenArray(Category_5) : Category_5;

        const getRandomQuestions = (questionsArray, numberOfQuestions) => {
            const shuffled = questionsArray.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, numberOfQuestions);
        };


        const selectedQuestions = [
            ...getRandomQuestions(flatCategory1, 10),
            ...getRandomQuestions(flatCategory2, 10),
            ...getRandomQuestions(flatCategory3, 10),
            ...getRandomQuestions(flatCategory4, 10),
            ...getRandomQuestions(flatCategory5, 10),
        ];


        setQuestions(selectedQuestions);
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

    // ตรวจสอบว่ามีการเลือกคำตอบครบทุกคำถามหรือไม่
    useEffect(() => {
        const allAnswered = questions.every((question, index) => selectedAnswers[index]?.enterAnswer !== undefined);
        setIsButtonDisabled(!allAnswered);
    }, [selectedAnswers]);




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
                            สุ่มทำข้อสอบ
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
                                {currentQuestion.img && (
                                    <Image
                                        source={{ uri: currentQuestion.img }}
                                        style={styles.imageQue}
                                        resizeMode="stretch"
                                    />
                                )}
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

                                    // คำนวณสไตล์ของตัวเลือก
                                    let choiceStyle = [styles.choiceContainer, { backgroundColor: choiceIndex % 2 === 0 ? '#B16DC0' : '#B77DC7' }];
                                    if (results[currentQuestionIndex] !== undefined) {
                                        if (isSelectedAnswer && results[currentQuestionIndex] === 'correct') {
                                            choiceStyle.push(styles.correctChoice);
                                        } else if (isIncorrectSelection) {
                                            choiceStyle.push(styles.incorrectChoice);
                                        } else if (results[currentQuestionIndex] === 'incorrect' && isCorrectAnswer) {
                                            choiceStyle.push(styles.correctAnswer);
                                        }
                                    }

                                    return (
                                        <Pressable
                                            key={choiceIndex}
                                            style={choiceStyle}
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


                    <Pressable style={[
                        styles.button,
                        !isButtonDisabled ? styles.buttonDisabled : null
                    ]}
                        onPress={calculateScore}
                        disabled={!isButtonDisabled} >
                        <Text style={styles.buttonText}>ตรวจสอบ</Text>
                    </Pressable>


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



    return (
        <ScreenContainer>
            {takeTheExam()}
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
        paddingTop: 6
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
        marginTop: "30%",
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
    },
    correctChoice: {
        backgroundColor: Colors.light_green, // เปลี่ยนเป็น backgroundColor แทน color
    },
    incorrectChoice: {
        backgroundColor: Colors.light_red, // เปลี่ยนเป็น backgroundColor แทน color
    },
    correctAnswer: {
        backgroundColor: Colors.light_green, // เปลี่ยนเป็น backgroundColor แทน color
    },
    // เพิ่มสไตล์สำหรับคำตอบที่ถูกต้องแต่ไม่ได้เลือก (สีขาว)
    correctAnswerUnselected: {
        backgroundColor: '#ffffff', // สีขาวสำหรับคำตอบที่ถูกต้องที่ไม่ได้เลือก
    },
    buttonDisabled: {
        backgroundColor: '#cccccc', // สีเทาเมื่อปุ่มปิดการใช้งาน
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalQuestionContainer: {
        marginBottom: 10,
    },
    modalQuestionText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalAnswerText: {
        fontSize: 16,
    },
    correctAnswerText: {
        color: Colors.light_green,
    },
    incorrectAnswerText: {
        color: Colors.light_red,
    },
    closeButton: {
        marginTop: 0,
        backgroundColor: '#6200ee',
        padding: 10,
        borderRadius: 5,
        marginBottom: 100
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },



});

export default RandomQuestions;
