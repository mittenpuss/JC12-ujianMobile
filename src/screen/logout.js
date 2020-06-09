import React from 'react'
import { View, Text,Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux'

const Logout=()=>{

    let dispatch = useDispatch();

    let isLogin = useSelector(state => state.Auth.isLogin)
    let username = useSelector(state => state.Auth.username)


    const onPressLogout=()=>{
        console.log(isLogin)
        console.log(username)
   
        AsyncStorage.removeItem('username')
        .then((res)=>{
            dispatch({type: 'USER_LOGOUT'})
            console.log('sudah logout')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        
            <View style={styles.button}>
            <Button
                title="Logout"
                color="#3DDC84"
                onPress={onPressLogout}
            />
            </View>
        
    )
}

const styles = StyleSheet.create({
    button: {
        width:100,
        marginTop:20,
        alignSelf:'center',
        flex:1,
        justifyContent:'center'
        
    }
  });


export default Logout