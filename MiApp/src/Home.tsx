import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { styles } from './apptheme/AppTheme';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imagen}
        source={{ uri: 'https://i.pinimg.com/originals/15/19/e6/1519e6fcc18b5ab6a427eb8aa4aca529.jpg' }}
      />
      <View style={styles.overlay}>
        <Image
          style={styles.imagen}
          source={{ uri: 'https://ejemplo.com/ruta-a-tu-logo.png' }} // Reemplaza con la URL de tu logo
        />
        <Text style={styles.bienvenidoText}>Bienvenido a Game Hub</Text>
        <Text style={styles.subtitleText}>Tu destino para los mejores juegos</Text>
      </View>
    </SafeAreaView>
  );
};
