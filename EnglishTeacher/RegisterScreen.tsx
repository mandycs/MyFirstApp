import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type RegisterScreenNavigationProp = {
    navigate: (screenName: string) => void; // Ajusta según tus necesidades
};

const RegisterScreen: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation<RegisterScreenNavigationProp>();

    const handleRegister = () => {
        // Aquí iría tu lógica para registrar al usuario, por ejemplo, una petición a tu backend
        console.log(email, username, password);

        // Simula una navegación a la pantalla de inicio de sesión tras un registro exitoso
        // O maneja el estado de la respuesta de registro como prefieras
        Alert.alert("Registro Exitoso", "Ahora puedes iniciar sesión con tus credenciales.");
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Cuenta</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre de Usuario"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Registrarse" onPress={handleRegister} />
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
        width: '100%',
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

export default RegisterScreen;
