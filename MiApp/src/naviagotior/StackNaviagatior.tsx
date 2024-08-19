import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { LoginScreens } from '../Screens/Login';
import { RegisterScreen } from '../Screens/Register';
import { HomeScreens } from '../Screens/HomeScreens/Home';
import { Carrito } from '../Screens/Carrito';


export interface User {
  Usuario: string;
  email: string;
  password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
  // Arreglo con los usuarios para iniciar sesión
  const users: User[] = [
    { Usuario: 'J03LK', email: 'klasluisa@gmail.com', password: '123456' },
  ];

  // Hook useState: gestionar la lista de usuario - iniciar y registrar
  const [listUser, setListUsers] = useState(users);

  // Función para actualizar la data del arreglo
  const handleAddUser = (user: User) => {
    setListUsers([...listUser, user]);
  };
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {

        }
      }}>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        children={() =>
          <LoginScreens users={listUser} />} />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        children={() =>
          <RegisterScreen
            users={listUser}
            handleAddUser={handleAddUser} />} />
      <Stack.Screen
        name='Home'
        options={{ headerShown: false }}
        component={HomeScreens} />
      <Stack.Screen
        name='Car'
        options={{ headerShown: false }}
        component={Carrito} />
    </Stack.Navigator>
  );
}
