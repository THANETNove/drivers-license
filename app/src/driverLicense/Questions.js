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




const Questions = ({ route, navigation }) => {
    const { category, categoryIndex } = route.params;
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Load questions from JSON file
        setQuestions(Category_3);
    }, []);

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);

    const handleSelect = (questionIndex, choiceIndex, choiceLetter) => {
        setSelectedAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionIndex]: {
                selected: choiceIndex,
                correct: questions[questionIndex].answer
            }
        }));
    };

    const calculateScore = () => {
        let newScore = 0;
        Object.keys(selectedAnswers).forEach(index => {
            if (selectedAnswers[index].selected === selectedAnswers[index].correct) {
                newScore += 1;
            }
        });
        setScore(newScore);
    };

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text style={styles.categoryIndex}>ข้อสอบใบขับขี่หมวดที่ {categoryIndex}</Text>
                <Text style={styles.category}>- {category}</Text>

                <ScrollView>
                    {questions.map((question, questionIndex) => (
                        <View key={questionIndex} style={styles.questionContainer}>
                            <Text style={styles.questionText}>{question.index}. {question.question}</Text>
                            <RadioButton.Group
                                onValueChange={(newValue) => handleSelect(questionIndex, newValue)}
                                value={selectedAnswers[questionIndex]?.selected}
                            >
                                {question.choices.map((choice, choiceIndex) => (
                                    <Pressable
                                        key={choiceIndex}
                                        style={styles.choiceContainer}
                                        onPress={() => handleSelect(questionIndex, choiceIndex.toString(), choice.charAt(0))}
                                    >
                                        <View style={styles.radioButtonWrapper}>
                                            <RadioButton
                                                value={choiceIndex.toString()}
                                                color={Colors.primary}
                                            />
                                        </View>
                                        <Text style={styles.choiceText}>{choice}</Text>
                                    </Pressable>
                                ))}
                            </RadioButton.Group>
                        </View>
                    ))}
                </ScrollView>
                <Pressable style={styles.button} onPress={calculateScore}>
                    <Text style={styles.buttonText}>ตรวจสอบคะแนน</Text>
                </Pressable>
                <Text style={styles.scoreText}>คะแนน: {score}</Text>
            </View>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        padding: 16,
        paddingBottom: 50,
        borderRadius: 6,
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
        alignItems: 'center',
        marginBottom: 5,
        padding: 5,
        borderRadius: 20,
    },
    radioButtonWrapper: {
        backgroundColor: Colors.lightGray,
        borderRadius: 20,
        padding: 5,
    },
    choiceText: {
        fontSize: 16,
        marginLeft: 10,
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
    },
    categoryIndex: {
        color: Colors.black,
        fontSize: 20,
    },
    category: {
        color: Colors.black,
        fontSize: 18,
        marginBottom: 16
    },
});

export default Questions;