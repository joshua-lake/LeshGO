import React from 'react'
import {Alert, Pressable, SafeAreaView, Modal } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { BlurView } from 'expo-blur'

function Info (props) {
const {infoClick, setInfoClick} = props


    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
        <BlurView intensity={100}>
        <Modal
          animationType="fade"
          transparent={true}
          presentationStyle='overFullScreen'
          visible={infoClick}
          onRequestClose={() => {Alert.alert("Modal has been closed."); setInfoClick(!infoClick);}}
          >
          <StyledView>
            <Box>
              <TitleContainer>
              <Title>
                How are our carbon emissions calculated?
              </Title>
              </TitleContainer>
              <StyledText>
              The carbon emissions for car trips are based on test results supplied by vehicle manufacturers. These results were compiled by the Canadian Government into publicly available datasets, and include the grams of tailpipe CO2 emissions per kilometre based on the average fuel consumption for that car.
              </StyledText>
              <StyledText>
              For public transport emissions, we calculate a rough estimate based on the emissions of one of New Zealand’s most common bus models, the Alexander Dennis Enviro 200 XLB, and on the average occupancy of public transport networks.
              </StyledText>
              <StyledText></StyledText>
              <Pressable  onPress={() => setInfoClick(!infoClick)}>
                <Close>Close</Close>
              </Pressable>
            </Box>
          </StyledView>
        </Modal>
        </BlurView>
        <Pressable onPress={() => setInfoClick(true)}>
        <IconBox><Icon name="info" testId="infoButton" size={22}/></IconBox>
        </Pressable>
      </SafeAreaView>
    )
}

export default Info

const StyledText = styled.Text`
  flex: 1;
  font-size: 15px;
  width: 100%;
  padding-left: 6%;
  padding-right: 6%;
  text-align: justify;
`

const Title = styled.Text`
  font-size: 15px;
  padding: 6%;
`

const TitleContainer = styled.View`
  flex: 1;
  width: 100%;
  justifyContent: center;
  alignContent: center;
`

const Close = styled.Text`
  font-size: 15px;
  margin: 4%;
`

const StyledView = styled.View`
flex: 1;
alignItems: center;
width: 100%;
height: 50%;
justifyContent: center;
backgroundColor: rgba(0,0,0,0.3);
`

const Box = styled.View`
flex: 0.75;
alignItems: center;
width: 80%;
justifyContent: center;
border: solid;
background-color: white
`

const IconBox = styled.View`
alignItems: center;
padding-top: 2%;
`