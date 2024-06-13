import React from 'react';
import { Dimensions, View, Image, Pressable, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import button_1 from "../../../assets/images/home/button_1.png";
import button_2 from "../../../assets/images/home/button_2.png";
import button_3 from "../../../assets/images/home/button_3.png";
import button_4 from "../../../assets/images/home/button_4.png";
import button_5 from "../../../assets/images/home/button_5.png";
import button_6 from "../../../assets/images/home/button_6.png";



const HomeDriver = ({ navigation }) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const images = [
    require('../../../assets/images/home/home_1.png'),
    require('../../../assets/images/home/home_2.png'),
    require('../../../assets/images/home/home_3.png'),
    require('../../../assets/images/home/home_4.png'),
    require('../../../assets/images/home/home_5.png'),
    require('../../../assets/images/home/home_6.png'),
  ];

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={"100%"}
        autoPlay={true} // Disable autoplay to control manually
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Image
              source={item}
              style={{ width: '100%', height: '100%' }}
              resizeMode="stretch"
            />
            <View style={styles.boxNumber_1} >
              <Image
                source={button_1}
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.boxNumber_2} >
              <Image
                source={button_2}
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.boxNumber_3} >
              <Image
                source={button_3}
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.boxNumber_4} >
              <Image
                source={button_4}
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.boxNumber_5} >
              <Image
                source={button_5}
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.boxNumber_6} >
              <Image
                source={button_6}
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
              />
            </View>
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
    marginTop: "35%"
  },
  boxNumber_2: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "18%",
    top: 0,
    right: 0,
    marginTop: "37%"
  },
  boxNumber_3: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "0%",
    top: 0,
    right: 0,
    marginTop: "59%"
  },
  boxNumber_4: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "35%",
    top: 0,
    right: 0,
    marginTop: "78%"
  },
  boxNumber_5: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "43%",
    top: 0,
    right: 0,
    marginTop: "102%"
  },
  boxNumber_6: {
    width: 50,
    height: 50,
    position: "absolute",
    marginRight: "60%",
    top: 0,
    right: 0,
    marginTop: "130%"
  },
});



export default HomeDriver;
