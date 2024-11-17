import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import InputScreen from "./screens/InputScreen"
import ResultScreen from './screens/ResultScreen';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Input' >
        <Stack.Screen name='Input' component={InputScreen}
        options={{
          headerTitle: 'BMI CalCulator',
          headerTitleAlign: 'center',
          headerTintColor: '#F5F3F6',
          headerStyle:{
            backgroundColor: Colors.activeCardColor
          }
        }} 
        />
        <Stack.Screen name='ResultPage' component={ResultScreen} options={{
          headerTitle: 'Your Result',
          headerTitleAlign: 'center',
          headerTintColor: '#F5F3F6',
          headerStyle:{
            backgroundColor: Colors.activeCardColor
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


