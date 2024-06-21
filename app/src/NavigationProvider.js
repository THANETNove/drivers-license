import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "@/constants/Colors";

const ScreenContainer = ({ children }) => {
    return (
        <LinearGradient colors={["#DFE9F6", "#DBDEF1", "#DCD2EA"]} style={{ flex: 1, zIndex: 0 }}>
            {children}
        </LinearGradient>
    );
};

export default ScreenContainer;
