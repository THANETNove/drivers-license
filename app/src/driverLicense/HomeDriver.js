import React from 'react';
import { Dimensions, View, Image, Pressable, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

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

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={"100%"}
        autoPlay={false} // Disable autoplay to control manually
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
            <View style={styles.boxNumber} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  boxNumber: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    position: "absolute",
    marginLeft: "25%",
    top: 0,
    marginTop: "30%"
  },
});



export default HomeDriver;
