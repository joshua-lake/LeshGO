import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { API_KEY } from '../../api'
import { Dimensions, ScrollView } from 'react-native'

const GooglePlacesInput = ({placeHolderText, updateState}) => {
  return (
    <ScrollView keyboardShouldPersistTaps="always">
       <GooglePlacesAutocomplete
        placeholder={placeHolderText}
        styles={{
          container: {
            fontSize: 16,
            width: Dimensions.get('window').width - 20,
            borderRadius: 20,
          },
          listView: {
            left: 10,
            right: 10,
            borderRadius: 5,
            flex: 1,
            elevation: 3,
            zIndex: 100,
          },
          textInputContainer: {
          },
          textInput: {
            backgroundColor: '#F9F5F4',
            borderRadius: 20,
          }
        }}
        keyboardShouldPersistTaps={'handled'}
        listUnderlayColor={'transparent'}
        minLength={1}
        returnKeyType={'search'}
        listViewDisplayed={'auto'}
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={(data, details = null) => {
          const {lat: latitude, lng: longitude} = details.geometry.location
          console.log('In on Press!', {latitude, longitude})
          updateState({latitude, longitude})
        }}
        getDefaultValue={() => ''}
        query={{
          key: API_KEY,
          language: 'en',
          region: 'NZ'
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'gym'
        }}
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
        debounce={200}
       />
    </ScrollView>
  )
}

export default GooglePlacesInput
