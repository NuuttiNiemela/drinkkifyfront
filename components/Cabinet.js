import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import firebase from "react-native-firebase";

class Cabinet extends Component {
    state = { currentUser: null}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
    }



    render() {
        return (
            <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>Hi {this.state.currentUser && this.state.currentUser.email}</Text>
                <TouchableHighlight onPress={() => firebase.auth().signOut()}>
                    <Text>Sign Out</Text>
                </TouchableHighlight>


                <Text style={styles.viinaStyle}>Koskenkorva</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Gin</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Jägermeister</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Galliano</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Vodka</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Shamppanja</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Valkoviini</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Salmiakki</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Kahlua</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Roseviini</Text>
                <View style = {styles.lineStyle} />
                <Text style={styles.viinaStyle}>Punaviini</Text>
                <View style = {styles.lineStyle} />
            </View>
            </ScrollView>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Search')}>
                    <Text style={styles.buttonStyle}>Add ingredient</Text>
            </TouchableOpacity>
            </View>



        );
    }
}

const styles = StyleSheet.create({

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