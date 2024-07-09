import React from "react";
import { Colors } from "@/constants/Colors";
import { Image, ScrollView, View, Text, StyleSheet, Pressable, StatusBar, Dimensions } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง

import Animated51 from "../../../assets/images/coverImg/Artboard51.png";
import Animated52 from "../../../assets/images/coverImg/Artboard52.png";
import Animated53 from "../../../assets/images/coverImg/Artboard53.png";
import Animated54 from "../../../assets/images/coverImg/Artboard54.png";
import Artboard5 from "../../../assets/images/coverImg/5.png";
import Artboard86 from "../../../assets/images/coverImg/Artboard86.png";

const Capacity = ({ navigation }) => {
  return (
    <ScreenContainer >
      <ScrollView

        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.knowing}>รอบรู้เรื่องใบขับขี่</Text>
          <Image
            source={Artboard86}
            style={styles.artboard86}
          />
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

        </View>
        <Image
          source={Artboard5}
          style={styles.artboard5}
        />
        <View style={styles.boxTextBottom}>
          <Text style={styles.textBottom}>"การเตรียมความพร้อมก่อนสอบเป็นสิ่งสำคัญ"</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: Colors.light_blue,
    marginHorizontal: 16,
    top: height * 0.08,
    paddingTop: 32,
    borderRadius: 6,
    zIndex: 0,
    paddingBottom: 48
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
    marginTop: 140,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  knowing: {
    color: Colors.primary2,
    textAlign: "center",
    fontSize: 28,
    fontFamily: 'SukhumvitSet-Bold',

  },
  artboard86: {
    marginTop: 60,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1
  },
  artboard5: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 10,
    bottom: -260,
    resizeMode: "contain", // ใช้ 'contain' เพื่อรักษาสัดส่วนของภาพ
  },
  boxTextBottom: {
    marginTop: 100,
    height: 100,
    backgroundColor: "#E6DFF1",
    marginHorizontal: 16,
    paddingTop: 32,
    borderRadius: 6,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textBottom: {
    marginTop: -8,
    color: Colors.black,
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'SukhumvitSet-Bold',
  }
});

export default Capacity;
