import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Button, Header} from 'react-native'
import firebase from 'react-native-firebase'
import Cabinet from "../cabinet/Cabinet";
import Login from "./Login";
import axios from 'react-native-axios'
import {Image} from "react-native-elements";

class LoadingSwitch extends Component {

    componentDidMount() {

        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    return firebase.auth().currentUser.getIdToken()
                        .then(idToken => {axios.defaults.headers.common['Authorization'] = idToken})
                        .then(() => this.props.navigation.navigate('Cabinet'))
                } else {
                    axios.defaults.headers.common['Authorization'] = null;
                    this.props.navigation.navigate('Login')
                }
            })
        })
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text style={{color: '#698D3F', fontFamily: 'Roboto-Black', fontSize: 20}}> Welcome to </Text>
                <View>
                    <Image source={require('./Drinkkify.png')}
                           style={{width: 167, height: 58,}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 217,
        height: 138,
    },
})

export default LoadingSwitch;