import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import UserResults from '../hooks/UserResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results] = UserResults()
  // console.log(results);
  renderPrice = (price) => {
      return results.filter(result =>result.price === price)
  }
  return (
    <View style={styles.view}>
      <SearchBar 
        term={term}
        onChangeTerm={(e) => setTerm(e)} // ={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>We have {results.length} results</Text>
      <ScrollView>
        <ResultList title='Cost Effective' results={renderPrice('$')}/>
        <ResultList title='Big Pricer' results={renderPrice('$$')}/>
        <ResultList title='Big Spender' results={renderPrice('$$$')}/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 15,
    flex: 1
  }
});

export default SearchScreen;
