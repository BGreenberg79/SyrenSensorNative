// app/_layout.tsx
import { View } from 'react-native';
import { Tabs } from 'expo-router'; // Correct import for Tabs from expo-router
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Tabs>
        <Tabs.Screen
          name="patient-dashboard"
          options={{
            title: 'Patient Dashboard',
            tabBarLabel: 'Patient Dashboard', // Label for the tab
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings', // Label for the tab
          }}
        />
        <Tabs.Screen
          name="dial-ems"
          options={{
            title: 'Dial EMS',
            tabBarLabel: 'Dial EMS', // Label for the tab
          }}
        />
      </Tabs>
    </View>
  );
}
