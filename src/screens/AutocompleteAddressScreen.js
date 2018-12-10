import React from 'react'; 
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import {
  TextInput,
  StyleSheet, View, Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import { GOOGLE_API_KEY } from '../constants';
import { theme } from '../constants/theme';
import LocationItem from '../components/LocationItem';

const AutocompleteAddressScreen = ({ navigation }) => (
  <View 
  style={{  flex: 1,backgroundColor:'#fff'  }} >
    <GoogleAutoComplete apiKey={GOOGLE_API_KEY} components="country:ca">
      {({
        handleTextChange,
        inputValue,
        locationResults,
        isSearching,
        fetchDetails,
      }) => (
        <React.Fragment>
          <View 
          style={{  height:40,width:1, marginTop:10  }} 
            center >
            <View
            style={{  backgroundColor:theme.color.greyLighter,padding:8, height:'90%', width:'90%'  }} 
             radius={6}>
              <TextInput
                placeholder="Search address"
                selectionColor={theme.color.green}
                autoFocus
                onChangeText={handleTextChange}
                value={inputValue}
              />
            </View>
          </View>

          {isSearching && locationResults.length === 0 ? (
            <View h={1} w={1} 
            style={{  width: 1,height:1  }} center>
              <ActivityIndicator color={theme.color.green} size="large" />
            </View>
          ) : (
            <ScrollView style={styles.list}>
              {locationResults.map(location => (
                <LocationItem
                  key={location.id}
                  {...location}
                  fetchDetails={fetchDetails}
                  searchAddress={navigation.getParam('searchAddress')}
                />
              ))}
            </ScrollView>
          )}
        </React.Fragment>
      )}
    </GoogleAutoComplete>
  </View>
);

AutocompleteAddressScreen.navigationOptions = {
  title: 'Search Address',
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  list: {
    marginTop: 10,
  },
});

export default AutocompleteAddressScreen;
