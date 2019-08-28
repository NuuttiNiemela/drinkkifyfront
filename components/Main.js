import React, {Component, Fragment, useRef} from 'react';
import {getAll, getSomething, getAllIngredients} from "../Serviceclient";
import {ActivityIndicator, View, Button, TextInput, Keyboard} from 'react-native';


import Drinks from "./Drinks";
import _ from 'lodash';
import AddDrink3 from "./AddDrink3";

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
                <TextInput
                    placeholder="Type here"
                    onChangeText={(query) => this.setState({query})}
                    value={this.state.query}
                />

                <Button
                    title="Search"
                    onPress={this.search} />

                <Drinks drinks={this.state.drinks}/>
                <AddDrink3 update={this.getDrinks} drink_ingredients={this.state.ingredients}/>

            </Fragment>

        );
    }
}



export default Main;