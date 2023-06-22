import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Stacks} from 'src'

const Tab = createBottomTabNavigator()

export default function App() {
    const options = {
        headerShown: false
    }
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={'Home Tabs'} component={Stacks.Home} options={options}/>
                <Tab.Screen name={'Settings'} component={Stacks.Settings} options={options}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}