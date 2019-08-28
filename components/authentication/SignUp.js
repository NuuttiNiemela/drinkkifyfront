import React, {Component} from 'react';
import firebase from "react-native-firebase";
import {View, Text, TextInput, Button, TouchableHighlight} from "react-native";

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
                <Text>Sign Up</Text>
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
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Verify Password"
                    autoCapitalize="none"
                    onChangeText={verify => this.setState({ verify })}
                    value={this.state.verify}
                />
                <Button title="Sign Up" onPress={this.handleSignUp} />
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Already have an account? Login!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default SignUp;