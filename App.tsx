import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import PatientDashboard from './components/PatientDashboard';

// Import CSS only for web platform
import { Platform } from 'react-native';
if (Platform.OS === 'web') {
  require('./global.css');
}

export default function App() {
  return (
    <View className="flex-1 bg-gray-700 items-center justify-center">
      <PatientDashboard/>
      <StatusBar style="auto" />
    </View>
  );
}