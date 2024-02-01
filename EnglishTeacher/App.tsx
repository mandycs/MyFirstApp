/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';
import LoginScreen from './LoginScreen';
import StartScreen from './StartScreen' 
import RegisterScreen from './RegisterScreen';// Asegúrate de que la ruta sea correcta

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';




const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrarse' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },

});

export default App;
