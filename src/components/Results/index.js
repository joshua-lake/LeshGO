import React from 'react'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results (props) {

// props.mapRouteData && const { mapRouteData: { walkingData } } = props : null

// props.mapRouteData && console.log('map data: ', props.mapRouteData)

// // const { mapRouteData: { walkingData } } = props
// // console.log(walkingData.distanceKM)

// const walkingData = props.mapRouteData.walkingData
// console.log('HERE', walkingData)

props.mapRouteData.walkingData && console.log('MRD', props.mapRouteData)





  const tempData = {
    walk: {
      distanceKM: 1,
      durationMIN: 6
    },
    bike: {
      distanceKM: 10,
      durationMIN: 20
    },
    drive: {
      distanceKM: 10,
      durationMIN: 15
    },
    publicTransport: {
      distanceKM: 10,
      durationMIN: 20
    }
  }

  const undefinedData = {

    walk: {
      distance: 'please enter',
      duration: 'please enter'
    },
    bike: {
      distanceKM: 'please enter',
      durationMIN: 'please enter'
    },
    drive: {
      distanceKM: 'please enter',
      durationMIN: 'please enter'
    },
    publicTransport: {
      distanceKM: 'please enter',
      durationMIN: 'please enter'
    }

  }

  return (
    props.mapRouteData.walkingData
    ? <StyledView>
      <StyledWalk>
        <Walk data={props.mapRouteData.walkingData}/>
      </StyledWalk>
      <StyledBike>
        <Bike data={tempData.bike}/>
      </StyledBike>
      <StyledDrive>
        <Drive vehicleType={props.vehicleType} data={tempData.drive}/>
      </StyledDrive>
      <StyledPublicTransport>
        <PublicTransport data={tempData.publicTransport}/>
      </StyledPublicTransport>
    </StyledView>

    : <StyledView>
    <StyledWalk>
      <Walk data={undefinedData.walk}/>
    </StyledWalk>
    <StyledBike>
      <Bike data={undefinedData.bike}/>
    </StyledBike>
    <StyledDrive>
      <Drive vehicleType={props.vehicleType} data={undefinedData.drive}/>
    </StyledDrive>
    <StyledPublicTransport>
      <PublicTransport data={undefinedData.publicTransport}/>
    </StyledPublicTransport>
  </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
  alignItems: center;
  justifyContent: center;
  width: 100%;
`

const StyledWalk = styled.View`
  flex: 1;
  background-color: pink;
  padding: 5%;
  width: 100%;
`

const StyledBike = styled.View`
  flex: 1;
  background-color: yellow;
  padding: 5%;
  width: 100%;
`

const StyledDrive = styled.View`
  flex: 1;
  background-color: black;
  padding: 5%;
  width: 100%;
`

const StyledPublicTransport = styled.View`
  flex: 1;
  background-color: white;
  padding: 5%;
  width: 100%;
`

export default Results
