import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View} from "react-native";

type CommonButtonPropsType = {
    title:string
    fontSize: number,
    fontWeight: string,
    lineHeight: 21,
    textAlign: string,
    color: string
    onPressTitle: string
    width: number
    height: number
    justifyContent: string
    marginTop: number
    borderWidth?: number
    borderColor?: string
    borderRadius?: number
} & TouchableOpacityProps

export function CommonButton({title, fontWeight, fontSize, lineHeight, onPressTitle, color, textAlign, ...restProps}:CommonButtonPropsType) {
    return (
        <TouchableOpacity onPress={() => {
            Alert.alert('Registration confirmed')
        }}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Registration</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: '#1E63EE',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
