import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'nativewind';
import { User } from '../models/user';

export default function PatientDashboard() {
const [patient, setPatient] = useState<User>({
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
const [vitals, setVitals] = useState({
    skinTemp: 0,
    pulse: 0,
    spO2: 0
})

    
// API GET Call
// const response = axios.get(aws dynamoDB route)
// do for patient information table and for wearable data
useEffect(()=>{
    setPatient({
        userId: Date.now(),
        name: {
          firstName: "John",
          lastName: "Doe"
        },
        age: 40,
        gender: "male",
        height: "72in",
        weight: "190 lbs.",
        phoneNumber: "123-456-7890",
        primaryAddress: {
          buildingNumber: "100",
          street: "main st.",
          aptUnitNumber: "PH4",
          zipCode: "12345",
          city: "Schenectady",
          state: "NY",
          country: "United States"
        },    
    })
    setVitals({
        skinTemp: 98,
        pulse: 70,
        spO2: 100
    });
}, []);


  return (
    <ScrollView className="flex-1 bg-gray-800" contentContainerStyle={{ padding: 20 }}>
        <View className='flex-1 items-center justify-start px-4 py-6'>
            <Text className="text-white text-3xl font-bold mb-6">
                Syren Sensor
            </Text>

            <View className="w-full max-w-md bg-black rounded-2xl p-6 mb-6 shadow-black/40">
                <Text className="text-white text-lg font-semibold mb-2">Patient Info:</Text>
                
                <Text className="text-white b-1 capitalize">
                    Name: <Text className="font-normal">{`${patient.name.firstName} ${patient.name.lastName}`}</Text>
                </Text>

                <Text className="text-white b-1 capitalize">
                    Age: <Text className="font-normal">{patient.age}</Text>
                </Text>
                
                <Text className="text-white b-1 capitalize">
                    Gender: <Text className="font-normal">{patient.gender}</Text>
                </Text>

                <Text className="text-white b-1 capitalize">
                    Height: <Text className="font-normal">{patient.height}</Text>
                </Text>

                <Text className="text-white b-1 capitalize">
                    Weight: <Text className="font-normal">{patient.weight}</Text>
                </Text>

                <Text className="text-white text-lg font-semibold mt-5 mb-3">Patient Vitals:</Text>
                {Object.entries(vitals).map(([key, value]) =>(
                    <Text key={key} className="text-white mb-2 capitalize">
                        {key}: <Text >{value}</Text>
            </Text>
                ))}
            </View>
        </View>
    </ScrollView>
  )
}