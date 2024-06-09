
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "@/constants/Colors";

import IndexCapacity from "./capacity/IndexCapacity"; // Adjust the path as needed
const ScreenContainer = () => {
    return (
        <LinearGradient colors={[Colors.primary, Colors.primary2, Colors.primary3]} style={{ flex: 1 }}>
            <IndexCapacity />
        </LinearGradient>
    );
};

export default ScreenContainer;
