
import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, Pressable, Alert } from 'react-native';
import { StatusBar } from 'react-native-web';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../../app/config/firebase';

const RegisterScreen = ({ navigation }) => {

  const [mail, setMail] = React.useState("");
  const [contrasenia, setContrasenia] = React.useState("");
  const [confirmar, setConfirmar] = React.useState("");

  const registrar = () => {
    if (!mail) {
      Alert.alert("Correo electrònico es requerido")
    } else {
      createUserWithEmailAndPassword(authentication, mail, contrasenia)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          Alert.alert("Usuario ingresado correctamente");
          console.log("Usuario ingresado correctamente");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert("Error:" + errorCode + errorMessage)
          // ..
        });
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.Imagen}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TV_Azteca_Clic_logo.svg/800px-TV_Azteca_Clic_logo.svg.png',
        }}
      />
      <Text style={styles.texto}>Compra Facìl y Ràpido</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setMail(value)}
        value={mail}
        placeholder="Correo Electrònico"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setContrasenia(value)}
        value={contrasenia}
        placeholder="Contraseña"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setConfirmar(value)}
        value={confirmar}
        placeholder="Confirmar contraseña"
      />
      <Button title='Iniciar Sesión'
        onPress={() => {
          navigation.navigate('Login')
        }} />
      <Pressable onPress={registrar} style={styles.button}>
        <Text style={styles.textButton}>Registrar</Text>
      </Pressable>
      <Text onPress={() => navigate("Login")} style={styles.link}>
        ¿Ya tienes una cuenta?
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 25,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 20,
    borderColor: "#02CCFF",
    padding: 10,borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginTop: 10,

  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#02CCFF",
    borderRadius: 7,
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
}
);
export default RegisterScreen
