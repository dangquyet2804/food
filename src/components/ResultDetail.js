import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native';

const ResultDetail = ({item}) => {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{uri: item.image_url}}/>
            <Text>{item.name}</Text>
            <Text>{item.rating} rating, {item.review_count} reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 5
    },
    view: {
        marginRight: 10
    }
  });
export default ResultDetail
