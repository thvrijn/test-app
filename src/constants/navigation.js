import * as Screens from 'src/screens'

export default [
    {
        name: 'Home',
        icon: 'HomeIcon',
        screens: [
            {
                name: 'Home Screen',
                component: Screens.Home
            }
        ]
    },
    {
        name: 'Settings',
        icon: 'Cog6ToothIcon',
        screens: [
            {
                name: 'Settings Screen',
                component: Screens.Settings
            }
        ]
    },

]