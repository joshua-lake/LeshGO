import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { API_KEY } from '../../api'
import { Dimensions, ScrollView } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'

const GooglePlacesInput = ({ currentLocation, placeHolderText, updateState, isOrigin, setSelectedRoute }) => {
  const current = isOrigin ? {
    description: 'Current Location',
    geometry: { location: { lat: currentLocation.latitude, lng: currentLocation.longitude } }
  } : null

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      {/* <Icon name="search" size={10} color='pink'/> */}
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
          textInputContainer: {},
          textInput: {
            backgroundColor: '#FFFFFF',
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
          const { lat: latitude, lng: longitude } = details.geometry.location
          updateState({ latitude, longitude })
          setSelectedRoute('walking')
        }}

        predefinedPlaces={[current]}

        getDefaultValue={() => ''}
        query={{
          key: API_KEY,
          language: 'en',
          region: 'NZ'
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
        debounce={200}
      />
    </ScrollView>
  )
}


export default GooglePlacesInput
