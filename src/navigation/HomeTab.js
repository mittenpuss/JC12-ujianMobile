import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screen/home'
import ProfileDrawer from '../navigation/ProfileDrawer'

const Tab=createBottomTabNavigator()

export default HomeTab = ()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
              } else if (route.name === 'Profile') {
              iconName = focused 
              ? 'account-circle' 
              : 'account-circle-outline';
            }else{
              
            }
  
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: '#3DDC84',
          inactiveTintColor: 'gray',
          showLabel:false
        }}>
          
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name="Profile" component={ProfileDrawer}/>


        </Tab.Navigator>
    )
}