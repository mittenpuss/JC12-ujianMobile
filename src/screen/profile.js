import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Profile = () => {
    
    let defaultpic = useSelector(state => state.Auth.defaultpic)
    let username = useSelector(state => state.Auth.username)

    return (
        <View style={styles.container}>
            <Image source={{uri: defaultpic}} style={styles.image}>
            </Image> 

            <Text style={{marginTop:10}}>
                {username}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        borderWidth: 1,
        borderRadius: 100,
        borderColor:'#3DDC84',
        width: 200,
        height: 200
    }
})

export default Profile;