import React from 'react'
import {Text, View} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Stacks from 'src/screens'

const Stack = createNativeStackNavigator()

export default function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home Screen'} component={Stacks.Home}/>
        </Stack.Navigator>
    )
}