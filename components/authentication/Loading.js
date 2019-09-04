import React, {Component} from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native'
import firebase from 'react-native-firebase'
import Cabinet from "../Cabinet";
import Login from "./Login";
import axios from 'react-native-axios'

class Loading extends Component {
    state = {isLogged: null, token: ''}

    componentDidMount() {


        const {navigation} = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    return firebase.auth().currentUser.getIdToken()
                        .then(idToken => {this.setState({token: idToken, isLogged: true})})
                        .then(() => axios.defaults.headers.common['Authorization'] = this.state.token)
                    .then(() => this.props.navigation.navigate('Cabinet'))
                } else {
                    this.setState({isLogged: false, token: ''})
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
                <Text>Welcome to the world of Drinkkify!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading;