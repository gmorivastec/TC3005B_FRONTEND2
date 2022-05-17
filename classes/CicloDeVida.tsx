import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

// qué es el ciclo de vida
// - métodos que se definen como parte de un componente
// - se ejecutan de manera "automatica" durante la vida del componente

export default class CicloDeVida extends Component {

    async request() {

        var respuesta = await fetch("https://raw.githubusercontent.com/gmorivastec/TC3005B_FRONTEND_APR4/master/gatitos.json");
        var json = await respuesta.json();
        
        this.setState((state)=>{
            console.log("DETONANDO CAMBIO DE ESTADO");    
            return {name: json[0].nombre};
        });
        
    }

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

        // state 
        // ¿podríamos utilizar variables de instancia?
        // ¿por qué usar state entonces?
        // ya existe el atributo this.state
        // recomendaciones - sólo escribirlo directament en el constructor
        this.state = {count: 0, name: "componentito"};
        this.request();
        // posteriormente siempre usaremos setState
        
    }

    // esto corre después una vez PERO también vive en update
    render(){
        console.log("RENDER!" + this.props.apellido);
        return(
            <View>
                <Text>HOLA SOY EL CICLO DE VIDA Y ME LLAMO {this.state.name} {this.props.edad} ADEMÁS {this.state.count}</Text>
                <Button 
                    title="CAMBIAR NOMBRE"
                    onPress={() => {
                        this.setState((state) => {
                            return {name: "componentote"};
                        });
                    }}
                />
                <Button 
                    title="CAMBIAR CUENTA"
                    onPress={() => {
                        this.setState((state, props) => {
                            return {count: state.count + 1};
                        });
                    }}
                />
            </View>
        );
    }

    // una vez que se hizo render y todo fue exitoso
    componentDidMount() {
        console.log("SE MONTÓ EL COMPONENTE EXITOSAMENTE!");
    }

    // 2DO MOMENTO - UPDATE 
    // se detona cuando hay cambio de estado / propiedades

    // 1ero - verificamos si hay cambio
    // PODEMOS sobreescribir el método filtro
    shouldComponentUpdate(nextProp: any, nextState: any){

        // recibimos - nuevos props y nuevos states
        // podemos comparar vs. anterior
        console.log("SHOULD COMPONENT UPDATE INVOCADO (state) " + this.state.count + " VS. " + nextState.count);
        console.log("SHOULD COMPONENT UPDATE INVOCADO (props) " + this.props.edad + " VS. " + nextProp.edad);
        
        // siempre regresa true por default
        return true;
    }

    // render también viene como parte del update 

    // último método invocado una vez que se hizo el render 
    componentDidUpdate(prevProp: any, prevState: any){
        console.log("COMPONENT DID UPDATE INVOCADO " + this.state.count + " VS. " + prevState.count);
    }

    // 3ER MOMENTO
    // desmontaje - quitamos componente de vista
    componentWillUnmount() {

        // aquí limpiamos servicios / subscripciones que estén activos
        console.log("COMPONENT WILL UNMOUNT INVOCADO");
    }

    // EXTRA!
    // si el componente se topó con excepción
    // este método se corre
    componentDidCatch(error:any, info:any){

        console.log("ESTO PASA SI HUBO ERROR");
    }
}