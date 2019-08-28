import React, {Component, Fragment, useRef} from 'react';
import {getAll, getSomething, getAllIngredients} from "../Serviceclient";
import {Text, TouchableOpacity, ActivityIndicator, View, Button, TextInput, Keyboard, StyleSheet} from 'react-native';
import {Icon} from "react-native-elements";
import Drinks from "./Drinks";
import _ from 'lodash';
import AddDrink from "./AddDrink";

class Main extends Component {


    state = {drinks: [], ingredients: [], isLoading: true, searchedDrinks: [], query: ""};


    getDrinks = () => {
        getAll()
            .then((response) => {
                this.setState({
                    drinks: response,
                    searchedDrinks: response,
                    isLoading: false,
                })
                console.log('moi ' + this.state)
            })
            .catch((error) => console.log('TÄSSÄ:' + error.message))
    }


    getIngredients = () => {
        getAllIngredients()
            .then((response) => {
                console.log(response)
                this.setState({
                    ingredients: response
                })
                console.log(this.state)
            })
            .catch((error) => console.log('Virhe ingredientsien haussa:' + error.message))
    }



    searchDrinks = _.debounce((d) => {
        console.log('TÄSÄTÄSÄTÄSÄTÄSÄTÄSÄ' + d)
        getSomething(d)
            .then((response) => {
                this.setState({
                    drinks: response,
                    isLoading: false,
                })
            })
            .catch((error) => console.log('TÄSSÄ:' + error.message))
    }, 250);

    componentDidMount = () => {
        this.getDrinks();
        this.getIngredients();
    }

    search = (ev) => {
        ev.preventDefault()
        console.log(this.state)
        this.searchDrinks(this.state.query)
        Keyboard.dismiss();
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

            <Fragment>
                <View style={styles.searchSection}>
                    <Icon
                        style={styles.searchIcon}
                        name="search"
                        size={30}
                        color="black"
                        onPress={this.search}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search drinks"
                        onChangeText={(query) => this.setState({query})}
                        value={this.state.query}
                    />
                    <TouchableOpacity
                        onPress={this.search}>
                        <Text style={styles.buttonStyle}>Search drinks</Text>
                    </TouchableOpacity>
                </View>
                <Drinks drinks={this.state.drinks}/>


                <AddDrink update={this.getDrinks}/>
            </Fragment>

        );
    }
}


const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'gold',
        color: '#FAD02C',
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        // fontWeight: 'bold',
        overflow: 'hidden',
        padding: 2,
        textAlign:'center',
        width: '100%',
        alignSelf: 'stretch',
    },
    searchSection: {
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%'
    },
    searchIcon: {
        padding: 1,
        marginLeft: 1,
    },
    input: {
        // flex: 1,
        paddingTop: 2,
        paddingRight: 2,
        paddingBottom: 2,
        paddingLeft: 2,
        backgroundColor: '#fff',
        color: '#424242',
        marginLeft: 1,
    },


});

export default Main;