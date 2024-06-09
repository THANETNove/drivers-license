import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "@/constants/Colors";

const ScreenContainer = ({ children }) => {
    return (
        <LinearGradient colors={[Colors.primary, Colors.primary2, Colors.primary3]} style={{ flex: 1, zIndex: 0 }}>
            {children}
        </LinearGradient>
    );
};

export default ScreenContainer;
