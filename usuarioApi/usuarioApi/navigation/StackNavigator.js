import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConsultaUsuariosScreen from "../screens/ConsultaUsuariosScreen";
import DetalleUsuarioScreen from "../screens/DetalleUsuarioScreen";
import ActualizarUsuarioScreen from "../screens/ActualizarUsuarioScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator(){

    return(

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                name="Usuarios"
                component={ConsultaUsuariosScreen}
                />

                <Stack.Screen
                name="Detalle"
                component={DetalleUsuarioScreen}
                />

                <Stack.Screen
                name="Actualizar"
                component={ActualizarUsuarioScreen}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );

}