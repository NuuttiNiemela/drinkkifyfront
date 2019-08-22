import React, {Component, Fragment, useRef} from 'react';
import ModalExample from "../ModalExample";
import {getAll} from "../Serviceclient";
import {ActivityIndicator, View, Button} from 'react-native';
import Drinks from "./Drinks";


class Main extends Component {
    state = {drinks: [], isLoading: false};

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
                <Button
                title="Search"
                onPress={() => this.props.navigation.navigate('Search')} />
            </Fragment>
        );
    }
}

export default Main;