import React from "react";

import {
View,
Text,
Pressable,
StyleSheet,
Alert
} from "react-native";

export default function DetalleUsuarioScreen({route,navigation}){

const {usuario}=route.params;

return(

<View style={styles.container}>

<Text style={styles.titulo}>
Detalles del Usuario
</Text>

<Text>Nombre</Text>

<Text>{usuario.nombre}</Text>

<Text>Edad</Text>

<Text>{usuario.edad}</Text>

<Pressable

style={styles.actualizar}

onPress={()=>navigation.navigate("Actualizar",
{
usuario
})}

>

<Text>Actualizar</Text>

</Pressable>

<Pressable

style={styles.eliminar}

onPress={()=>{

Alert.alert(

"Eliminar",

"¿Seguro que deseas eliminar?",

[
{
text:"Cancelar"
},
{
text:"Sí",
onPress:()=>eliminarUsuario(usuario.id)
}
]

)

}}

>

<Text>Eliminar</Text>

</Pressable>

</View>

);

}