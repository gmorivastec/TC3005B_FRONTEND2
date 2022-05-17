import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dino, { ComponenteFuncional, styles } from './classes/Perrito';
import CicloDeVida from './classes/CicloDeVida';
import { useState } from 'react';

export default function App() {

  const [displayChildren, setDisplayChildren] = useState(true);
  const [cuentita, setCuentita] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Dino></Dino>
      <ComponenteFuncional></ComponenteFuncional>
      {
        displayChildren &&
        <CicloDeVida apellido="Martinez" edad={cuentita}></CicloDeVida>
      }
      <Button 
          title="OCULTAR / MOSTRAR"
          onPress={() => {
            setDisplayChildren(!displayChildren);
          }}
      />
      <Button 
          title="ACTUALIZAR CUENTA"
          onPress={() => {
            setCuentita(cuentita + 1);
          }}
      />
      <StatusBar style="auto" />
    </View>
  );
}


