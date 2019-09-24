import React, {Component} from 'react';
import {Icon} from "react-native-elements";
import {withNavigation} from 'react-navigation';
import {StyleSheet} from 'react-native';

class MenuButton extends Component {
    render() {
        return (
            <Icon
                name="menu"
                onPress={() =>{this.props.navigation.toggleDrawer()}}
            />
        );
    }
}

export default withNavigation(MenuButton);