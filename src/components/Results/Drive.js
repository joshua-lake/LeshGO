import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Drive (props) {
  const { distance, duration } = props.undefinedData.drive

  return (
    props.data.mapRouteData.drivingData

    ? <StyledView>
        <StyledIcon>    
          <Icon name="car" size={30} />
        </StyledIcon>
        <FlexText>
         <StyledText>
            Vehicle Type: {props.vehicleType} 
            {/* ? props.vehicleType
            : 'Please select vehicle type'}: */}
         </StyledText>
         <StyledText>
            Distance: {props.data.mapRouteData.drivingData.distanceKM}KM
         </StyledText>
         <StyledText>
            Time: {props.data.mapRouteData.drivingData.durationMIN} mins
         </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
              <StyledIcon>    
              <Image source={require("../../../assets/car.gif")}/>
        </StyledIcon>
        <FlexText>
         <StyledText>
            {props.vehicleType} 
            {/* ? props.vehicleType
            : 'Please select vehicle type'}: */}
         </StyledText>
         <StyledText>
         Distance:{distance}
         </StyledText>
         <StyledText>
         Time:{duration}
         </StyledText>
        </FlexText>
      </StyledView>
  )
}


const StyledText = styled.Text`
  flex: 1;
  font-size: 20px;
  justifyContent: center;
`

const StyledView = styled.View`
flex: 1;
flex-direction: row;
alignItems: center;
`

const FlexText = styled.View`
flex: 4;
flex-direction: column;
height: 100%;
padding-top: 1%;
padding-bottom: 1%;
`

const StyledIcon = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
`
const Image = styled.Image`
height: 30px;
width: 30px;
`


export default Drive
