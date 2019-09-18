import React, {Component} from 'react';
import {Modal, ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";
import firebase from "react-native-firebase";

class ChangePassword extends Component {
    state = {
        user: null,
        modalVisible: false,
        oldPassword: '',
        newPassword: '',
        newPasswordAgain: '',
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible, user: this.props.user});
    }

    changePassword = () => {
        const credential = firebase.auth.EmailAuthProvider.credential(
            this.state.user.email,
            this.state.oldPassword
        );
        this.state.user.reauthenticateWithCredential(credential)
            .then(() => {
                if( this.state.oldPassword === this.state.newPassword) {
                    alert('New password matches old password!')
                } else if(this.state.newPassword === this.state.newPasswordAgain) {

                    this.state.user.updatePassword(this.state.newPassword)
                        .then(() => alert('New password set'))
                        .catch((error) => {console.log(error.message);
                            alert('Something went wrong!')})

                } else if (this.state.newPassword != this.state.newPasswordAgain) {
                    alert("New password doesn't match!")
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
                            <Text>Change your password</Text>
                            <View>

                                <TextInput
                                    secureTextEntry
                                    placeholder="Old Password"
                                    onChangeText={(oldPassword) => this.setState({oldPassword})}
                                    value={this.state.oldPassword}
                                />

                                <TextInput
                                    secureTextEntry
                                    placeholder="New Password"
                                    onChangeText={(newPassword) => this.setState({newPassword})}
                                    value={this.state.newPassword}
                                />

                                <TextInput
                                    secureTextEntry
                                    placeholder="New Password again"
                                    onChangeText={(newPasswordAgain) => this.setState({newPasswordAgain})}
                                    value={this.state.newPasswordAgain}
                                />

                                <TouchableHighlight
                                    onPress={this.changePassword}>
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
                    <Text>Change Password</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default ChangePassword;