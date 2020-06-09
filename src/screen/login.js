
import React,{useState} from 'react';
import { View, Image, StyleSheet, TextInput,Button } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux'


const Login = (userLogin) => {

  let dispatch = useDispatch();

  let isLogin = useSelector(state => state.Auth.isLogin)
  let defaultPic = useSelector(state => state.Auth.defaultPic)
  let username = useSelector(state => state.Auth.username)

    const onPressLogin=()=>{
        console.log(value)
        dispatch({ type: 'USER_LOGIN' ,payload: value})
        AsyncStorage.setItem('username',value)  
      }


    const [value, onChangeText] = useState('')

    return (
    <View style={styles.container}>
      
        <Image
            style={styles.logo}
            source={{
            uri: 'https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png',
            }}
        />

        <TextInput
        style={styles.textinput}
        onChangeText={text => onChangeText(text)}
        placeholder='Masukkan Nama'
        />


        <View style={styles.button}>
            <Button
                title="Login"
                color="#3DDC84"
                onPress={onPressLogin}
            />
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 400,
      height: 400,
      alignSelf:'center'
    },
    button: {
        width:100,
        marginTop:20,
        alignSelf:'center'
    },
    textinput:{
        width: 200, 
        borderColor: "#3DDC84", 
        borderWidth: 0.5, 
        alignSelf:'center',
        textAlign:'center'
    }
  });

export default Login