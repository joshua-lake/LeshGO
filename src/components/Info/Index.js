import React from 'react'
import {Pressable} from 'react-native'
import styled from 'styled-components/native'

function Info (props) {


    return (
        <>
            <StyledText>
                Car Emission data:
                <GreyText>
                    car co2 emission information is calculate based on a &quot;2021 fuel consumption Ratings&quot; dataset of 
                    
                </GreyText>
            </StyledText>
            <StyledText>
                Public transport data:
                <GreyText>
                    car emmision data calculate based on
                </GreyText>
            </StyledText>
        </>
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