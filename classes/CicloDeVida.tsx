import React, { Component } from 'react';
import { Text } from 'react-native';

// qué es el ciclo de vida
// - métodos que se definen como parte de un componente
// - se ejecutan de manera "automatica" durante la vida del componente

export default class CicloDeVida extends Component {

    // 3 momentos grandes en la vida de un componente
    // - montaje (mounting)
    // - actualización (update)
    // - desmontaje (unmounting)

    // 1ERO DE TODOS - CONSTRUCTOR
    // aquí recibimos las props
    constructor(props: any){
        // lo primero que hacemos es invocar al superconstructor
        super(props);
        console.log("CONSTRUCTOR!");
        // lo que quieras va aquí!
    }

    // esto corre después una vez PERO también vive en update
    render(){
        console.log("RENDER!");
        return(
            <Text>HOLA SOY EL CICLO DE VIDA</Text>
        );
    }

    // una vez que se hizo render y todo fue exitoso
    componentDidMount() {
        console.log("SE MONTÓ EL COMPONENTE EXITOSAMENTE!");
    }

    // EXTRA!
    // si el componente se topó con excepción
    // este método se corre
    componentDidCatch(error:any, info:any){

        console.log("ESTO PASA SI HUBO ERROR");
    }
}