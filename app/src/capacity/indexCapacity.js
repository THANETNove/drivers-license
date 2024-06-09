// Capacity.js
import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, ScrollView, View, Text, Button, StyleSheet, Pressable } from "react-native";
import ScreenContainer from "../NavigationProvider"; // ปรับเส้นทางตามที่ถูกต้อง


import Animated51 from "../../../assets/images/coverImg/Artboard51.png";
import Animated52 from "../../../assets/images/coverImg/Artboard52.png";
import Animated53 from "../../../assets/images/coverImg/Artboard53.png";
import Animated54 from "../../../assets/images/coverImg/Artboard54.png";
import Animated90 from "../../../assets/images/coverImg/Artboard90.png";

const Capacity = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      >
        <Image source={Animated90} // ใช้ source แทน src
          style={styles.image90} // กำหนดขนาดของภาพ
        />
        <Text style={styles.knowing}>รอบรู้เรื่อง การสอบใบขับขี่</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('NewScreen')}>
              <Image source={Animated51} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
          </View>
          <View style={styles.box}>
            <Image source={Animated52} // ใช้ source แทน src
              style={styles.image} // กำหนดขนาดของภาพ
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <Pressable onPress={() => navigation.navigate('Examination')}>
              <Image source={Animated53} // ใช้ source แทน src
                style={styles.image} // กำหนดขนาดของภาพ
              />
            </Pressable>
          </View>
          <View style={styles.box}>
            <Image source={Animated54} // ใช้ source แทน src
              style={styles.image} // กำหนดขนาดของภาพ
            />
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
    marginTop: "20%",
    paddingTop: 90,
    borderRadius: 6, // 

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,

  },
  box: {
    width: '48%',
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  image90: {
    marginTop: -70,
    marginLeft: "32%",
    width: 150,
    height: 150,
    position: "absolute",
    textAlign: "center"
  },
  knowing: {

    color: Colors.primary2,
    textAlign: "center",
    fontSize: 28,
    fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
  }
});

export default Capacity;
