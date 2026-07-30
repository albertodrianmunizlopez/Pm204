import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";

export default function DetalleUsuarioScreen() {
  const { usuario } = useLocalSearchParams();
  const datos = JSON.parse(usuario);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const eliminarUsuario = async (id) => {
    console.log("Intentando eliminar usuario con id:", id);
    try {
      const respuesta = await fetch(
        `http://192.168.1.93:5000/v1/usuarios/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + btoa("admin:1234"),
          },
        }
      );

      console.log("Respuesta DELETE:", respuesta.status);

      if (respuesta.ok) {
        mostrarMensaje("Éxito", "Usuario eliminado correctamente");
        router.push("/consulta"); // <-- cambiado de router.back()
      } else {
        mostrarMensaje("Error", "No fue posible eliminar el usuario");
      }
    } catch (error) {
      console.log("Error en eliminarUsuario:", error);
      mostrarMensaje("Error", "Ocurrió un problema al eliminar");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.regresar} onPress={() => router.push("/consulta")}>
        <Text style={styles.textoRegresar}>‹ Consulta</Text>
      </Pressable>

      <Text style={styles.titulo}>Detalles del Usuario</Text>

      <Text style={styles.label}>Nombre</Text>
      <Text style={styles.valor}>{datos.nombre}</Text>

      <Text style={styles.label}>Edad</Text>
      <Text style={styles.valor}>{datos.edad}</Text>

      <Pressable
        style={styles.actualizar}
        onPress={() =>
          router.push({
            pathname: "/actualizar",
            params: { usuario: JSON.stringify(datos) },
          })
        }
      >
        <Text style={styles.textoBoton}>Actualizar</Text>
      </Pressable>

      <Pressable
        style={styles.eliminar}
        onPress={() => {
          Alert.alert(
            "Eliminar",
            `¿Seguro que deseas eliminar al usuario ${datos.nombre}?`,
            [
              { text: "Cancelar", style: "cancel" },
              {
                text: "Sí, eliminar",
                style: "destructive",
                onPress: () => eliminarUsuario(Number(datos.id)),
              },
            ]
          );
        }}
      >
        <Text style={styles.textoBoton}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FA", padding: 20 },
  regresar: {
    marginBottom: 10,
  },
  textoRegresar: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F2937",
    marginBottom: 20,
  },
  label: { fontSize: 18, fontWeight: "600", color: "#374151", marginTop: 10 },
  valor: { fontSize: 16, color: "#4B5563", marginBottom: 10 },
  actualizar: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  eliminar: {
    backgroundColor: "#DC2626",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  textoBoton: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});