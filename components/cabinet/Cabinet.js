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
} from 'react-native';
import firebase from "react-native-firebase";
import {getCabinet, getAllIngredients, addToCabinet, removeFromCabinet} from "../../Serviceclient";
import CabinetIngredient from "./CabinetIngredient";
import {Icon} from "react-native-elements";
import MenuButton from "../navigation/MenuButton";


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
                <Text style={styles.textStyle}>Welcome to Drinkkify {this.state.currentUser && this.state.currentUser.email}!</Text>
                <Text>{"\n"}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft:'10%', marginRight:'10%',}}>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Drinkkify')}>
                    <Text style={styles.buttonDrinkkify}>{"\n"}Drinkkify</Text>
                </TouchableOpacity>

            </View>
            </View>
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
    buttonSignOut: {
        justifyContent: 'center',
        backgroundColor: '#EBEEF3',
        // borderWidth: 3,
        borderRadius: 80/ 2,
        // borderColor: '#E6C2BF',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 80,
        height: 80,
        elevation: 5,
        position: 'relative',
    },
    buttonAdd: {
        justifyContent: 'center',
        backgroundColor: '#F6E2AD',
        // borderWidth: 3,
        borderRadius: 80/ 2,
        // borderColor: '#E6C2BF',
        color: '#698D3F',
        fontFamily: 'Roboto-Black',
        fontSize: 14,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 80,
        height: 80,
        elevation: 5,
        position: 'relative',
    },
    buttonDrinkkify: {
        justifyContent: 'center',
        backgroundColor: '#F8DA74',
        // borderWidth: 4,
        borderRadius: 120/ 2,
        // borderColor: '#F6C213',
        color: 'white',
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        padding: 5,
        textAlign:'center',
        // fontWeight: 'bold',
        width: 120,
        height: 120,
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