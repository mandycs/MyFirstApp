// Importar las dependencias necesarias
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = {
    navigate: (screenName: string) => void; // Ajusta según tus necesidades
};
const StartScreen: React.FC = () => {
    // Hook de navegación para manejar la navegación entre pantallas
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a Nuestra App</Text>
            <View style={styles.buttonContainer}>
            <Button
                title="Iniciar Sesión"
                onPress={() => navigation.navigate('Login')} // Asegúrate de que 'Login' sea el nombre correcto de tu ruta de navegación
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button
                title="Registrarse"
                onPress={() => navigation.navigate('Register')} // Asume que tienes una pantalla 'Register', ajusta según sea necesario
            />
            </View>
        </View>
    );
};

// Estilos para el componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {


        
        margin: 10,
    },
});

export default StartScreen;
