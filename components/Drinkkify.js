import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList, StyleSheet} from "react-native";
import firebase from "react-native-firebase";
import {drinkkify, getSomething} from "../Serviceclient";
import DrinkDetails from "./DrinkDetails";

class Drinkkify extends Component {

    state = { currentUser: null, drinks: [], isLoading: true}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
        drinkkify(currentUser.email)
            .then((response) => {
                this.setState({drinks: response,
                    isLoading: false})
                console.log(response)
            })
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "86%",
                    backgroundColor: "#E6C2BF",
                    marginLeft: "5%",
                    marginTop: "2%",
                    color: '#E6C2BF'
                }}
            />
        );
    };

    render() {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View
                style={{flex: 1, padding: 20}}>
                <FlatList
                    marginTop={50}
                    // style={styles.listStyle}
                    data={this.state.drinks}
                    renderItem={({item}) => <DrinkDetails name={item.drink_name} instructions={item.drink_instructions} ingredients={item.ingredients}/>}
                    containerStyle={{borderBottomWidth: 0}}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={({id}) => id.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                />

                {/*<DrinkDetails name={this.state.drinks[0].drink_name} instructions={this.state.drinks[0].drink_instructions} ingredients={this.state.drinks[0].ingredients}/>*/}
            </View>
        );
    }
}

export default Drinkkify;