import React, {Component} from 'react';
import {Modal, ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";

class ChangePassword extends Component {
    state = {
        modalVisible: false,
        oldPassword: '',
        newPassword: '',
        newPasswordAgain: '',
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
                            <View>

                                <TextInput
                                    placeholder="Old Password"
                                    onChangeText={(oldPassword) => this.setState({oldPassword})}
                                    value={this.state.oldPassword}
                                />

                                <TextInput
                                    placeholder="New Password"
                                    onChangeText={(newPassword) => this.setState({newPassword})}
                                    value={this.state.newPassword}
                                />

                                <TextInput
                                    placeholder="New Password again"
                                    onChangeText={(newPasswordAgain) => this.setState({newPasswordAgain})}
                                    value={this.state.newPasswordAgain}
                                />

                                <TouchableHighlight
                                    onPress={() => {
                                        alert('moi')
                                    }}>
                                    <Text>Submit</Text>
                                </TouchableHighlight>

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