import {StatusBar} from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Main} from "./src/screens/Main";
import React from "react";

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Main/>
                <StatusBar style="auto"/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'flex-start',
    }
})


