import React from "react";
import { Colors } from "@/constants/Colors";
import { Image, ScrollView, View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง

import Animated51 from "../../../assets/images/coverImg/Artboard51.png";
import Animated52 from "../../../assets/images/coverImg/Artboard52.png";
import Animated53 from "../../../assets/images/coverImg/Artboard53.png";
import Animated54 from "../../../assets/images/coverImg/Artboard54.png";
import Animated90 from "../../../assets/images/coverImg/Artboard90.png";

const Capacity = ({ navigation }) => {



  return (
    <ScreenContainer >
      <ScrollView contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.knowing}>รอบรู้เรื่อง การสอบใบขับขี่</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('NewScreen')}>
              <Image
                source={Animated51} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
          </View>

          <View style={styles.box}>
            <Image
              source={Animated52} // ใช้ source แทน src
              style={styles.image} // กำหนดขนาดของภาพ
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('ExaminationQ')}>
              <Image
                source={Animated53} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
          </View>
          <View style={styles.box}>
            <Image
              source={Animated54} // ใช้ source แทน src
              style={styles.image} // กำหนดขนาดของภาพ
            />
          </View>
        </View>

      </ScrollView>
    </ScreenContainer >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginTop: "10%",
    paddingTop: 90,
    borderRadius: 6,
    zIndex: 0
  },
  absoluteContainer: {
    position: 'absolute',
    top: 32,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  box: {
    width: '49%',
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  image90: {
    marginTop: -20,
    marginLeft: "32%",
    width: 150,
    height: 150,
    position: "absolute",
    zIndex: 10
  },
  knowing: {
    color: Colors.primary2,
    textAlign: "center",
    fontSize: 28,
    fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
  }
});

export default Capacity;
