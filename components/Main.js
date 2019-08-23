import React, {Component, Fragment, useRef} from 'react';
import ModalExample from "../ModalExample";

import {getAll, getSomething, getAllIngredients} from "../Serviceclient";
import {ActivityIndicator, View, Button, TextInput} from 'react-native';

import Drinks from "./Drinks";
import _ from 'lodash';
import AddDrink from "./AddDrink";

class Main extends Component {

    state = {drinks: [], isLoading: false, query: ""};

    getDrinks = () => {
        getAll()
            .then((response) => {
                this.setState({
                    drinks: response,
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
                    drinks: [response],
                    isLoading: false,
                })
            })
            .catch((error) => console.log('TÄSSÄ:' + error.message))
    }, 250);

    componentDidMount = () => {
        this.getDrinks();
        this.getIngredients();
        console.log(this.state.ingredients);
    }

    handleQuery = (ev) => {
        this.setState({query: ev.target.value})
    }

    search = (ev) => {
        ev.preventDefault()
        console.log(this.state)
        this.searchDrinks(this.state.query)
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
                    onChange={this.handleQuery}
                    value={this.state.query}
                />
                <Drinks drinks={this.state.drinks}/>
                <Button
                title="Search"
                onPress={this.search} />
                <AddDrink/>
            </Fragment>
        );
    }
}

export default Main;