import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Si tu aplicación necesita parámetros para la navegación, defínelos aquí.
// Por ejemplo, si después de iniciar sesión navegas a una pantalla 'Home' que no requiere parámetros, puedes omitir este paso o ajustarlo según sea necesario.
type LoginScreenNavigationProp = {
    navigate: (screenName: string) => void; // Ajusta según tus necesidades
};

const LoginScreen = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleLogin = () => {
        console.log(username, password);
        navigation.navigate('Start'); // Ajusta según tus necesidades
        // Aquí iría tu lógica de autenticación
        // Por simplicidad, vamos a simular un inicio de sesión exitoso
        return

        // Simula la navegación a otra pantalla tras un inicio de sesión exitoso
        // Reemplaza 'Home' con el nombre de tu pantalla objetivo
        // navigation.navigate('Home');

        // O muestra una alerta en caso de éxito, ajusta según tu flujo de trabajo
        Alert.alert("Inicio de sesión exitoso", "Bienvenido a la aplicación");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%', // Asegura que el TextInput ocupe el ancho completo del contenedor
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default LoginScreen;
