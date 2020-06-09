import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,Button } from 'react-native';
import { useDispatch } from 'react-redux';
// import { imageAction } from '../Redux/Actions/authAction';

const Detail = ({navigation, route}) => {
    
    let dispatch = useDispatch();

    const changePic = () => {
        dispatch({ type: 'DEFAULT_PIC' ,payload: route.params.detail.url})
    }

    return (
        <View style={styles.container}>
            <Image 
                source={{uri: route.params.detail.url}} style={styles.Image}
            />
            
            <View style={styles.button}>
                <Button
                    title="SET AS DISPLAY PICTURE?"
                    color="#3DDC84"
                    onPress={changePic}
                />
            </View>
    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },
    button: {
        width:200,
        marginTop:20,
        alignSelf:'center'
    },Image: {
        alignSelf:'center',
        width: '80%', 
        height: 300, 
        marginBottom:30
    }
})

export default Detail;