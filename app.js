import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PumpControlScreen from './screens/PumpControlScreen';
import SensorIntegrationScreen from './screens/SensorIntegrationScreen';
import ConsumptionReportScreen from './screens/ConsumptionReportScreen';
import WeatherScreen from './screens/WeatherScreen';
import SchedulingScreen from './screens/SchedulingScreen';
import BackupScreen from './screens/BackupScreen';
import CropSettingsScreen from './screens/CropSettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pump Control" component={PumpControlScreen} />
        <Stack.Screen name="Sensor Integration" component={SensorIntegrationScreen} />
        <Stack.Screen name="Consumption Report" component={ConsumptionReportScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Scheduling" component={SchedulingScreen} />
        <Stack.Screen name="Backup" component={BackupScreen} />
        <Stack.Screen name="Crop Settings" component={CropSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
