import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'nativewind';

export default function PatientDashboard() {
const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
    height: "",
    weight: 0,
    address: ""
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
        firstName: "John",
        lastName: "Doe",
        age: 40,
        gender: "male",
        height: "72in",
        weight: 200,
        address: "1000 main st"
    })
    setVitals({
        skinTemp: 98,
        pulse: 70,
        spO2: 100
    });
}, []);


  return (
    <ScrollView className="flex-1 bg-[#343a40]" contentContainerStyle={{ padding: 20 }}>
        <Text className="text-white text-3xl font-bold m-2 p-2">
            Syren Sensor
        </Text>

        <View className="bg-black rounded-xl p-6 m-1">
            <Text className="text-white text-lg font-semibold mb-1">Patient Info:</Text>
            {Object.entries(patient).map(([key, value]) =>(
                <Text key={key} className="text-white mb-1 capitalize">
                    {key}: <Text>{value}</Text>
                </Text>
            ))}

            <Text className="text-white text-lg font-semibold mb-1">Patient Vitals:</Text>
            {Object.entries(vitals).map(([key, value]) =>(
                <Text key={key} className="text-white mb-1 capitalize">
                    {key}: <Text>{value}</Text>
        </Text>
            ))}
        </View>
    </ScrollView>
  )
}