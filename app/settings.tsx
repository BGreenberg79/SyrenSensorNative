import { Text, View, ScrollView, TextInput } from 'react-native'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function settings(){

  const [showSubmitted, setShowSubmitted] = useState(false)
  const [user, setUser] = useState({
    userId: 0,
    name: {
      firstName: "",
      lastName: ""
    },
    age: 0,
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
    deviceMake: "",
    deviceModel: ""
  })

  const handleSubmit = () => {
    setShowSubmitted(true);
    const userSubmit = JSON.stringify(user);
    const emergencyContactSubmit = JSON.stringify(emergencyContact);
    const bluetoothDeviceSubmit = JSON.stringify(bluetoothDevice)
    // axios POST call to API
  }

  useEffect(() => {
    const generatedUserId = Date.now();
    const generatedContactId = generatedUserId + 1;

    setUser(prev => ({ ...prev, userId: generatedUserId }));
    setEmergencyContact(prev => ({ ...prev, userId: generatedUserId, contactId: generatedContactId }));
  }, []);

  return (
    <ScrollView className='flex-1 p-3 bg-gray-800'>
      <Text className='text-white'>User Info</Text>
      <TextInput 
      className='text-white'
      onChangeText={(text) => setUser({...user, name: {...user.name, firstName: text} })}
      value={user.name.firstName}
      placeholder='First Name'
      />
      <TextInput 
      className='text-white'
      onChangeText={(text) => setUser({...user, name: {...user.name, lastName: text} })}
      value={user.name.lastName}
      placeholder='Last Name'
      />
      <TextInput 
      className='text-white'
      keyboardType='numeric'
      onChangeText={(text) => setUser({...user, age: Number(text) })}
      value={user.age.toString()}
      placeholder='Age'
      />
    </ScrollView>
  )
}  