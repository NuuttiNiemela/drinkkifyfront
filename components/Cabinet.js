import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Flex, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";
import {withNavigation} from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Ingredient from "./Ingredient";
import {getCabinet, getAllIngredients, addToCabinet, removeFromCabinet} from "../Serviceclient";
import CabinetIngredient from "./CabinetIngredient";


class Cabinet extends Component {
    state = { currentUser: null, ingredients: [], cabinetIngredients: []}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser},
            this.getYourCabinet)
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            if(this.state.currentUser != null) this.getYourCabinet()
                .then(r => console.log('mitä ' + r))
        })
    }

    getYourCabinet = async () => {
        await getCabinet(this.state.currentUser.email)
            .then((response) => {
                if (response) {
                    this.setState({cabinetIngredients: response})
                } else {
                    this.setState({cabinetIngredients: []})
                }
            })
    }

    signOutUser = async () => {
            await firebase.auth().signOut()
                .then(() => {this.setState({currentUser: null, cabinetIngredients: []})})
    }

    deleteIngredient = (i) => {
        removeFromCabinet(this.state.currentUser.email, i)
            .then(this.getYourCabinet)
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    renderComponent = () => {
        return(
        <View style={{backgroundColor: 'white'}}>
            <View>
                <Text style={styles.textStyle}>Welcome {this.state.currentUser && this.state.currentUser.email}!</Text>
                <Text>{"\n"}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft:'10%', marginRight:'10%',}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Search')}>
                    <Text style={styles.buttonStyle}>{"\n"}Add {"\n"}Ingredient</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{shadowColor: '#F6C213', // IOS
                        shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1, //IOS
                        elevation: 2,}} onPress={() => this.props.navigation.navigate('Drinkkify')}
                    onPress={() => this.props.navigation.navigate('Drinkkify')}>
                    <Text style={styles.buttonDrinkkify}>{"\n"}Drinkkify</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.signOutUser}>
                    <Text style={styles.buttonStyle}>{"\n"}Sign{"\n"}out</Text>
                </TouchableOpacity>
            </View>
            </View>
        )}

    render() {

            const ingredientrows = this.state.cabinetIngredients
                .map((ingredient) => {
                    return (<CabinetIngredient ingredient={ingredient} key={ingredient.ingredients_id.toString()} delete={this.deleteIngredient} />);
                });

        return (
            <View>

            <ScrollView
                stickyHeaderIndices={[0]}
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                {this.renderComponent()}

            <View style={{flex: 1, paddingTop: 20}} >
                <Text>{"\n"}</Text>
                {ingredientrows}
            </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    textStyle: {
        padding: 2,
        marginLeft:5,
        fontSize: 20,
        textAlign: 'center',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
    },
    scrollView: {
        backgroundColor: 'white',
    },

    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 12,
    },
    buttonStyle: {
        justifyContent: 'center',
        backgroundColor: '#F8EFE4',
        borderWidth: 3,
        borderRadius: 80/ 2,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 80,
        height: 80,
    },
    buttonDrinkkify: {
        justifyContent: 'center',
        backgroundColor: '#F8DA74',
        borderWidth: 4,
        borderRadius: 100/ 2,
        borderColor: '#F6C213',
        color: 'white',
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        padding: 5,
        textAlign:'center',
        // fontWeight: 'bold',
        width: 100,
        height: 100,
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#E6C2BF',
        margin: 10,
    },

});
export default Cabinet;