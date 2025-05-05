import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import PatientDashboard from './components/PatientDashboard';


export default function App() {

  return (
    <View>
      <PatientDashboard/>
      <StatusBar style="auto" />
      console.log('test')
    </View>
  );
}