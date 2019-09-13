import React, {Component, Fragment, useRef} from 'react';
import {getAll, getSomething, getAllIngredients} from "../Serviceclient";
import {Text, TouchableOpacity, ActivityIndicator, View, Button, TextInput, Keyboard, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import Drinks from "./Drinks";
import _ from 'lodash';
import AddDrink from "./AddDrink";
import AddDrink2 from "./AddDrink2";
import AddDrink4 from "./AddDrink4";

class Main extends Component {


    state = {drinks: [], ingredients: [], isLoading: true, searchedDrinks: [], query: ""};

    componentDidMount = () => {
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.onLoad()
        })
    }

    onLoad = () => {
        this.getDrinks();
        this.getIngredients();
    }

    getDrinks = () => {
        getAll()
            .then((response) => {
                this.setState({
                    drinks: response,
                    searchedDrinks: response,
                    isLoading: false,
                })
            })
            .catch((error) => console.log('Error:' + error.message))
    }


    getIngredients = () => {
        getAllIngredients()
            .then((response) => {
                this.setState({
                    ingredients: response
                })
            })
            .catch((error) => console.log('Virhe ingredientsien haussa:' + error.message))
    }



    searchDrinks = _.debounce((d) => {
        getSomething(d)
            .then((response) => {
                this.setState({
                    drinks: response,
                    isLoading: false,
                })
            })
            .catch((error) => console.log('Error:' + error.message))
    }, 250);

    search = (ev) => {
        ev.preventDefault()
        console.log(this.state)
        this.searchDrinks(this.state.query)
        Keyboard.dismiss();
    }

    componentWillUnmount() {
        this.focusListener.remove();
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
                    <TextInput
                        style={styles.input}
                        placeholder="Type here to search drinks"
                        onChangeText={(query) => this.setState({query})}
                        value={this.state.query}
                    />
                    <Icon
                        style={styles.searchIcon}
                        name="search"
                        size={30}
                        color="#698D3F"
                        onPress={this.search}
                    />

                </View>
                <Drinks drinks={this.state.drinks}/>

                {/*<AddDrink2 update={this.getDrinks} />*/}
                <AddDrink4 all={this.state.ingredients.map((ingredient) => {ingredient.name=ingredient.ingredient_name; return ingredient} )} update={this.getDrinks}/>

            </Fragment>
        );
    }
}


const styles = StyleSheet.create({

    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#E6C2BF',
        margin: 10,
    },

    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 2,
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
        flex: 2,
        // position: 'absolute',
    },
    searchSection: {
        // flex: 2,
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%'
    },
    searchIcon: {
        padding: 1,
        marginLeft: 1,
        // flex: 1,

    },
    input: {
        // flex: 2,
        // paddingTop: 2,
        // paddingRight: 2,
        // paddingBottom: 2,
        // paddingLeft: 2,
        padding: 1,
        backgroundColor: '#F6E2AD',
        color: '#424242',
        marginLeft: 40,
        width: '80%',

    },


});

export default Main;