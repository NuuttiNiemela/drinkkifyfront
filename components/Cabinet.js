import React, {Component} from 'react';
import {getAllIngredients} from "../Serviceclient";
import {View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";
import Ingredient from "./components/Ingredient";

class Cabinet extends Component {
    state = { currentUser: null, ingredients: []}

    // getIngredients = () => {
    //     getAllIngredients()
    //         .then((response) => {
    //             console.log(response)
    //             this.setState({
    //                 ingredients: response
    //             })
    //             console.log(this.state)
    //         })
    //         .catch((error) => console.log('Virhe ingredientsien haussa:' + error.message))
    // }

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
        // this.getIngredients();
    }

    render() {
        // const ingredientrows = this.state.ingredients
        //     .map(function(drink_ingr) {
        //         return(<Ingredient ingredient={drink_ingr} key={drink_ingr.id.toString()}/>);
        //     });
        return (
            <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>Hi {this.state.currentUser && this.state.currentUser.email}</Text>
                <TouchableHighlight onPress={() => firebase.auth().signOut()}>
                    <Text>Sign Out</Text>
                </TouchableHighlight>
                {ingredientrows}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Search')}>
                    <Text style={styles.buttonStyle}>Lisää juoma</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({

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
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'gold',
        color: 'gold',
        fontFamily: 'RobotoSlab-Thin',
        fontSize: 30,
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: 'gold',
        margin: 10,
    },

});
export default Cabinet;