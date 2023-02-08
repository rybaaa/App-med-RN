import {StatusBar} from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../app-med/assets/logo.png')}
            />
            <Text style={styles.title}>
                <Text style={styles.title}>Program</Text>
                {'\n'}
                <Text style={styles.title}>for supporting doctors</Text>
                {'\n'}
                <Text style={styles.title}>and patients</Text>
            </Text>
            <TouchableOpacity onPress={() => {
                Alert.alert('Registration confirmed')
            }}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Registration</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Alert.alert('Doctor')
            }}>
                <View style={styles.buttonContainer2}>
                    <Text style={styles.buttonText2}>Doctor</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E63EE',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tinyLogo: {
        marginTop: 211
    },
    title: {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 30,
        lineHeight: 39,
        color: '#fff',
        width: 332,
        height: 117,
        textAlign: 'center',
        marginTop: 16,
    },
    buttonContainer: {
        width: 332,
        height: 28,
        justifyContent: 'center',
        marginTop: 136
    },
    buttonText: {
        fontSize: 21,
        fontWeight: "600",
        lineHeight: 21,
        textAlign: 'center',
        color: '#fff'
    },
    buttonContainer2: {
        width: 343,
        height: 52,
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 12
    },
    buttonText2: {
        fontSize: 17,
        fontWeight: "600",
        lineHeight: 22,
        textAlign: 'center',
        color: '#fff'
    }
});


