/* Perfil usando Desestructuración de Props */
import { Text, View, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatri, style }) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={[styles.tarjeta, style]}>
      <Text style={styles.nombre}>{nombre}</Text>

      {mostrar && (
        <>
          <Text style={styles.carrera}>{carrera}</Text>
          <Text style={styles.otroTexto}>{materia}</Text>
          <Text style={styles.otroTexto}>{cuatri}</Text>
        </>
      )}
      <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)} />
    </View>
  );
};

const styles = StyleSheet.create({
  nombre: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  tarjeta: {
    borderWidth: 2,
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  carrera: {
    fontSize: 18,
    color: 'blue',
    fontFamily: 'Roboto',
  },
  otroTexto: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontStyle: 'italic',
  },
});
