import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Ingredient from "./Ingredient";
import {getCabinet, getAllIngredients, addToCabinet, removeFromCabinet} from "../Serviceclient";
import CabinetIngredient from "./CabinetIngredient";


class Cabinet extends Component {
    state = { currentUser: null, ingredients: [], cabinetIngredients: []}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
        getCabinet(currentUser.email)
            .then((response) => {
                if (response.length > 0)
                this.setState({cabinetIngredients: response})
            })
            .catch(error => console.log(error.message))
    }

    signOutUser = async () => {
            await firebase.auth().signOut()
                .then(() => {this.setState({currentUser: null})})
    }

    deleteIngredient = (i) => {
        removeFromCabinet(this.state.currentUser.email, i)
            .catch(() => alert("Adding didn't work"))
    }

    render() {
            const ingredientrows = this.state.cabinetIngredients
                .map((ingredient) => {
                    return (<CabinetIngredient ingredient={ingredient} key={ingredient.ingredients_id.toString()} delete={this.deleteIngredient} />);
                });

        return (
            <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <View style={{flex: 1, paddingTop: 20}} >

                <Text style={styles.textStyle}>Welcome {this.state.currentUser && this.state.currentUser.email}!</Text>
                <Text>{"\n"}</Text>
                <TouchableOpacity onPress={this.signOutUser}>
                    <Text style={styles.buttonStyle}>Sign out</Text>
                </TouchableOpacity>
                <Text>{"\n"}</Text>
                {ingredientrows}
                <TouchableOpacity
                    style={styles.button2Style}
                    onPress={() => this.props.navigation.navigate('Search')}>
                    <Text>Add Ingredient</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
                <TouchableOpacity
                    style={styles.button2Style}
                    onPress={() => this.props.navigation.navigate('Drinkkify')}>
                    <Text>Drinkkify</Text>
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
        borderWidth: 3,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: '100%',
        height: 60,
    },

    button2Style: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        // position: 'absolute',
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