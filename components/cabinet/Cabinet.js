import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Flex,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import firebase from "react-native-firebase";
import {getCabinet, getAllIngredients, addToCabinet, removeFromCabinet} from "../../Serviceclient";
import CabinetIngredient from "./CabinetIngredient";
import {Icon} from "react-native-elements";
import MenuButton from "../navigation/MenuButton";


class Cabinet extends Component {
    state = { currentUser: null, ingredients: [], cabinetIngredients: []}

    async componentDidMount() {
        const {currentUser} = await firebase.auth()
        this.setState({currentUser},
            this.getYourCabinet)
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.getYourCabinet()
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
            <ImageBackground
                source={require('./Cocktail-List.jpg')}
                style={{width:'80%', height: '10%', flexDirection: 'column', alignContent:'center', marginLeft: '10%', marginRight:'10%'}}
            >

            <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginLeft:'10%', marginRight:'10%',}}>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Drinkkify')}>
                    <Text style={styles.buttonDrinkkify}>{"\n"}Drinkkify</Text>
                </TouchableOpacity>

            </View>
            </ImageBackground>


        )
    }

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

            <View style={{flex: 1, paddingTop: 5, marginLeft:"9%", marginRight:"8%"}} >
                <Text>{"\n"}</Text>
                {ingredientrows}
            </View>

                <TouchableOpacity
                    style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%', marginBottom: '10%'}}
                    onPress={() => this.props.navigation.navigate('Add Ingredient')}>
                    <Text style={styles.buttonAdd}>{"\n"}Add Ingredient</Text>
                </TouchableOpacity>

            </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    textStyle: {
        padding: 2,
        marginLeft:46,
        fontSize: 15,
        textAlign: 'left',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
        // backgroundColor: 'white'
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
    buttonAdd: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 90/ 2,
        borderColor: '#F6C213',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        padding: 6,
        textAlign:'center',
        fontWeight: 'bold',
        width: 90,
        height: 90,
        elevation: 5,
        position: 'relative',
    },
    buttonDrinkkify: {
        // justifyContent: 'center',
        // alignSelf: 'flex-end',
        backgroundColor: 'white',
        borderWidth: 4,
        borderRadius: 110/ 2,
        borderColor: '#698D3F',
        color: '#F6C213',
        fontFamily: 'Roboto-Black',
        fontSize: 23,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 110,
        height: 110,
        elevation: 5,
        position: 'relative',
        marginTop: 140,
    },
    buttonSignOut: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderRadius: 60/ 2,
        borderColor: '#698D3F',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 60,
        height: 60,
        elevation: 5,
        position: 'relative',
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#698D3F',
        margin: 10,
    },

});
export default Cabinet;