import React, {Component} from 'react';
import firebase from "react-native-firebase";
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet, TouchableOpacity} from "react-native";

class SignUp extends Component {
    state = {email: '', password: '', verify: '', errorMessage: null}

    handleSignUp = () => {
        if(this.state.password === this.state.verify) {
            const {email, password} = this.state
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => alert("Account creation successful"))
                .then(() => this.props.navigation.navigate('Login'))
                .catch(error => this.setState({errorMessage: error.message}))
        } else {
            alert("Your passwords doesn't match")
        }
    }

    render() {
        return (
            <View>
                {/*<Text>Sign Up</Text>*/}
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <View style = {styles.lineStyle} />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <View style = {styles.lineStyle} />
                <TextInput
                    secureTextEntry
                    placeholder="Verify Password"
                    autoCapitalize="none"
                    onChangeText={verify => this.setState({ verify })}
                    value={this.state.verify}
                />
                <View style = {styles.lineStyle} />
                <Text>{"\n"}</Text>
                <View style={styles.container}>
                    <TouchableOpacity  onPress={this.handleLogin}>
                        <Text style={styles.button1Style}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                {/*<Button title="Sign Up" onPress={this.handleSignUp} />*/}
                <Text>{"\n"}</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.button2Style}>Already have an account? Log In!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    button1Style: {
        backgroundColor: '#E6C2BF',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: 'white',
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        width: '100%',
        height: 50,
    },
    button2Style: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#E6C2BF',
        color: '#E6C2BF',
        fontFamily: 'Roboto-Black',
        fontSize: 15,
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
export default SignUp;