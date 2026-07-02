/* Zona1: Importaciones componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import ScrollScreen from './ScrollScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityKeyboardScreen from './ActivityKeyboardScreen';

/* Zona2: Main - Componentes*/
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;
    case 'safeArea':
      return <SafeAreaScreen />;
    case 'pressable':
      return <PressableScreen />;
    case 'scrollView':
      return <ScrollScreen />;
    case 'imageBackground':
      return <ImageBackgroundScreen />;
    case 'activityKeyboard':
      return <ActivityKeyboardScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <View style={styles.botonContainer}>
            <Button title="Practica Tarjetas" color="#4CAF50" onPress={() => setScreen('tarjetas')} />
          </View>

          <View style={styles.botonContainer}>
            <Button title="Practica SafeArea" color="#4CAF50" onPress={() => setScreen('safeArea')} />
          </View>

          <View style={styles.botonContainer}>
            <Button title="Practica Pressable" color="#4CAF50" onPress={() => setScreen('pressable')} />
          </View>

          <View style={styles.botonContainer}>
            <Button title="Practica ScrollView" color="#4CAF50" onPress={() => setScreen('scrollView')} />
          </View>

          <View style={styles.botonContainer}>
            <Button title="Practica ImageBackground" color="#4CAF50" onPress={() => setScreen('imageBackground')} />
          </View>

          <View style={styles.botonContainer}>
            <Button title="Practica ActivityKeyboard" color="#4CAF50" onPress={() => setScreen('activityKeyboard')} />
          </View>

          <StatusBar style="auto" />
        </View>
      );
  }
}

/* Zona3: Estilos y Posicionamientos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  botonContainer: {
    width: 250,
    marginVertical: 15,
  },
});
