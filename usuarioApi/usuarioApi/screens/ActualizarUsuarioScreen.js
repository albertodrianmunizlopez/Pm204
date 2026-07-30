import React, { useState } from 'react';
import { useLocalSearchParams, router } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

export default function ActualizarUsuarioScreen() {

  const { usuario } = useLocalSearchParams();
  const datos = JSON.parse(usuario);

  const [nombre, setNombre] = useState(datos.nombre);
  const [edad, setEdad] = useState(datos.edad.toString());
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const actualizarUsuario = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje("Error", "Completa todos los campos");
      return;
    }

    setCargando(true);

    try {
      const respuesta = await fetch(
        `http://192.168.1.93:5000/v1/usuarios/${datos.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + btoa("admin:1234"),
          },
          body: JSON.stringify({
            nombre: nombre,
            edad: Number(edad),
          }),
        }
      );

      const resultado = await respuesta.json();
      console.log(resultado);

      mostrarMensaje("Éxito", "Usuario actualizado correctamente");

      router.push("/consulta"); // <-- cambiado de router.back()

    } catch (error) {
      console.log(error);
      mostrarMensaje("Error", "No fue posible actualizar el usuario");
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.regresar} onPress={() => router.back()}>
        <Text style={styles.textoRegresar}>‹ Regresar</Text>
      </Pressable>

      <View style={styles.card}>
        <Text style={styles.titulo}>Actualizar Usuario</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable
          style={styles.boton}
          onPress={actualizarUsuario}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? "Guardando..." : "Guardar cambios"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    padding: 20,
  },
  regresar: {
    marginBottom: 10,
  },
  textoRegresar: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  boton: {
    backgroundColor: '#FFC107',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  textoBoton: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
});