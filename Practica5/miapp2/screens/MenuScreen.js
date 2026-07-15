// screens/MenuScreen.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';

// importa solo las pantallas que realmente tengas creadas
import TarjetasScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import ScrollScreen from './ScrollScreen';
import SwitchScreen from './SwitchScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import Repaso1Screen from './Repaso1Screen';
import FlatListScreen from './FlatListScreen';
import Repaso2Screen from './Repaso2Screen';
import ModalyButtomScreen from './ModalyButtomScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas': return <TarjetaScreen />;
    case 'safeArea': return <SafeAreaScreen />;
    case 'pressable': return <PressableScreen />;
    case 'ScrollView': return <ScrollScreen />;
    case 'SwitchScreen': return <SwitchScreen />;
    case 'TextInputAlertScreen': return <TextInputAlertScreen />;
    case 'Repaso1': return <Repaso1Screen />;
    case 'FlatList': return <FlatListScreen />;
    case 'Repaso2Screen': return <Repaso2Screen />;
    case 'ModalyButtomScreen': return <ModalyButtomScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <View style={styles.botonContainer}>
            <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="Practica SafeArea" onPress={() => setScreen('safeArea')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="Practica Pressable" onPress={() => setScreen('pressable')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="Practica ScrollView" onPress={() => setScreen('ScrollView')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="Practica SwitchScreen" onPress={() => setScreen('SwitchScreen')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="Practica TextInputAlertScreen" onPress={() => setScreen('TextInputAlertScreen')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="Repaso1" onPress={() => setScreen('Repaso1')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="FlatList" onPress={() => setScreen('FlatList')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="Repaso2" onPress={() => setScreen('Repaso2Screen')} />
          </View>
          <View style={styles.botonContainer}>
            <Button title="ModalyButtomScreen" onPress={() => setScreen('ModalyButtomScreen')} />
          </View>
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  botonContainer: { width: 250, marginVertical: 15 },
});
