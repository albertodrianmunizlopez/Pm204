/* Zona1: Importaciones componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../components/Perfil';

/* Zona2: Main - Componentes*/
export default function App() {
  return (
    <View style={styles.container}>
      {/* Sección superior */}
      <View style={styles.arriba}>
        <Image source={require('../assets/wave.png')} />
        <Text style={styles.titulo}>Hola Mundo RN</Text>
      </View>

      {/* Línea divisoria */}
      <Text style={styles.linea}>-------------------------------------</Text>

      {/* Sección inferior con perfiles en horizontal */}
      <View style={styles.abajo}>
        <Perfil
          style={styles.tarjetaVerde}
          nombre="Alberto"
          carrera="ISC"
          materia="Programación Móvil"
          cuatri="9no"
        />

        <Perfil
          style={styles.tarjetaRoja}
          nombre="Simón"
          carrera="Derecho"
          materia="Lectura"
          cuatri="8vo"
        />
      </View>

      <Text style={styles.conclusion}>Conclusión</Text>
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
    width: '100%', // asegura que los perfiles se distribuyan en todo el ancho
    paddingHorizontal: 20,
  },
  tarjetaVerde: {
    backgroundColor: '#6BCB77',
  },
  tarjetaRoja: {
    backgroundColor: '#FF6B6B',
  },
  conclusion: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
});
