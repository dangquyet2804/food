import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

const SearchBar = ({term, onChangeTerm, onTermSubmit}) => {
  return (
      <View style={styles.backgroundStyle}>
            <AntDesign name='search1' style={styles.iconStyle}/>
            <TextInput
                style={styles.textInput}
                placeholder='Search'
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onTermSubmit}
            />
      </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 15
    },
    textInput: {
        flex: 1
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});

export default SearchBar;
