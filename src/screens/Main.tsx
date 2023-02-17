import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";
import {HomePage} from "./HomePage";
import {Registration} from "./Registration";

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <View style={{flex:1}}>
            <Stack.Navigator>
                <Stack.Screen name={'HomePage'} component={HomePage}/>
                <Stack.Screen name={'Registration'} component={Registration}/>
            </Stack.Navigator>
        </View>
    )
};

