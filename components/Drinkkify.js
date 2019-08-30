import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from "react-native";
import firebase from "react-native-firebase";
import {getSomething} from "../Serviceclient";
import DrinkDetails from "./DrinkDetails";

class Drinkkify extends Component {

    state = { currentUser: null, drinks: [], isLoading: true}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
        getSomething('kossu-v')
            .then((response) => {
                this.setState({drinks: response,
                    isLoading: false})
            })
    }

    render() {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View>
                <DrinkDetails name={this.state.drinks[0].drink_name} instructions={this.state.drinks[0].drink_instructions} ingredients={this.state.drinks[0].ingredients}/>
            </View>
        );
    }
}

export default Drinkkify;