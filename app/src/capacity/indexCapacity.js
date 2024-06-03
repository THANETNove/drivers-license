import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, ScrollView, View, Text, Button, StyleSheet } from "react-native";

const Capacity = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
    >
      <View style={styles.row}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  box: {
    width: '48%',
    height: 350,
    backgroundColor: Colors.red,
  }
});


export default Capacity;
