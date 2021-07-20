import React from 'react'
import { Pressable } from 'react-native'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results (props) {
  const {setSelectedRoute, selectedRoute} = props

  const undefinedData = {  // <=== hard coded default display data
      distance: 'please enter route',
      duration: 'please enter route'
    }
    
  return (
    <StyledView>
        {selectedRoute === 'walking'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContent>
        }

        {selectedRoute === 'bicycling'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContent>
        }
        
        {selectedRoute === 'driving'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContent>
        }
        
        {selectedRoute === 'transit'
        ? <StyledContentTwo>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContentTwo>

        : <StyledContent>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData} selectedRoute={selectedRoute}/>
        </Pressable>
        </StyledContent>
        }
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  alignItems: center;
  justifyContent: center;
  width: 100%;
  margin-top: 2%;
`

const StyledContent = styled.View`
flex: 1;
width: 95%;
margin-top: 1%;
margin-bottom: 1%;
margin-left: 2%;
margin-right: 2%;
border: solid;
border-radius: 50px;
`

const StyledContentTwo = styled.View`
flex: 1;
width: 95%;
margin-top: 1%;
margin-bottom: 1%;
margin-left: 2%;
margin-right: 2%;
border: solid 2.5px;
border-radius: 50px;
`

export default Results
