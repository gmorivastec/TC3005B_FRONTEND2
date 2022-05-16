import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dino, { ComponenteFuncional, styles } from './classes/Perrito';
import CicloDeVida from './classes/CicloDeVida';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Dino></Dino>
      <ComponenteFuncional></ComponenteFuncional>
      <CicloDeVida></CicloDeVida>
      <StatusBar style="auto" />
    </View>
  );
}


