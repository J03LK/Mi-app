import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View, SafeAreaView, Alert } from 'react-native';
import { styles } from '../apptheme/AppTheme';
import { InputComponents } from '../components/InputComponents';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { User } from '../naviagotior/StackNaviagatior';


//interface - props
interface Props {
  users: User[];
  handleAddUser: (user: User) => void //agregrar nuevos valores al arreglo 
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  // Función para manejar los valores de los inputs
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

  // Función para manejar el cambio de fecha
  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthdate(selectedDate);
    }
  };

  // Función para verificar si el usuario es mayor de 16 años
  const isOver16 = (date: Date) => {
    const today = new Date();
    const sixteenYearsAgo = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
    return date <= sixteenYearsAgo;
  };

  // Función para validar el formato del correo electrónico
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Función para manejar el registro de usuario
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

    // Obtener el nuevo ID del nuevo usuario 
    let getNewUsuario: string;
    if (users.length > 0) {
      const lastUsuarioId = users
        .map(user => parseInt(user.Usuario.replace('USR', ''), 10))
        .sort((a, b) => b - a)[0];
      const newIdNumber = lastUsuarioId + 1;
      getNewUsuario = `USR${newIdNumber.toString().padStart(3, '0')}`;
    } else {
      getNewUsuario = 'USR001';
    }

    // Generar la información del nuevo usuario 
    const newUser: User = {
      Usuario: getNewUsuario,
      email: email,
      password: password,
    };

    // Agregar el nuevo usuario
    handleAddUser(newUser);

    // Limpiar los campos del formulario
    setUsername('');
    setPassword('');
    setEmail('');
    setBirthdate(new Date());
    Alert.alert('Éxito', 'Usuario registrado correctamente.');
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
}
