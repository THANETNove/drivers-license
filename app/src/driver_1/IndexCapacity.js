import React from "react";
import { Colors } from "@/constants/Colors";
import { Image, ScrollView, View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง

import Animated51 from "../../../assets/images/coverImg/Artboard51.png";
import Animated52 from "../../../assets/images/coverImg/Artboard52.png";
import Animated53 from "../../../assets/images/coverImg/Artboard53.png";
import Animated54 from "../../../assets/images/coverImg/Artboard54.png";
import Animated90 from "../../../assets/images/coverImg/Artboard90.png";
import Artboard5 from "../../../assets/images/coverImg/5.png"


const Capacity = ({ navigation }) => {



  return (
    <ScreenContainer >
      <ScrollView contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.knowing}>รอบรู้เรื่อง การสอบใบขับขี่</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('InterestingDriverLicense')}>
              <Image
                source={Animated51} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
          </View>

          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('QualificationsTaker')}>
              <Image
                source={Animated52} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.boxArtboard5}>
          <Image
            source={Artboard5} // ใช้ source แทน src
            style={styles.artboard5_1} // กำหนดขนาดของภาพ
          />
          <Image
            source={Artboard5} // ใช้ source แทน src
            style={styles.artboard5_1} // กำหนดขนาดของภาพ
          />
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('StepsDriversLicense')}>
              <Image
                source={Animated53} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
          </View>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('PrepareBeforeExam')}>
              <Image
                source={Animated54} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
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
    marginTop: "15%",
    paddingTop: 32,
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
    zIndex: 0,
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
  },
  artboard5_1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 10,
  },
  boxArtboard5: {
    marginTop: "48%",
    width: "100%",
    height: 120,
    zIndex: 10,
    position: "absolute"
  }
});

export default Capacity;
