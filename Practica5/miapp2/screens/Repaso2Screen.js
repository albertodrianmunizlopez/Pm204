import React, { useState, useEffect } from 'react';
import { 
  View, Text, TextInput, Pressable, FlatList, 
  Alert, ActivityIndicator, ImageBackground, StyleSheet 
} from 'react-native';

export default function App() {
  const [loadingSplash, setLoadingSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  // SplashScreen: se oculta después de 2 segundos
  useEffect(() => {
    setTimeout(() => setLoadingSplash(false), 2000);
  }, []);

  if (loadingSplash) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>Bienvenido </Text>
      </View>
    );
  }

  // Función para agregar libro
  const agregarLibro = () => {
    if (!titulo || !autor || !genero) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    setGuardando(true);
    setTimeout(() => {
      const nuevoLibro = { id: Date.now().toString(), titulo, autor, genero };
      setLibros([...libros, nuevoLibro]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setGuardando(false);
      Alert.alert('Éxito', 'Libro agregado correctamente');
    }, 4000);
  };

  return (
    <ImageBackground source={require('../assets/wave.png')} style={styles.background}>

      <View style={styles.container}>
        <Text style={styles.titulo}>Registro de Libros</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Título" 
          value={titulo} 
          onChangeText={setTitulo} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Autor" 
          value={autor} 
          onChangeText={setAutor} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Género" 
          value={genero} 
          onChangeText={setGenero} 
        />

        {guardando ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Pressable style={styles.boton} onPress={agregarLibro}>
            <Text style={styles.botonTexto}>Agregar Libro</Text>
          </Pressable>
        )}

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.texto}>
                {item.titulo} - {item.autor} ({item.genero})
              </Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

/* 🎨 Estilos */
const styles = StyleSheet.create({
  splash: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111' },
  splashText: { fontSize: 28, color: '#fff', fontWeight: 'bold' },
  background: { flex: 1 },
  container: { flex: 1, padding: 20, backgroundColor: 'rgba(0,0,0,0.5)' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#fff', marginBottom: 10 },
  input: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 6 },
  boton: { backgroundColor: '#007bff', padding: 12, borderRadius: 6, alignItems: 'center' },
  botonTexto: { color: '#fff', fontWeight: '700' },
  tarjeta: { backgroundColor: '#f4f4f4', padding: 10, marginVertical: 6, borderRadius: 6 },
  texto: { fontSize: 14, color: '#222' },
});
