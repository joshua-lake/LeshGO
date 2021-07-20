import React from 'react'
import {Alert, Pressable, View, Modal } from 'react-native'
import styled from 'styled-components/native'

function Info (props) {
const {infoClick, setInfoClick} = props


    return (
        <View >
            <Modal
                animationType="slide"
                transparent={false}
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
                <Pressable  onPress={() => setInfoClick(!infoClick)}
                    >
                    <GreyText >Close</GreyText>
                </Pressable>
            </Modal>
            <Pressable
                onPress={() => setInfoClick(true)}
            >
                <GreyText >click for model</GreyText>
            </Pressable>

        </View>
        
        
    )
}

export default Info

const StyledText = styled.Text`
  font-size: 16px;
  padding: 30%;
`
const GreyText = styled.Text`
  font-size: 16px;
  color: lightgrey;
`
const draftView = styled.View`
    width: 80%;
    height: 80%;
    backgroundcolor: "orange";

`

const centeredView = styled.View`
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  `
const modalView = styled.View`
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  `
  const button = styled.Button`
    borderRadius: 20,
    padding: 10,
    elevation: 2
  `
  const buttonOpen = styled.Button`
    backgroundColor: "#F194FF",
  `

  const buttonClose = styled.Button` 
    backgroundColor: "#2196F3",
  `

  const textStyle = styled.Text`
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  `
  const modalText = styled.Text`
    marginBottom: 15,
    textAlign: "center"
  `
