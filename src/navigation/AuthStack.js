import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../screen/login'

const SettingStack = createStackNavigator()

const SettingStackRoot=({route})=>{
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name='Login' component={Login} options={{headerShown:false}}/>  
        </SettingStack.Navigator>
    )
}

export default SettingStackRoot