import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './src/navigation/HomeStack'
import AuthStack from './src/navigation/AuthStack'
import {StyleSheet } from 'react-native'
import {useSelector} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';


const Appinit=()=>{

  let username = useSelector(state => state.Auth.username)

  let dispatch = useDispatch();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('username')
      if(value !== null) {
        dispatch({ type: 'USER_LOGIN' ,payload: value})
        console.log('Login')
      }
    } catch(e) {
      dispatch({type: 'USER_LOGOUT'})
      console.log(e)
    }
  }


    useEffect(()=>{
      getData()
    },[])

  
    return(
        <NavigationContainer>
            {
                username?
                <HomeStack/>
                :
                <AuthStack/>
            } 
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    LogcontainerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10
    }
})


export default Appinit