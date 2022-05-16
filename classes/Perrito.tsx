import { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
// files == modules
// pueden contener:
// - clases
// - functions 
// - constantes
// - etc

// a diferencia de otros lenguajes un módulo puede o no tener clases

// declarando un componente clase
// si quieremos que este elemento sea accesible desde afuera 
// lo exportamos
export default class Dinosaurio extends Component {
    
    // atributos si tiene clase 

    // forzoso al menos 1 método
    render() {

        return (
            <Text>HOLA SOY UN COMPONENTE CLASE</Text>
        );
    }
}

export function ComponenteFuncional() {

    return(
        <Text>HOLA SOY UN COMPONENTE FUNCIONAL</Text>
    );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
