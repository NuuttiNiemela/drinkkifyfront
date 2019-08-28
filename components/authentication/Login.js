import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight} from "react-native";
import firebase from "react-native-firebase";

class Login extends Component {
    state = {email: '', password: '', errorMessage: null}

    handleLogin = () => {
        const {email, password} = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            // .then(()=> alert(this.state.password))
            .then(() => this.setState({email: '', password: ''}))
            .then(() => this.props.navigation.navigate('Loading'))
            .catch(error => this.setState({errorMessage: error.message}))

    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>Login</Text>
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Don't have an account? create a new one!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Login;