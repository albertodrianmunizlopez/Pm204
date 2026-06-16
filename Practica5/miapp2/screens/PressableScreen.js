/* Zona1: Importaciones componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* Zona2: Main - Componentes*/
export default function SafeAreaScreen() {
  return (
    <View style={styles.container}>
      <Text>Aqui va la practica de PressableScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos y Posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between', // separa arriba y abajo
    paddingVertical: 40,
  },
  arriba: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  linea: {
    marginVertical: 10,
  },
  abajo: {
    flexDirection: 'row', // coloca los perfiles en horizontal
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});