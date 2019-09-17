import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList, StyleSheet} from "react-native";
import firebase from "react-native-firebase";
import {drinkkify, getSomething} from "../../Serviceclient";
import DrinkDetails from "../DrinkDetails";
import {Image} from "react-native-elements";

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
                    backgroundColor: "#F6C213",
                    marginLeft: "5%",
                    marginTop: "2%",
                    color: '#F6C213'
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
                style={{flex: 1, padding: 30, color: '#F6C213', fontFamily: 'Roboto-Black'}}>
                <FlatList
                    marginTop={50}
                    // style={styles.listStyle}
                    data={this.state.drinks}
                    renderItem={({item}) => <DrinkDetails name={item.drink_name} instructions={item.drink_instructions} ingredients={item.ingredients}/>}
                    containerStyle={{borderBottomWidth: 0}}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={({id}) => id.toString()}
                    color={"#F6C213"}
                />
            </View>
        );
    }
}

export default Drinkkify;