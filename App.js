import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [colorFondo, setColorFondo] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>
      <Fondo setColorFondo={setColorFondo} />
      <Modificar />
      <Validar />
      <MostrarObjeto />
      <MostrarLista />
    </View>
  );
}

// Cambiar el fondo de toda la pantalla
function Fondo({ setColorFondo }) {
  return (
    <View>
      <Button title="Azul" onPress={() => setColorFondo("lightblue")} />
      <Button title="Verde" onPress={() => setColorFondo("lightgreen")} />
      <Button title="Rojo" onPress={() => setColorFondo("lightcoral")} />
      <Button title="Blanco" onPress={() => setColorFondo("white")} />
    </View>
  );
}

// Modificar tres textos
function Modificar() {
  const [textos, setTextos] = useState(["Texto 1", "Texto 2", "Texto 3"]);

  return (
    <View>
      <Text>{textos[0]}</Text>
      <Text>{textos[1]}</Text>
      <Text>{textos[2]}</Text>
      <Button title="Cambiar Textos" onPress={() => setTextos(["Nuevo 1", "Nuevo 2", "Nuevo 3"])} />
    </View>
  );
}

// Validar si un número es mayor a 10
function Validar() {
  const [numero, setNumero] = useState("0");

  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={(text) => setNumero(text)}
      />
      <Text>{parseInt(numero) > 10 ? "El número es mayor a 10" : "El número es 10 o menor"}</Text>
    </View>
  );
}

// Mostrar objeto con botón
function MostrarObjeto() {
  const objeto = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
  const [mostrar, setMostrar] = useState(false);

  return (
    <View>
      <Button title={mostrar ? "Ocultar Datos" : "Mostrar Datos"} onPress={() => setMostrar(!mostrar)} />
      {mostrar && <Text>Nombre: {objeto.nombre}, Edad: {objeto.edad}, Ciudad: {objeto.ciudad}</Text>}
    </View>
  );
}

// Mostrar lista de datos con botón
function MostrarLista() {
  const datos = ["Manzana", "Banana", "Cereza", "Durazno"];
  const [mostrar, setMostrar] = useState(false);

  return (
    <View>
      <Button title={mostrar ? "Ocultar Lista" : "Mostrar Lista"} onPress={() => setMostrar(!mostrar)} />
      {mostrar && (
        <FlatList
          data={datos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}
    </View>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 10,
    textAlign: "center",
  },
});
