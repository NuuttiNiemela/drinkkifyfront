import React, {Component} from 'react';
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";
import {Text} from "react-native";

class DropdownMenu extends Component {

    render() {

        const menu = this.props.items
            .map((unit) => {
                return(
                    <MenuOption key={unit.name} value={unit.name} >
                        <Text>{unit.name}</Text>
                    </MenuOption>
                )})

        return (
            <MenuProvider >
                <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

                    <MenuTrigger  >
                        <Text>Unit</Text>
                    </MenuTrigger  >

                    <MenuOptions>
                        {menu}
                    </MenuOptions>

                </Menu>
            </MenuProvider>
        );
    }
}

export default DropdownMenu;