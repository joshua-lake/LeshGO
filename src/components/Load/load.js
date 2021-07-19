import React from "react";
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View } from "react-native";

export default class Load {
    static load(cb){
        setTimeout(cb, 3000);
    }
}


//below needs to move to App
export default class App extends React.Component {
    state = {
        loaded: false
    }
    constructor(){
        super();
        Load.load(v => this.setState({loaded: true}))
    }
    render() {
        return (
        <View style={styles.container}>
            {this.state.loaded ? <Text>THE WHOLE APP COMPONENT GOES HERE</Text> : <Animatable.Text animation="slideInDown" style={{ size: '50%' }}>🍃</Animatable.Text>}
        </View>
        )
    }
}

const LoadingView = styles.View`
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
`
