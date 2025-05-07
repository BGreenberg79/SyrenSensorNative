import { Text, View, ScrollView, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
// import axios from 'axios'
import { User } from '../models/user'

export default function settings(){

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    error: null as  string | null
  })
  const [user, setUser] = useState<User>({
    userId: 0,
    name: {
      firstName: "",
      lastName: ""
    },
    age: 0,
    gender: "",
    height: "",
    weight: "",
    phoneNumber: "",
    primaryAddress: {
      buildingNumber: "",
      street: "",
      aptUnitNumber: "",
      zipCode: "",
      city: "",
      state: "",
      country: ""
    },
  })
  const [emergencyContact, setEmergencyContact] = useState({
    contactId: 0,
    userId: 0,
    name: {
      firstName: "",
      lastName: ""
    },
    phoneNumber: "",
    relationship: ""
  })
  const [bluetoothDevice, setBluetoothDevice] = useState({
    deviceId: 0,
    serialNumber: "",
    deviceMake: "",
    deviceModel: ""
  })

  const handleSubmit = () => {
    try {
      const userSubmit = JSON.stringify(user);
      const emergencyContactSubmit = JSON.stringify(emergencyContact);
      const bluetoothDeviceSubmit = JSON.stringify(bluetoothDevice);
      
      // axios POST call to API
      
      // Updates state to reflect successful submission
      setSubmitStatus({
        submitted: true,
        success: true,
        error: null
      });
      
      Alert.alert(
        'Successfully submitted', 
        'Your information has been saved.',
        [{
          text: 'Dismiss',
          onPress: () => console.log('Alert dismissed'),
          style: 'cancel'
        }]
      );
      
      console.log('Data submitted:', { userSubmit, emergencyContactSubmit, bluetoothDeviceSubmit });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setSubmitStatus({
        submitted: true,
        success: false,
        error: errorMessage || 'Unknown error occurred'
      });
      
      Alert.alert(
        'Submission Failed', 
        'There was an error saving your information.',
        [{
          text: 'OK',
          style: 'cancel'
        }]
      );
    }
  }

  useEffect(() => {
    const generatedUserId = Date.now();
    const generatedContactId = generatedUserId + 1;
    const generatedDeviceId = generatedUserId +2;
    setUser(prev => ({ ...prev, userId: generatedUserId }));
    setEmergencyContact(prev => ({ ...prev, userId: generatedUserId, contactId: generatedContactId }));
    setBluetoothDevice(prev => ({...prev, deviceId: generatedDeviceId}))
  }, []);

  return (
    <ScrollView className='flex-1 p-3 bg-gray-800'>
      <View className="flex-1 items-center justify-start px-4 py-6">
        <View className="w-full max-w-md mb-4">
          <Text className='text-white text-lg font-bold mb-2'>User Info</Text>
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, name: {...user.name, firstName: text} })}
          value={user.name.firstName}
          placeholder='First Name'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, name: {...user.name, lastName: text} })}
          value={user.name.lastName}
          placeholder='Last Name'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          keyboardType='numeric'
          onChangeText={(text) => setUser({...user, age: Number(text) })}
          value={user.age.toString()}
          placeholder='Age'
          />
          <Text className='text-white text-lg font-bold mb-2'>Gender</Text>
          <View className='mb-4'>
            {["Male", "Female", "Non-Binary", "Prefer Not to Say"].map((option) => (
              <TouchableOpacity
              key={option}
              className="flex-row items-center mb-2"
              onPress={()=> setUser({...user, gender: option})}
              >
                <View className={`w-5 h-5 rounded-full border-2 mr-2 ${ user.gender === option ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
                }`}/>
                <Text className="text-white">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, weight: text })}
          value={user.weight}
          placeholder='Weight'
          />
                    <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, height: text })}
          value={user.height}
          placeholder='Height'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, phoneNumber: text })}
          value={user.phoneNumber}
          placeholder='Phone Number'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, primaryAddress: {...user.primaryAddress, buildingNumber: text }})}
          value={user.primaryAddress.buildingNumber}
          placeholder='Building Number'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, primaryAddress: {...user.primaryAddress, street: text }})}
          value={user.primaryAddress.street}
          placeholder='Street'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, primaryAddress: {...user.primaryAddress, aptUnitNumber: text }})}
          value={user.primaryAddress.aptUnitNumber}
          placeholder='Apartment/Unit No.'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, primaryAddress: {...user.primaryAddress, zipCode: text }})}
          value={user.primaryAddress.zipCode}
          placeholder='Zip/Postal Code'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, primaryAddress: {...user.primaryAddress, city: text }})}
          value={user.primaryAddress.city}
          placeholder='City'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, primaryAddress: {...user.primaryAddress, state: text }})}
          value={user.primaryAddress.state}
          placeholder='State'
          />
          <TextInput 
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setUser({...user, primaryAddress: {...user.primaryAddress, country: text }})}
          value={user.primaryAddress.country}
          placeholder='Country'
          />
          </View>
        <View className="w-full max-w-md mb-4">
          <Text className='text-white text-lg font-bold mb-2'>Emergency Contact Info</Text>
          <TextInput
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setEmergencyContact({...emergencyContact, name: {...emergencyContact.name, firstName: text }})}
          value={emergencyContact.name.firstName}
          placeholder='Emergency Contact First Name'
          />
          <TextInput
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setEmergencyContact({...emergencyContact, name: {...emergencyContact.name, lastName: text }})}
          value={emergencyContact.name.lastName}
          placeholder='Emergency Contact Last Name'
          />
          <TextInput
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setEmergencyContact({...emergencyContact, phoneNumber: text })}
          value={emergencyContact.phoneNumber}
          placeholder='Emergency Contact Phone Number'
          />
          <TextInput
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setEmergencyContact({...emergencyContact, relationship: text })}
          value={emergencyContact.relationship}
          placeholder='Emergency Contact Relationship'
          />
        </View>
        <View className="w-full max-w-md mb-4">
          <Text className='text-white text-lg font-bold mb-2'>Bluetooth Device Details</Text>
          <TextInput
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setBluetoothDevice({...bluetoothDevice, serialNumber: text })}
          value={bluetoothDevice.serialNumber}
          placeholder='Device Serial Number'
          />
          <TextInput
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setBluetoothDevice({...bluetoothDevice, deviceMake: text })}
          value={bluetoothDevice.deviceMake}
          placeholder='Device Manufacturer/Make'
          />
          <TextInput
          className='bg-gray-700 text-blue-500 p-2 rounded mb-2'
          onChangeText={(text) => setBluetoothDevice({...bluetoothDevice, deviceModel: text })}
          value={bluetoothDevice.deviceModel}
          placeholder='Device Model'
          />
        </View>
        <TouchableOpacity 
        className='w-full max-w-md bg-green-600 rounded p-3 mt-4 mb-6'
        onPress={handleSubmit}>
          <Text className='text-white text-center font-bold'>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}  