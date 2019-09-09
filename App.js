import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Home from './src/components/home'
import Perfil from './src/components/perfil'

const Navigator = createBottomTabNavigator({
    Home,
    Perfil 
})

export default createAppContainer(Navigator)