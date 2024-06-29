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



const Questions = ({ route, navigation }) => {
    const { category, categoryIndex, selectedSet, indexSet } = route.params;

    console.log("category, categoryIndex, selectedSet, indexSet");

    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [results, setResults] = useState({});

    useEffect(() => {
        // Load questions from JSON file
        setQuestions(Category_1);
        /* 
                if (categoryIndex == 1) {
                    setQuestions(Category_1);
                }
                if (categoryIndex == 2) {
                    setQuestions(Category_2);
                }
                if (categoryIndex == 3) {
                    setQuestions(Category_3);
                }
                if (categoryIndex == 4) {
                    setQuestions(Category_4);
                }
         */
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


    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text style={styles.categoryIndex}>ข้อสอบใบขับขี่หมวดที่ {categoryIndex}</Text>
                <Text style={styles.category1}>{category}</Text>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {questions.map((question, questionIndex) => (
                        <View key={questionIndex} style={styles.questionContainer}>
                            <Text style={styles.questionText}>{question.index}. {question.question}</Text>
                            {question.img && <Image
                                source={question.img}
                                style={styles.imageQue}
                                resizeMode="cover"
                            />}





                            <RadioButton.Group
                                onValueChange={(newValue) => handleSelect(questionIndex, newValue)}
                                value={selectedAnswers[questionIndex]?.enterAnswer}
                            >
                                {question.choices.map((choice, choiceIndex) => {
                                    const choiceLetter = choice.charAt(0);
                                    const isCorrectAnswer = question.answer === choiceLetter;
                                    const isSelectedAnswer = selectedAnswers[questionIndex]?.enterAnswer === choiceLetter;
                                    const isIncorrectSelection = results[questionIndex] === 'incorrect' && isSelectedAnswer;

                                    return (
                                        <Pressable
                                            key={choiceIndex}
                                            style={[
                                                styles.choiceContainer,
                                                isSelectedAnswer && results[questionIndex] === 'correct' ? styles.correctChoice : null,
                                                isIncorrectSelection ? styles.incorrectChoice : null,
                                                results[questionIndex] === 'incorrect' && isCorrectAnswer ? styles.correctAnswer : null
                                            ]}
                                            onPress={() => handleSelect(questionIndex, choiceLetter)}
                                        >
                                            <View style={styles.radioButtonWrapper}>
                                                <RadioButton
                                                    value={choiceLetter}
                                                    status={isSelectedAnswer ? 'checked' : 'unchecked'}
                                                    color={Colors.primary}
                                                />
                                            </View>
                                            <Text style={styles.choiceText}>{choice}</Text>
                                        </Pressable>
                                    );
                                })}
                            </RadioButton.Group>
                        </View>
                    ))}
                    <Pressable style={styles.button} onPress={calculateScore}>
                        <Text style={styles.buttonText}>ตรวจสอบคะแนน</Text>
                    </Pressable>
                    <Text style={styles.scoreText}>คะแนน: {score}</Text>
                </ScrollView>

            </View>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        borderRadius: 6,
        paddingHorizontal: 16,

    },
    questionContainer: {
        marginBottom: 20,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    choiceContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        borderRadius: 8,
        paddingRight: 32,
        paddingVertical: 8
    },
    radioButtonWrapper: {
        backgroundColor: Colors.lightGray,
        borderRadius: 20,
        padding: 5,

    },
    choiceText: {
        fontSize: 16,
        width: '90%', // จำกัดความกว้างสูงสุดของ container
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
        marginLeft: "10%"
    }

});

export default Questions;