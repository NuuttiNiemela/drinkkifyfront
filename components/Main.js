import React, {Component, Fragment, useRef} from 'react';
import ModalExample from "../ModalExample";
import {getAll} from "../Serviceclient";
import {ActivityIndicator, View} from 'react-native';
import Drinks from "./Drinks";
import AddDrink from "./AddDrink";


class Main extends Component {
    state = {drinks: [], isLoading: true};

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

    componentDidMount = () => {
        this.getDrinks();
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
                <Drinks drinks={this.state.drinks}/>
                {/*<AddDrink drink={this.state.drink}/>*/}
            </Fragment>
        );
    }
}

export default Main;