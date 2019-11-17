import React from 'react'
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = ({navigation}) => {
    // console.log(navigation.getParam('id'));  Lay dc id cua result
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null);
    // console.log(result);
    getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
             data={result.photos}
             keyExtractor={photo => photo}
             renderItem={({item}) => {
                 return <Image source={{uri: item}} style={styles.img}/> // Luong dung item
             }}   
            />
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 100
    }
  });
export default ResultScreen
