import React, { useState } from 'react';
import { Alert, Button, TextInput, View, Text, StyleSheet } from 'react-native';

export default function Repaso1Screen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const validarRegistro = () => {
    if (!nombre || !carrera || !semestre) {
      Alert.alert('Error', 'No se permiten campos vacíos');
      return;
    }
    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser numérico');
      return;
    }

    Alert.alert(
      'Registro',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: 
      ${semestre}\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}
      \nDeportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <View style={styles.checkboxContainer}>
        <Button title={`Taller: ${taller ? 'Sí' : 'No'}`} onPress={() => setTaller(!taller)} />
        <Button title={`Constancia: ${constancia ? 'Sí' : 'No'}`} onPress={() => setConstancia(!constancia)} />
        <Button title={`Deportes: ${deportes ? 'Sí' : 'No'}`} onPress={() => setDeportes(!deportes)} />
      </View>

      <Button title="Enviar Registro" onPress={validarRegistro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    marginVertical: 10,
  },
});


