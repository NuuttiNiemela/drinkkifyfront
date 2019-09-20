import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import firebase from "react-native-firebase";
import {drinkkify, getSomething} from "../../Serviceclient";
import DrinkDetails from "../DrinkDetails";
import {Image} from "react-native-elements";
import _ from "lodash";

class Drinkkify extends Component {

    state = { currentUser: null, drinks: [], isLoading: true}

    async componentDidMount() {
        const {currentUser} = await firebase.auth()
        this.setState({currentUser},
            this.getDrinkkify)
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.getDrinkkify()
        })

    }

    getDrinkkify = () => {
        drinkkify(this.state.currentUser.email)
            .then((response) => {
                this.setState({drinks: response,
                    isLoading: false})
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

    renderComponent = () => {
        return (
            <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                <Text>There are no drinks from your ingredients!</Text>
                <Text>Disagree?{"\n"}</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Add Drink')}
                >
                    <Text>Add Drink!</Text>
                </TouchableOpacity>
            </View>
        )
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
        if(!this.state.isLoading && this.state.drinks.length < 1) {
            return(
                this.renderComponent()
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