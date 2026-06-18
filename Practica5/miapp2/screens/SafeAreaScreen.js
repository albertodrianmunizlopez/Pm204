/* Zona1: Importaciones componentes y archivos */
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/* Zona2: Main - Componentes */
export default function SafeAreaScreen() {
  const [mostrarMensaje, setMostrarMensaje] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis tareas</Text>
      </View>

      {mostrarMensaje && (
        <View style={styles.mensaje}>
          <Text style={styles.mensajeTexto}>Bienvenido de nuevo</Text>
          <TouchableOpacity onPress={() => setMostrarMensaje(false)}>
            <Text style={styles.mensajeCerrar}>x</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.listaContenido}
        showsVerticalScrollIndicator={false}
      >
        {[
          'Comparar Pan',
          'Estudiar React Native',
          'Aprender Importaciones',
          'Llamar a alguien',
          'Revisar un correo',
          'Leer un libro',
          'Practicar Guitarra',
          'Sacar a pasear al perro',
          'Hacer la tarea'
        ].map((tarea, i) => (
          <View key={i} style={styles.tarjeta}>
            <Text style={styles.tarjetaTexto}>{tarea}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

/* Zona3: Estilos y Posicionamientos */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  encabezado: { padding: 20, backgroundColor: '#007bff' },
  titulo: { color: '#fff', fontSize: 22, fontWeight: '700' },
  mensaje: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff3cd',
    padding: 10
  },
  mensajeTexto: { fontSize: 16, fontWeight: '700', color: '#664d03', paddingHorizontal: 6 },
  mensajeCerrar: { fontSize: 16, fontWeight: '700', color: '#664d03' },
  scroll: { flex: 1 },
  listaContenido: { padding: 16, paddingBottom: 40 },
  tarjeta: { backgroundColor: '#f4f4f4', borderRadius: 10, padding: 16, marginBottom: 10 },
  tarjetaTexto: { fontSize: 15, color: '#222' }
});
