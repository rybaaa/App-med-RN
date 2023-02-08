import { StatusBar } from 'expo-status-bar';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    backgroundColor: '#1E63EE',
    width:WIDTH,
    height:HEIGHT
  }
});
