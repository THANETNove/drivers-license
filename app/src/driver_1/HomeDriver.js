import React, { useRef, useEffect } from 'react';
import { Dimensions, View, Image, Pressable, Animated, StyleSheet, StatusBar } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Import button images
import button_1 from "../../../assets/images/home/button_1.png";
import button_2 from "../../../assets/images/home/button_2.png";
import button_3 from "../../../assets/images/home/button_3.png";
import button_4 from "../../../assets/images/home/button_4.png";
import button_5 from "../../../assets/images/home/button_5.png";
import button_6 from "../../../assets/images/home/button_6.png";

const HomeDriver = ({ navigation }) => {
  const width = Dimensions.get('window').width;

  const images = [
    require('../../../assets/images/home/home_1.png'),
    require('../../../assets/images/home/home_2.png'),
    require('../../../assets/images/home/home_3.png'),
    require('../../../assets/images/home/home_4.png'),
    require('../../../assets/images/home/home_5.png'),
    require('../../../assets/images/home/home_6.png'),
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
        /* navigation.navigate('QualificationsTaker'); */
        break;
      // Add more cases for other navigation indexes as needed
      default:
        break;
    }
  }

  return (
    <View style={{ flex: 1, marginTop: 52 }}>
      <Carousel
        loop
        width={width}
        height={"100%"}
        autoPlay={false}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={{ flex: 1, justifyContent: 'center' }}>
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
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  boxNumber_1: {
    width: 50,
    height: 50,
    position: "absolute",
    marginLeft: "27%",
    top: 0,
    marginTop: "37%"
  },
  boxNumber_2: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "17%",
    top: 0,
    right: 0,
    marginTop: "40%"
  },
  boxNumber_3: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "0%",
    top: 0,
    right: 0,
    marginTop: "64%"
  },
  boxNumber_4: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "35%",
    top: 0,
    right: 0,
    marginTop: "84%"
  },
  boxNumber_5: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "43%",
    top: 0,
    right: 0,
    marginTop: "110%"
  },
  boxNumber_6: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "60%",
    top: 0,
    right: 0,
    marginTop: "140%"
  },
});

export default HomeDriver;
