import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet, TouchableOpacity} from "react-native";
import firebase from "react-native-firebase";

class Login extends Component {
    state = {email: '', password: '', errorMessage: null}

    handleLogin = () => {
        const {email, password} = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.setState({email: '', password: ''}))
            .then(() => this.props.navigation.navigate('Loading'))
            .catch(error => this.setState({errorMessage: error.message}))

    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}} >
                {/*<Text>Login</Text>*/}
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <View style = {styles.lineStyle} />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <View style = {styles.lineStyle} />
                <Text>{"\n"}</Text>

                <TouchableOpacity style={styles.button1Style} onPress={this.handleLogin}>
                    <Text style={styles.textStyle}>Log In</Text>
                </TouchableOpacity>

                <Text>{"\n"}</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.button2Style}>Don't have an account? Create a new account here!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    textStyle: {
        color: '#F8EFE4',
        fontFamily: 'Roboto-Black',
        fontSize: 23,
        textAlign: 'center',
    },

    button1Style: {
        backgroundColor: '#E6C2BF',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#F8EFE4',
        fontFamily: 'Roboto-Black',
        fontSize: 23,
        padding: 10,
        textAlign: 'center',
        width: '100%',
        height: 50,
    },
    button2Style: {
        backgroundColor: '#F8EFE4',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 18,
        padding: 10,
        textAlign:'center',
        width: '100%',
        height: 50,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#E6C2BF',
        margin: 10,
        color: '#E6C2BF',
    },


});
export default Login;