import React, { useEffect, useState } from 'react'
import {View,Text,TouchableOpacity,Image,FlatList} from 'react-native'
import Axios from 'axios'
import {Card} from 'native-base'
const Home=({navigation})=>{

    const [gambar,setGambar]=useState([])

    useEffect(()=>{
        
        Axios.get('https://api.thecatapi.com/v1/images/search?limit=15')
        .then((res)=>{
            setGambar(res.data)
            console.log(res.data.breeds)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const mapGambarKucing=()=>{
        return gambar.map((val,index)=>{
            return <Card transparent key={val.id} style={{width:'50%'}} >
                        <TouchableOpacity onPress={()=>navigation.navigate('Detail', {id: val.id, url: val.url})}> 
                            <Image source={{uri:val.url}}
                                // style={styles.imageIcon}
                                />
                        </TouchableOpacity>
                    </Card>
        })
    }

    return(
        <View>
            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={gambar}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {detail: item})}
                    >
                        <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: item.url
                        }}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    )

}

export default Home