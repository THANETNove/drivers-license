import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // ใช้ useNavigation จาก react-navigation
import { Colors } from "@/constants/Colors"; // ปรับเส้นทางตามที่ถูกต้อง
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง

const Examination = () => {
    const navigation = useNavigation();

    // ปรับโครงสร้างของปุ่มให้ sets เป็น array
    const categories = [
        { text: 'ข้อสอบใบขับขี่หมวดที่ 1', category: 'กฎหมายว่าด้วยจราจรทางบก', categoryIndex: 1, sets: ["ชุดที่1", "ชุดที่2"] },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 2', category: 'กฎหมายว่าด้วยรถยนต์', categoryIndex: 2, sets: ["ชุดที่1", "ชุดที่2"] },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 3', category: 'การบำรุงรักษารถ', categoryIndex: 3, sets: ["ชุดที่1", "ชุดที่2", "ชุดที่3"] },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 4', category: 'หมวดเครื่องหมายจราจร', categoryIndex: 4, sets: ["ชุดที่1", "ชุดที่2", "ชุดที่3", "ชุดที่4"] },
        { text: 'ข้อสอบใบขับขี่หมวดที่ 5', category: 'หมวดมารยาทและจิตสำนึก', categoryIndex: 5, sets: ["ชุดที่1", "ชุดที่2"] },
    ];

    return (
        <ScreenContainer>

            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {categories && categories.map((categoric, index) => (
                    <View key={index} style={styles.buttonWrapper}>
                        {/* ปุ่มหลักสำหรับแต่ละหมวดหมู่ */}
                        <Pressable
                            onPress={() => navigation.navigate('Category', {
                                category: categoric.category,
                                categoryIndex: categoric.categoryIndex,
                            })}
                        >
                            <LinearGradient
                                colors={['#8B317E', '#662D91']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.button}
                            >
                                <View style={styles.buttonContent}>
                                    <Text style={styles.buttonText}>{categoric.category}</Text>

                                </View>
                            </LinearGradient>
                        </Pressable>

                        {/* รายการ "ชุด" สำหรับแต่ละหมวดหมู่ */}
                        <View style={styles.setsContainer}>
                            {categoric.sets.map((set, setIndex) => (
                                <View style={styles.boxSet}>
                                    <Pressable
                                        key={setIndex}
                                        onPress={() => navigation.navigate('Questions', {
                                            category: categoric.category,
                                            categoryIndex: categoric.categoryIndex,
                                            selectedSet: set,
                                            indexSet: setIndex + 1
                                        })}
                                    >

                                        <View style={styles.categorySet}>
                                            <Text style={styles.setButtonText}>{categoric.category}</Text>
                                            <View style={styles.setBox}>
                                                <Text style={styles.setButtonText2}>{set}</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>

                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>

        </ScreenContainer>
    );
};
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 50,
        borderRadius: 6,
    },
    scrollViewContent: {
        paddingVertical: 10,
    },
    buttonWrapper: {
        marginBottom: 4,
    },
    button: {
        width: width - 64,
        height: 70,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: 'SukhumvitSet-Bold',
    },
    buttonContent: {
        alignItems: 'center',
    },
    categoryText: {
        color: Colors.white,
        fontSize: 14,
    },
    setsContainer: {
        flexDirection: "column",


    },
    setButton: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 25,
        margin: 5,
        minWidth: 100,
        alignItems: 'center',
    },
    setButtonText: {
        color: Colors.black,
        fontSize: 14,
        paddingLeft: 16,
        fontFamily: 'SukhumvitSet-Bold',
    },
    setButtonText2: {
        color: Colors.white,
        fontSize: 14,
        paddingLeft: 16,
        fontFamily: 'SukhumvitSet-Bold',
    },
    boxSet: {
        zIndex: 0,
        backgroundColor: Colors.white,
        borderColor: Colors.primary2,
        borderWidth: 1,
        width: "100%",
        marginBottom: 4,

    },
    categorySet: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    setBox: {
        paddingVertical: 8,
        width: 70,
        height: "100%",
        backgroundColor: Colors.primary2,
        marginVertical: 0,


    }
});

export default Examination;