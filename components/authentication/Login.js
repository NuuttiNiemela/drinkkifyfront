import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet, TouchableOpacity} from "react-native";
import firebase from "react-native-firebase";

class Login extends Component {
    state = {email: '', password: '', errorMessage: null}

    handleLogin = async () => {
        const {email, password} = this.state
        await firebase
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
                    style={{marginLeft: '12%', color:'#696D3F', fontFamily: 'Roboto-Black'}}
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <View style = {styles.lineStyle} />
                <TextInput
                    secureTextEntry
                    autoCapitalize="none"
                    style={{marginLeft: '12%', color:'#696D3F', fontFamily: 'Roboto-Black'}}
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <View style = {styles.lineStyle} />
                <Text>{"\n"}</Text>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft:'20%', marginRight:'30%',}}>
                <TouchableOpacity onPress={this.handleLogin}>
                    <Text style={styles.button1Style}>{"\n"}Log In</Text>
                </TouchableOpacity>

                <Text>{"\n"}</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.button2Style}>{"\n"}Sign Up</Text>
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
        justifyContent: 'center',
        backgroundColor: '#B2C8D4',
        // borderWidth: 3,
        borderRadius: 80/ 2,
        // borderColor: '#E6C2BF',
        color: 'white',
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 80,
        height: 80,
        elevation: 5,
        position: 'relative',

    },
    button2Style: {
        justifyContent: 'center',
        backgroundColor: 'white',
        // borderWidth: 3,
        borderRadius: 80/ 2,
        // borderColor: '#E6C2BF',
        color: '#B2C8D4',
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        padding: 5,
        textAlign:'center',
        fontWeight: 'bold',
        width: 80,
        height: 80,
        elevation: 5,
        position: 'relative',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#698D3F',
        marginRight: '20%',
        marginLeft: '12%',
        color: '#698D3F',
    },


});
export default Login;