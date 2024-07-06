import React from "react";
import { Colors } from "@/constants/Colors";
import { Image, ScrollView, View, Text, StyleSheet, Pressable, StatusBar, Dimensions } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง

import Animated51 from "../../../assets/images/coverImg/Artboard51.png";
import Animated52 from "../../../assets/images/coverImg/Artboard52.png";
import Animated53 from "../../../assets/images/coverImg/Artboard53.png";
import Animated54 from "../../../assets/images/coverImg/Artboard54.png";
import Artboard5 from "../../../assets/images/coverImg/5.png";

const Capacity = ({ navigation }) => {
  return (
    <ScreenContainer >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.knowing}>รอบรู้เรื่องใบขับขี่</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('InterestingDriverLicense')}>
              <Image
                source={Animated51}
                style={styles.image}
              />
            </Pressable>
          </View>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('QualificationsTaker')}>
              <Image
                source={Animated52}
                style={styles.image}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.boxArtboard5}>
          <Image
            source={Artboard5}
            style={styles.artboard5_1}
          />
          <Image
            source={Artboard5}
            style={styles.artboard5_1}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('StepsDriversLicense')}>
              <Image
                source={Animated53}
                style={styles.image}
              />
            </Pressable>
          </View>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('PrepareBeforeExam')}>
              <Image
                source={Animated54}
                style={styles.image}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginTop: "15%",
    paddingTop: 32,
    borderRadius: 6,
    zIndex: 0
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    zIndex: 0,
  },
  box: {
    width: '48%', // ใช้เปอร์เซ็นต์เพื่อให้ปรับตามขนาดหน้าจอ
    aspectRatio: 1, // กำหนดอัตราส่วนเพื่อให้ขนาดของ box เป็นสี่เหลี่ยม
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // ใช้ 'contain' เพื่อให้ภาพอยู่ภายใน box โดยรักษาสัดส่วนเดิม
  },
  artboard5_1: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // ใช้ 'contain' เพื่อรักษาสัดส่วนของภาพ
    position: "absolute",
  },
  boxArtboard5: {
    width: '100%',
    aspectRatio: 2, // กำหนดอัตราส่วนให้เป็นสองเท่าของความกว้าง
    marginTop: 160,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
  },
  knowing: {
    color: Colors.primary2,
    textAlign: "center",
    fontSize: 28,
    fontFamily: 'SukhumvitSet-Bold',

  },
});

export default Capacity;
