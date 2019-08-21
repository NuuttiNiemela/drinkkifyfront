import React, {Component} from 'react';
import {View, Text, TextInput, Button} from "react-native";

class Login extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}} >
                <Text>Please Enter your credentials</Text>
                <TextInput placeholder="Email" />
                <TextInput secureTextEntry placeholder="Password" />
                <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}

export default Login;