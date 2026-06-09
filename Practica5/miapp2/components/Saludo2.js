import { Text, Image, Button, View } from "react-native"; 

export const Saludo2 = () => {
    return (
        <View>
            <Text>Hola mundo RN Componente Propio 3 elementos </Text>
           
            <Image source={require('../assets/wave.png')} style={{ width: 100, height: 100 }} />
            <Button title="Hola 204" />
        </View>
    )
}

