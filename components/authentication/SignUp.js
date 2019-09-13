import React, {Component} from 'react';
import firebase from "react-native-firebase";
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet, TouchableOpacity} from "react-native";
import {addUser} from "../../Serviceclient";

class SignUp extends Component {
    state = {email: '', password: '', verify: '', errorMessage: null}

    handleSignUp = async () => {
        if(this.state.password === this.state.verify) {
            const {email, password} = this.state;
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => alert("Account creation successful"))
                .then(() => this.props.navigation.navigate('Loading'))
                .catch(error => this.setState({errorMessage: error.message}))
            addUser(this.state.email)
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
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft:'20%', marginRight:'30%',}}>
                    <TouchableOpacity  style={styles.button1Style} onPress={this.handleSignUp}>
                        <Text style={styles.textStyle}>Sign Up</Text>
                    </TouchableOpacity>

                <Text>{"\n"}</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.button2Style}>Already have an account? Log In!</Text>
                </TouchableHighlight>
            </View>
                </View>
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
export default SignUp;