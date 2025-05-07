// app/_layout.tsx
import { Alert, Linking, Text, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router'; // Correct import for Tabs from expo-router
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  const handleEMS = () => {
    Alert.alert(
      'Emergency Activation',
      'Do you want to call an EMS dispatcher',
      [
        {
          text: "cancel",
          style: 'cancel',
        },
        {
          text: "call EMS dispatcher",
          onPress: () => {
            Linking.openURL('tel:5551234567') // dummy number in place of 911 to avoid unnecessary waste of public resources during testing or violation of laws
          },
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <>
      <StatusBar style="light"/>
      <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#1f2937'},
        tabBarActiveTintColor: '#10b981',
        tabBarLabelStyle: {fontSize: 14},
      }}
      initialRouteName='patient-dashboard'>
        <Tabs.Screen
          name="patient-dashboard"
          options={{
            title: 'Patient Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ems"
          options={{
            title: 'Dial EMS',
            tabBarLabel: 'Dial EMS', // Label for the tab
            tabBarButton: (props: any) => {
              return(
              <TouchableOpacity
              style={{
                backgroundColor: '#dc2626', 
                padding: 10, 
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleEMS}
              {...props}
              >
                <Ionicons name='call-outline' size={24} color="white"/>
                <Text style={{ color: 'white', marginLeft: 8 }}>Call EMS</Text>
              </TouchableOpacity>
              );
          },
        }}
        />
      </Tabs>
    </>
  );
}
