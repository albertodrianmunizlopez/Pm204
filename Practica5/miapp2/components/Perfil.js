//Perfil udaando Destructurracion 
import { Text, View , Button } from "react-native"; 
import React, { useState } from "react";

export const Perfil = ({nombre, carrera, materia, cuatrimestre}) => {
    const [mostrar, setMostrar] = useState(false);

    return (

        <View>
            <Text> {nombre} </Text>

            {mostrar && //Renderizado condisional 
            <> 

            <Text> {carrera} </Text>
            <Text> {materia} </Text>
            <Text> {cuatrimestre} </Text>
            </>
        }
            <Button tittle = "Ver Perfil" onPress={()=>setMostrar(!mostrar)}/>

        </View>
    )
}   

//estado 3 ekementos una variable mostrar y el disparador 
/* Perfil usando Destructuración de Props */
/* import { Text, View } from 'react-native';

export const Perfil = (props) => {
    return (
            <View>

                <Text>{props.nombre}</Text>
                <Text>{props.carrera}</Text>
                <Text>{props.materia}</Text>
                <Text>{props.cuatri}</Text>

            </View>

    )
}
   */