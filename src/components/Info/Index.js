import React from 'react'
import {Alert, Pressable, View, Modal } from 'react-native'
import styled from 'styled-components/native'

function Info (props) {
const {infoClick, setInfoClick} = props


    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={infoClick}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setInfoClick(!infoClick);
                }}
                >
                <StyledText>
                    Car Emission data:
                    <GreyText>
                        car Co2 emission information is calculated based on a &quot;2021 Fuel Consumption Ratings&quot; dataset of over 
                        900 vehicles, which includes their grams of tailpipe Co2 emmision per kilometre based on average fuel consumption
                        in both city and highway driving scenarios. This data has been provided to the public by the canadian government.
                    </GreyText>
                </StyledText>
                <StyledText>
                    Public transport data:
                    <GreyText>
                        Co2 emissions of public transport routes is derived based on emmisions information from the Alexander Dennis Enviro200XLB,
                        one of the most common bus models used throughout New Zealand and Auckland&apos;s public transport networks. While this vehicle doesnt apply to many public 
                        transport routes, it does give us the most applicable statistics for the data we have access to, Which is then divided by 
                        its average capacity to give a per person metric. 
                    </GreyText>
                </StyledText>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </Modal>


        </View>
        
        
    )
}

export default Info

const StyledText = styled.Text`
  flex: 1;
  font-size: 16px;
  padding: 1%;
`
const GreyText = styled.Text`
  flex: 1;
  font-size: 16px;
  padding: 1%;
  color: lightgrey;
`