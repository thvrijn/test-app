import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as Outline from 'react-native-heroicons/outline'
import * as Solid from 'react-native-heroicons/solid'
import {navigation} from 'src/constants'
import {StatusBar} from 'react-native'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'}/>

            <Tab.Navigator>
                {
                    navigation.map((tab, index) => {
                        return (
                            <Tab.Screen
                                key={index}
                                name={tab.name}
                                options={{
                                    tabBarIcon: ({focused, color}) => {
                                        const repository = focused ? Solid : Outline
                                        const Component = repository[tab.icon]

                                        return <Component color={color}/>
                                    }
                                }}
                                children={() => {
                                    return (
                                        <Stack.Navigator>
                                            {
                                                tab.screens.map((screen, index) => {
                                                    return (
                                                        <Stack.Screen
                                                            key={index}
                                                            name={screen.name}
                                                            component={screen.component}
                                                            options={{headerShown: false}}
                                                        />
                                                    )
                                                })
                                            }
                                        </Stack.Navigator>
                                    )
                                }}/>
                        )
                    })
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}