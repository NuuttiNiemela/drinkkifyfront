import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ingredient from "./Ingredient";
import {getAll} from "../Serviceclient";


class Cabinet extends Component {
    state = { currentUser: null, ingredients: ''}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
        getAll()
            .then((response) => {
                this.setState({ingredients: response.ingredients})
            })
    }



    render() {
        return (
            <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <View style={{flex: 1, paddingTop: 20}} >
                <Text style={styles.textStyle}>Hi {this.state.currentUser && this.state.currentUser.email}</Text>
            <View>
                <TouchableHighlight onPress={() => firebase.auth().signOut()}>
                    <Button
                        title="Sign out"
                        type="outline"
                        buttonStyle={{backgroundColor:"white", borderColor: "yellow", borderRadius:12, borderWidth: 2}}
                        titleStyle={{color:"black", fontSize:25}}
                    />
                </TouchableHighlight>
            </View>
                {/*<Text style={styles.viinaStyle}>Koskenkorva</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Gin</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Jägermeister</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Galliano</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Vodka</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Shamppanja</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Valkoviini</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Salmiakki</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Kahlua</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Roseviini</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}
                {/*<Text style={styles.viinaStyle}>Punaviini</Text>*/}
                {/*<View style = {styles.lineStyle} />*/}


            </View>
            </ScrollView>
            {/*    <TouchableOpacity*/}
            {/*        onPress={() => this.props.navigation.navigate('Search')}>*/}
            {/*        <Text style={styles.button2Style}>Add ingredient</Text>*/}
            {/*</TouchableOpacity>*/}
            </View>



        );
    }
}

const styles = StyleSheet.create({

    titleStyle: {
        padding: 2,
        marginLeft:2,
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

    button2Style: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'gold',
        color: 'gold',
        fontFamily: 'RobotoSlab-Black',
        fontSize: 25,
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        fontWeight: 'bold',
        position: 'absolute',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: 'gold',
        margin: 10,
    },

});
export default Cabinet;