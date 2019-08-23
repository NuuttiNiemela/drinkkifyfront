import React, {Component, Fragment, useRef} from 'react';
import ModalExample from "../ModalExample";
import {getAll, getAllIngredients} from "../Serviceclient";
import {ActivityIndicator, View, Button} from 'react-native';
import Drinks from "./Drinks";


class Main extends Component {
    state = {drinks: [], ingredients: [], isLoading: false};

    getDrinks = () => {
        getAll()
            .then((response) => {
                console.log(response)
                this.setState({
                    drinks: response,
                    isLoading: false,
                })
                console.log(this.state)
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



    componentDidMount = () => {
        this.getDrinks();
        this.getIngredients();
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
                <Drinks drinks={this.state.drinks} ingredients={this.state.ingredients}/>
                <Button
                title="Search"
                onPress={() => this.props.navigation.navigate('Search')} />
            </Fragment>
        );
    }
}

export default Main;