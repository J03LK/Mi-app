import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Register: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Registro = () => {
    console.log('Usuario registrado:', username);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imagen}
        source={{ uri: 'https://i.pinimg.com/564x/b6/3b/c1/b63bc1e4dbeab4630fe25a2fa4dafb45.jpg' }}
      />
      <View style={styles.content}>
        <Text style={styles.bienvenidoText}>Bienvenido a la mejor App de juegos</Text>
      </View>
      <View style={styles.formaContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={Registro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  imagen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  bienvenidoText: {
    fontSize: 30,
    textAlign: 'center',  
    color: '#e1eef8',
    fontWeight: 'bold',
  },
  formaContainer: {
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'black',
    alignContent: 'center'
  },
  button: {
    backgroundColor: '#0000ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#e1eef8',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;
