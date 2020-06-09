import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './HomeTab'
import Detail from '../screen/detail'

const SettingStack = createStackNavigator()

const HomeStack=({route})=>{
    return (

        <SettingStack.Navigator>
            <SettingStack.Screen name='HomeTab' component={HomeTab} options={{headerShown:false}}/>  
            <SettingStack.Screen name='Detail' component={Detail}/>
        </SettingStack.Navigator>
    )
}

export default HomeStack