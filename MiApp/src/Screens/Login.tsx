import { CommonActions, NavigationContainer, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StatusBar, Text, View, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { User } from '../naviagotior/StackNaviagatior';
import { InputComponents } from '../components/InputComponents';
import { BodyComponents } from '../components/BodyComponent';
import { TitleComponent } from '../components/TitleComponent';
import { styles } from '../apptheme/AppTheme';
import { ButtonComponent } from '../components/ButtonComponent';
import { SafeAreaView } from 'react-native-safe-area-context';


//interface -props
interface Props {
    users: User[]
}

interface Formlogin {
    email: string;
    password: string;
}

export const LoginScreens = ({ users }: Props) => {

    //hook useState: manipular el estado del formulario
    const [formLogin, setFormlogin] = useState<Formlogin>({
        email: '',
        password: ''
    });

    //hook useState: permitir que se haga visible/no visible el contenido del password
    const [hiddenPasword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation(): navega de una pantalla a otra
    const navigation = useNavigation();

    //Función para actualizar estado del formulario
    const handleSetValues = (name: string, value: string) => {

        //Cambiar el estado del formLogin
        //(...) Operador de propagacion | spread: Crear una copia del objeto 
        setFormlogin({ ...formLogin, [name]: value });
    }

    //Función para iniciar sesión
    const handleSignIn = () => {
        if (!formLogin.email || !formLogin.password) {
            Alert.alert(
                'Error',
                'Por favor, ingrese valor en todos los campos '
            );
            return;
        }
        //validando que el usuario exista
        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o Contraseña incorrecta'
            );
            return;
        }
        //Si inicio sesion sin problemas, vamos al Home Screens
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))

    }

    //funcion verificar si existe el correo y contraseña(usuario)
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imagen}
                source={{ uri: 'https://i.pinimg.com/originals/15/19/e6/1519e6fcc18b5ab6a427eb8aa4aca529.jpg' }}
            />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponents >
                <View>
                    <Text style={styles.titleHeader}>Bienvenido! 🎮</Text>
                    <Text style={styles.subtitleBody}>La mejor página de videojuegos, consolas y accesorios 🕹️</Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponents
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email'
                        hasIcon={false}
                        isPassword={false} />
                    <InputComponents
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPasword}
                        hasIcon={true}
                        setHiddenPassword={() => setHiddenPassword(!hiddenPasword)} />
                </View>
                <ButtonComponent
                    textButton='Iniciar Sesión'
                    onPress={handleSignIn} />
                <Text style={styles.subtitleBody}>No tienes una cuenta? </Text>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.Button}>Regístrate ahora ♥</Text>
                </TouchableOpacity>
            </BodyComponents>
        </SafeAreaView>

    )
}
