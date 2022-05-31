import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dino, { ComponenteFuncional, styles } from './classes/Perrito';
import CicloDeVida from './classes/CicloDeVida';
import { useState } from 'react';

export default function App() {

  const request = async() => {

    var respuesta = await fetch("https://tc3005b-backend.herokuapp.com/");
    var text = await respuesta.text();
    
    console.log(text);
  }
  const [displayChildren, setDisplayChildren] = useState(true);
  const [cuentita, setCuentita] = useState(0);

  return (
    <View style={styles.container}>
      <Text>VAMOS A PROBAR SI SCRIPT FUNCIONA</Text>
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

      <Button 
          title="HACER REQUEST PARA PROBAR CORS"
          onPress={() => {
            request();
          }}
      />
      <StatusBar style="auto" />
    </View>
  );
}


