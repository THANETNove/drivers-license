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

    console.log("category, categoryIndex, selectedSet, indexSet", indexSet - 1);

    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [results, setResults] = useState({});

    useEffect(() => {
        // Load questions from JSON file


        if (categoryIndex == 1) {
            console.log("11",);

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



    return (
        <ScreenContainer>
            <View style={styles.container}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {questions.map((question, questionIndex) => (

                        <View View key={questionIndex} style={styles.questionContainer} >
                            <View style={styles.boxQuestion}>
                                <Text style={styles.questionText}>{question.index}. {question.question}</Text>


                                {question.img && <Image
                                    source={{ uri: question.img }} // ใช้ source แทน src
                                    style={styles.imageQue}
                                    resizeMode="stretch"
                                />}

                            </View>



                            <RadioButton.Group

                                value={selectedAnswers[questionIndex]?.enterAnswer}
                            >
                                {question.choices.map((choice, choiceIndex) => {
                                    const choiceLetter = ["ก", "ข", "ค", "ง"];
                                    const isCorrectAnswer = question.answer === choiceLetter[choiceIndex];

                                    return (
                                        <View
                                            key={choiceIndex}
                                            style={[
                                                styles.choiceContainer,
                                                { backgroundColor: choiceIndex % 2 === 0 ? '#B16DC0' : '#B77DC7' }
                                            ]}

                                        >
                                            <View style={styles.radioButtonWrapper}>
                                                <RadioButton
                                                    status={isCorrectAnswer ? 'checked' : 'unchecked'}
                                                    color={Colors.green}
                                                    fontSize={64}
                                                />
                                            </View>
                                            <Text style={[styles.choiceText, isCorrectAnswer && { color: Colors.red }]}>{choice}</Text>
                                        </View>
                                    );
                                })}

                            </RadioButton.Group>
                        </View>
                    ))}

                </ScrollView>

            </View >
        </ScreenContainer >
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
    }

});

export default Questions;