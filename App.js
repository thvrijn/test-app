import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Stacks} from 'src'
import * as Icons from 'react-native-heroicons/solid'

const Tab = createBottomTabNavigator()

export default function App() {
    const TabBarIcon = function ({focused, icon: Component}) {
        return (
            <Component color={focused ? '#3b82f6' : '#a1a1aa'}/>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name={'Home Tabs'}
                    component={Stacks.Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: props => <TabBarIcon {...props} icon={Icons.HomeIcon}/>
                    }}
                />
                <Tab.Screen
                    name={'Settings'}
                    component={Stacks.Settings}
                    options={{
                        headerShown: false,
                        tabBarIcon: props => <TabBarIcon {...props} icon={Icons.Cog6ToothIcon}/>
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}