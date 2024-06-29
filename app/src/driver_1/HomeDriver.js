import React, { useRef, useEffect, useState } from 'react';
import { Dimensions, View, Image, Pressable, Animated, StyleSheet, StatusBar, Platform, SafeAreaView, Modal, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Colors } from '@/constants/Colors';
// Import button images
import button_1 from "../../../assets/images/home/button_1.png";
import button_2 from "../../../assets/images/home/button_2.png";
import button_3 from "../../../assets/images/home/button_3.png";
import button_4 from "../../../assets/images/home/button_4.png";
import button_5 from "../../../assets/images/home/button_5.png";
import button_6 from "../../../assets/images/home/button_6.png";
import purple from "../../../assets/images/coverImg/purple.png";
import Artboard90 from "../../../assets/images/coverImg/Artboard90.png";
import Artboard95 from "../../../assets/images/coverImg/Artboard95.png";
import Artboard96 from "../../../assets/images/coverImg/Artboard96.png";
import Artboard97 from "../../../assets/images/coverImg/Artboard97.png";
import Artboard99 from "../../../assets/images/coverImg/Artboard99.png";


const HomeDriver = ({ navigation }) => {
  const width = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize state for currentIndex



  const images = [
    require('../../../assets/images/coverImg/2_0.jpg'),
    require('../../../assets/images/coverImg/2_0.jpg'),
    require('../../../assets/images/coverImg/2_0.jpg'),
    require('../../../assets/images/coverImg/2_0.jpg'),
    require('../../../assets/images/coverImg/2_0.jpg'),
    require('../../../assets/images/coverImg/2_0.jpg'),
  ];



  // Create animated values for scaling
  const imageScale = useRef(new Animated.Value(1)).current;
  const buttonScales = [
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
  ];

  const buttons = [
    { image: button_1, scale: buttonScales[0], style: styles.boxNumber_1 },
    { image: button_2, scale: buttonScales[1], style: styles.boxNumber_2 },
    { image: button_3, scale: buttonScales[2], style: styles.boxNumber_3 },
    { image: button_4, scale: buttonScales[3], style: styles.boxNumber_4 },
    { image: button_5, scale: buttonScales[4], style: styles.boxNumber_5 },
    { image: button_6, scale: buttonScales[5], style: styles.boxNumber_6 },
  ];

  // Handle animation for image press
  const handlePressIn = (animatedValue) => {
    Animated.spring(animatedValue, {
      toValue: 1.1, // Scale to 130%
      useNativeDriver: true, // Use native driver for better performance
    }).start();

  };

  const handlePressOut = (animatedValue) => {
    Animated.spring(animatedValue, {
      toValue: 1, // Scale back to original size
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Simulate press on the button at current index
      handlePressIn(buttonScales[index], index);
      setTimeout(() => handlePressOut(buttonScales[index]), 500);

      // Move to next index
      index = (index + 1) % 6; // Loop back to 0 after reaching 5

    }, 1000);
    return () => clearInterval(interval); // Clear interval on component unmount

  }, []); // Run effect only once on component mount

  const handleNext = (index) => {

    // Navigate based on button index
    let navigationIndex = index + 1;
    switch (navigationIndex) {
      case 1:
        navigation.navigate('indexCapacity');
        break;
      case 2:
        navigation.navigate('IdexFitnessTest');
        break;
      // Add more cases for other navigation indexes as needed
      default:
        break;
    }
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      zIndex: 0
    }}>
      <Carousel
        loop
        width={width}
        height={"100%"}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, justifyContent: 'center', zIndex: 0 }}>
            <Animated.Image
              source={item}
              style={[
                { width: '100%', height: '100%' },
                { transform: [{ scale: imageScale }] }
              ]}
              resizeMode="stretch"
            />

            {buttons.map((button, index) => (
              <Pressable
                key={index}
                onPress={() => handleNext(index)}
                style={button.style}
              >
                <Animated.Image
                  source={button.image}
                  style={[
                    { width: '100%', height: '100%' },
                    { transform: [{ scale: button.scale }] }
                  ]}
                  resizeMode="stretch"
                />
              </Pressable>
            ))}


            <View style={styles.boxCircle}>
              {images.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.circle,
                    index === i ? { backgroundColor: Colors.primary } : null
                  ]}
                />
              ))}
            </View>
            <Pressable style={styles.boxModel3}
              onPress={() => handleNext(1)} >
              <Text style={styles.textBoxModel3}>เเนวข้อสอบพร้อมเฉลย</Text>
            </Pressable>
          </View>
        )}
      />

      <Pressable style={styles.boxModel}
        onPress={() => setModalVisible(true)} />
      <Pressable style={styles.boxModel2}
        onPress={() => setModalVisible2(true)} />



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={Artboard99} // ใช้ source แทน src
                style={styles.artboardx}
                resizeMode="stretch"
              />
            </Pressable>
            <Image
              source={purple} // ใช้ source แทน src
              style={{ width: '100%', height: '100%' }}
              resizeMode="stretch"
            />

          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView2}>
            <Image
              source={Artboard90} // ใช้ source แทน src
              style={styles.artboard90}
              resizeMode="stretch"
            />
            <Image
              source={Artboard95} // ใช้ source แทน src
              style={styles.artboard95}
              resizeMode="stretch"
            />
            <Image
              source={Artboard96} // ใช้ source แทน src
              style={styles.artboard96}
              resizeMode="stretch"
            />
            <Image
              source={Artboard97} // ใช้ source แทน src
              style={styles.artboard96}
              resizeMode="stretch"
            />
            <Pressable onPress={() => setModalVisible2(false)} style={styles.container99}>
              <Image
                source={Artboard99} // ใช้ source แทน src
                style={styles.artboard99}
                resizeMode="stretch"
              />
            </Pressable>
          </View>


        </View>
      </Modal>
    </SafeAreaView >
  );
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  boxNumber_1: {
    width: 50,
    height: 50,
    position: "absolute",
    marginLeft: "27%",
    top: 0,
    marginTop: "37%",

  },
  boxNumber_2: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "17%",
    top: 0,
    right: 0,
    marginTop: "41%",

  },
  boxNumber_3: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "0%",
    top: 0,
    right: 0,
    marginTop: "67%"
  },
  boxNumber_4: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "35%",
    top: 0,
    right: 0,
    marginTop: 350
  },
  boxNumber_5: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "43%",
    top: 0,
    right: 0,
    marginTop: 450
  },
  boxNumber_6: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "60%",
    top: 0,
    right: 0,
    marginTop: 590
  },
  boxModel: {
    zIndex: 1,
    width: 30,
    height: 23,
    position: "absolute",
    bottom: 0
  },
  boxModel2: {
    zIndex: 1,
    width: 30,
    height: 23,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  boxModel3: {
    backgroundColor: Colors.primary2,
    zIndex: 1,
    width: width - 32,
    height: 45,
    marginLeft: 16,
    position: "absolute",
    bottom: 24,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  textBoxModel3: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'SukhumvitSet-Bold', // ใช้ฟอนต์ที่โหลด
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', // เปลี่ยนจาก 'center' เป็น 'flex-end'
  },
  modalView: {
    height: 210,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    zIndex: 1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView2: {
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    zIndex: 1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // ใช้ rgba เพื่อทำให้ backgroundColor โปร่งใส
    zIndex: 0,
    paddingHorizontal: 16
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginTop: 6,
    backgroundColor: Colors.primary3,
    position: "absolute",
    zIndex: 10,
    borderRadius: 50,
    right: 4
  },
  textStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 6
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  artboard90: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    maxWidth: 200,
    maxHeight: 200,
    top: 80
  },
  artboard95: {
    width: "100%",
    height: 130,
    zIndex: 1,
    marginTop: "25%"
  },
  artboard96: {
    width: "100%",
    height: 130,
    zIndex: 1,
    marginTop: 32
  },
  container99: {
    flex: 1,
    justifyContent: 'flex-end', // ใช้ justifyContent เพื่อดัน artboard99 ลงด้านล่าง
    alignItems: 'center', // จัดให้อยู่ตรงกลางด้านล่างb
    bottom: 32
  },
  artboard99: {
    width: 70,
    height: 70,
    zIndex: 1,
  },
  artboardx: {
    width: 50,
    height: 50,
    zIndex: 1,
  },
  boxCircle: {
    position: "absolute",
    width: "100%",
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    bottom: 74,
    flexDirection: "row",
    zIndex: 0
  },
  circle: {
    marginRight: 6,
    width: 10,
    height: 10,
    borderRadius: 50,
    zIndex: 1,
    backgroundColor: Colors.white
  }
});

export default HomeDriver;
