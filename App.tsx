import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import PatientDashboard from './components/PatientDashboard';




export default function App() {
  return (

      <View className="flex-1 bg-[rgb(52,58,64)] items-center justify-center">
        <PatientDashboard/>
        <StatusBar style="auto" />
      </View>
  );
}

