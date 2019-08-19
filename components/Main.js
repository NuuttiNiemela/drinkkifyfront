import React, {Component, Fragment} from 'react';
import ModalExample from "../ModalExample";
import {getAll} from "../Serviceclient";
import {ActivityIndicator, View} from 'react-native';

class Main extends Component {
    state = {drinks: [], isLoading: true};

    getDrinks = () => {
        getAll()
            .then((response) => {
                this.setState({
                    isLoading: false,
                    drinks: response
                })
            })
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
                <ModalExample/>
            </Fragment>
        );
    }
}

export default Main;