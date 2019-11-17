import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation' // import truc tiep tu app den resultlist

const ResultList = ({title, results, navigation}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <Text>{results.length} results</Text>
            <FlatList 
              horizontal={true}
              showsHorizontalScrollIndicator={false} // an thanh bar
              data={results}
              keyExtractor={result => result.id}
              renderItem = {({item}) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('Results', {id: item.id})}>
                    {/* truyen id */}
                    <ResultDetail item={item}/>
                  </TouchableOpacity>
                )
              }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    view: {
      paddingVertical: 5
    }
  });
export default withNavigation(ResultList)
