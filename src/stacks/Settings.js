import React from 'react'
import {Text, View} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Screens from 'src/screens'

const Stack = createNativeStackNavigator()

export default function Settings() {
    return <Stack.Navigator>
        <Stack.Screen name={'Settings Screen'} component={Screens.Settings}/>
    </Stack.Navigator>
}