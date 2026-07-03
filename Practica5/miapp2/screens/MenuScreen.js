/* Zona1: Importaciones componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import ScrollScreen from './ScrollScreen';
import SwitchScreen from './SwitchScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import Repaso1Screen from './Repaso1Screen';
import FlatListScreen from './FlatListScreen';
import EstadisticasScreen from './EstadisticasScreen';
import UsuariosScreen from './UsuariosScreen';

/* Zona2: Main - Componentes*/
export default function MenuScren() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;
    case 'safeArea':
      return <SafeAreaScreen />;
    case 'pressable':
      return <PressableScreen />;
    case 'ScrollView':
      return <ScrollScreen />;
    case 'SwitchScreen':
      return <SwitchScreen />;
    case 'TextInputAlertScreen':
      return <TextInputAlertScreen />;
    case 'Repaso1':
      return <Repaso1Screen />;
    case 'FlatList':
      return <FlatListScreen />;
    case 'EstadisticasScreen':
      return <EstadisticasScreen />;
    case 'UsuariosScreen':
      return <UsuariosScreen />;
    
    

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <View style={styles.botonContainer}>
            <Button
              title="Practica Tarjetas"
              color="#4CAF50"
              onPress={() => setScreen('tarjetas')}
            />
          </View>

          <View style={styles.botonContainer}>
            <Button
              title="Practica SafeArea"
              color="#4CAF50"
              onPress={() => setScreen('safeArea')}
            />
          </View>

          <View style={styles.botonContainer}>
            <Button
              title="Practica Pressable"
              color="#4CAF50"
              onPress={() => setScreen('pressable')}
            />
          </View>

          <View style={styles.botonContainer}>
            <Button
              title="Practica ScrollView"
              color="#4CAF50"
              onPress={() => setScreen('ScrollView')}
            />
          </View>
          <View style={styles.botonContainer}>
            <Button
              title="Practica SwitchScreen"
              color="#4CAF50"
              onPress={() => setScreen('SwitchScreen')}
            />
          </View>

          <View style={styles.botonContainer}>
            <Button
              title="Practica TextInputAlertScreen"
              color="#4CAF50"
              onPress={() => setScreen('TextInputAlertScreen')}
            />
          </View>
          <View style={styles.botonContainer}>
            <Button
              title="Repaso1"
              color="#4CAF50"
              onPress={() => setScreen('FlatList')}
            />
          </View>

            <View style={styles.botonContainer}>
            <Button
              title="FlatList"
              color="#4CAF50"
              onPress={() => setScreen('FlatList')}
            />
          </View>

          <View style={styles.botonContainer}>
            <Button
              title="Estadistica"
              color="#4CAF50"
              onPress={() => setScreen('EstadisticasScreen')}
            />
          </View>

          <View style={styles.botonContainer}>
            <Button
              title="Usuarios"
              color="#4CAF50"
              onPress={() => setScreen('UsuariosScreen')}
            />
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
    justifyContent: 'center', // centrado vertical
    paddingVertical: 40,
  },
  botonContainer: {
    width: 250,        // ancho mayor para el botón
    marginVertical: 15 // separación entre botones
  },
});
