import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imagen}
        source={{ uri: 'https://i.pinimg.com/originals/15/19/e6/1519e6fcc18b5ab6a427eb8aa4aca529.jpg' }}
      />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://ejemplo.com/ruta-a-tu-logo.png' }} // Reemplaza con la URL de tu logo
        />
        <Text style={styles.bienvenidoText}>Bienvenido a Game Hub</Text>
        <Text style={styles.subtitleText}>Tu destino para los mejores juegos</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  bienvenidoText: {
    fontSize: 32,
    textAlign: 'center',  
    color: '#e1eef8',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#e1eef8',
    marginBottom: 20,
  },
 
  button: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#e1eef8',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;