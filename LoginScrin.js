import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { StatusBar } from 'react-native-web';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { authentication }from '../../app/config/firebase';

const LoginScrin = ({ navigation }) => {

  // Variables 
  const [mail, setMail] = React.useState("");
  const [Contrasenia, setContraseña] = React.useState("");

  const iniciarSesion = () => {
    if (!mail) {
      
    } else {
      signInWithEmailAndPassword(authentication, mail, Contrasenia)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.Imagen}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TV_Azteca_Clic_logo.svg/800px-TV_Azteca_Clic_logo.svg.png',
        }}
      />

      <Text style={styles.texto}>Compra Facìl y Ràpido</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder="Correo Electrónico"
      />
      <TextInput
        style={styles.input}
        onChangeText={setContraseña}
        value={Contrasenia}
        placeholder="Contraseña"
      />
      <Button title='Registrar'
        onPress={() => {
          navigation.navigate('Login')
        }} />

      <Pressable onPress={iniciarSesion} style={styles.button}>
        <Text style={styles.textButton}>Iniciar Sesión</Text>
      </Pressable>
      <Text onPress={() => navigate("Registro")} style={styles.link}>
     
      </Text>

    </View>
  );
};
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

export default LoginScrin;
