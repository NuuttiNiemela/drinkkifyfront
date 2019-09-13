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
            <View style={{flex: 1, paddingTop:20,}}>
                {/*<Text>Sign Up</Text>*/}
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    style={{marginLeft: '12%', color:'#696D3F', fontFamily: 'Roboto-Black'}}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <View style = {styles.lineStyle} />
                <TextInput
                    secureTextEntry
                    style={{marginLeft: '12%', color:'#696D3F', fontFamily: 'Roboto-Black'}}
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <View style = {styles.lineStyle} />
                <TextInput
                    secureTextEntry
                    style={{marginLeft: '12%', color:'#696D3F', fontFamily: 'Roboto-Black'}}
                    placeholder="Verify Password"
                    autoCapitalize="none"
                    onChangeText={verify => this.setState({ verify })}
                    value={this.state.verify}
                />
                <View style = {styles.lineStyle} />
                <Text>{"\n"}</Text>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft:'20%', marginRight:'30%',}}>
                    <TouchableOpacity  onPress={this.handleSignUp}>
                        <Text style={styles.button1Style}>{"\n"}Sign Up</Text>
                    </TouchableOpacity>

                <Text>{"\n"}</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.button2Style}>{"\n"}Log In</Text>
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
        borderColor: '#B2C8D4',
        marginRight: '20%',
        marginLeft: '12%',
        color: '#B2C8D4',

    },
});
export default SignUp;