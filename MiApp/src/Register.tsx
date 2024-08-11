import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View, SafeAreaView, Alert } from 'react-native';
import { styles } from './apptheme/AppTheme';
import { InputComponents } from './components/InputComponents';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props extends StackScreenProps<any, any> { }

export const Register = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const handleSetValues = (name: string, value: string) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthdate(selectedDate);
    }
  };

  const isOver16 = (date: Date) => {
    const today = new Date();
    const sixteenYearsAgo = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
    return date <= sixteenYearsAgo;
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const Registro = () => {
    if (!username || !password || !email || !birthdate) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    if (!isOver16(birthdate)) {
      Alert.alert('Error', 'Debes ser mayor de 16 años para registrarte.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
      return;
    }

    console.log('Registro exitoso:', { username, password, email, birthdate });

    // Navegar a la pantalla de Home después de un registro exitoso
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imagen}
        source={{ uri: 'https://i.pinimg.com/564x/b6/3b/c1/b63bc1e4dbeab4630fe25a2fa4dafb45.jpg' }}
      />
      <View style={styles.overlay}>
        <Text style={styles.bienvenidoText}>Bienvenido a la mejor App de juegos</Text>
      </View>
      <View style={styles.formaContainer}>
        <InputComponents
          placeholder="Nombre de usuario"
          handleSetValues={handleSetValues}
          name="username"
          hasIcon={false}
          isPassword={false}
        />
        <InputComponents
          placeholder="Correo electrónico"
          handleSetValues={handleSetValues}
          name="email"
          hasIcon={false}
          isPassword={false}
        />
        <InputComponents
          placeholder="Contraseña"
          handleSetValues={handleSetValues}
          name="password"
          hasIcon={true}
          isPassword={hiddenPassword}
          setHiddenPassword={() => setHiddenPassword(!hiddenPassword)}
        />
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Icon name="calendar-today" size={24} color="#888" style={styles.calendarIcon} />
          <Text style={styles.datePickerButtonText}>
            {birthdate.toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={birthdate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        <TouchableOpacity style={styles.button} onPress={Registro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
