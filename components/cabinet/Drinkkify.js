import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList, List, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import firebase from "react-native-firebase";
import {drinkkify, getSomething} from "../../Serviceclient";
import DrinkDetails from "../DrinkDetails";
// import Icon from 'react-native-vector-icons/FontAwesome5';
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
                // style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                style={{flexDirection: 'row', justifyContent: 'space-between', padding: 30, color: '#F6C213', fontFamily: 'Roboto-Black', textAlign: 'center', width: '100%', height:'100%' }}>
{/*<View>*/}
{/*    <Image source={require('./cocktailrow.jpg')}*/}
{/*           style={{width: 350, height: 85}}/>*/}
{/*</View>*/}
                <View>
                    {/*<Image source={require('./cocktailrow.jpg')}*/}
                    {/*       style={{width: 350, height: 85}}/>*/}
                    <Image
                        source={require('./cocktailcolumn.jpg')}
                        style={{width: 50, height: 500, flex: 1, paddingLeft: '5%',}}
                    />
                </View>
                <FlatList
                    // marginLeft={80}
                    marginTop={50}
                    // style={{backgroundColor: 'rgba(225, 225, 225, 0.5)',}}
                    data={this.state.drinks}
                    renderItem={({item}) =>
                        <DrinkDetails
                            name={item.drink_name}
                            instructions={item.drink_instructions}
                            ingredients={item.ingredients}
                        /> }

                    // containerStyle={{borderBottomWidth: 0, }}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={({id}) => id.toString()}
                    color={"#F6C213"}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.7)',

    }
})

export default Drinkkify;