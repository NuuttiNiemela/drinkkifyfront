import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ingredient from "./Ingredient";
import {getCabinet, getAllIngredients} from "../Serviceclient";
import CabinetIngredient from "./CabinetIngredient";


class Cabinet extends Component {
    state = { currentUser: null, ingredients: [], cabinetIngredients: []}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
        getCabinet()
            .then((response) => {
                this.setState({cabinetIngredients: response})
                console.log('cabinet: ' + this.state.cabinetIngredients)
            })
        getAllIngredients()
            .then((response) => {
                this.setState({ingredients: response})
            })

    }



    render() {
        const ingredientrows = this.state.ingredients
            .map(function(ingredient) {
                return(<CabinetIngredient ingredient={ingredient} key={ingredient.id.toString()}/>);
            });
        return (
            <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <View style={{flex: 1, paddingTop: 20}} >

                <Text style={styles.textStyle}>Welcome {this.state.currentUser && this.state.currentUser.email}!</Text>
                <Text>{"\n"}</Text>
                <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                    <Text style={styles.buttonStyle}>Sing out</Text>
                </TouchableOpacity>
                <Text>{"\n"}</Text>
                {ingredientrows}
            </View>
            </ScrollView>
                <TouchableOpacity
                    style={styles.button2Style}
                    onPress={() => this.props.navigation.navigate('Search')}>
                    <Text>Add ingredient</Text>
            </TouchableOpacity>
            </View>



        );
    }
}

const styles = StyleSheet.create({

    textStyle: {
        padding: 2,
        marginLeft:5,
        fontSize: 18,
        textAlign: 'center',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
    },

    scrollView: {
        backgroundColor: 'white',
    },

    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 12,
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'RobotoSlab-Black',
        fontSize: 25,
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        width: '100%',
        height: 60,
    },

    button2Style: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'RobotoSlab-Black',
        fontSize: 25,
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        position: 'absolute',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#E6C2BF',
        margin: 10,
    },

});
export default Cabinet;