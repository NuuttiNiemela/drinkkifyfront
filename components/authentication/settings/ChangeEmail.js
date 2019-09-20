import React, {Component} from 'react';
import firebase from "react-native-firebase";
import {Modal, ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";
import {editUser} from "../../../Serviceclient";

class ChangeEmail extends Component {
    state = {
        user: null,
        modalVisible: false,
        password: '',
        newEmail: '',
        newEmailAgain: '',
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible, user: this.props.user});
    }

    changeEmail = () => {
        const credential = firebase.auth.EmailAuthProvider.credential(
            this.state.user.email,
            this.state.password
        );
        this.state.user.reauthenticateWithCredential(credential)
            .then(() => {
                if(this.state.newEmail === this.state.newEmailAgain) {

                    this.state.user.updateEmail(this.state.newEmail)
                        .then(() => editUser(this.state.user.email,this.state.newEmail))
                        .then(() => alert('Email changed!'))
                        .then(() => this.setState({password: '', newEmail: '', newEmailAgain: '', modalVisible: false}))
                        .catch((error) => {console.log(error.message);
                            alert('Something went wrong!')})

                } else if (this.state.newEmail != this.state.newEmailAgain) {
                    alert("Emails don't match!")
                } else {
                    alert('Something went wrong!')
                }
            })
            .catch(error => {console.log(error.message);
                alert('Something went wrong!')
            })
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{Color:'black'}}>
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                        >
                            <Text>Change your Email</Text>
                            <View>

                                <TextInput
                                    secureTextEntry
                                    placeholder="Your Password"
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}
                                />

                                <TextInput
                                    placeholder="New Email"
                                    onChangeText={(newEmail) => this.setState({newEmail})}
                                    value={this.state.newEmail}
                                />

                                <TextInput
                                    placeholder="New Email again"
                                    onChangeText={(newEmailAgain) => this.setState({newEmailAgain})}
                                    value={this.state.newEmailAgain}
                                />

                                <TouchableHighlight
                                    onPress={this.changeEmail}>
                                    <Text>Submit</Text>
                                </TouchableHighlight>

                                <Text> </Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Cancel</Text>
                                </TouchableHighlight>
                                <Text>{"\n"}</Text>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Change Email</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default ChangeEmail;