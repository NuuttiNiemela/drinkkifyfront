import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

class EditableIngredient extends Component {
    state={ newName: '', textVisible: true, inputVisible: false, }

    edit = async () => {
        await this.props.edit(this.props.ingredient.id, this.state.newName)
    }

    changeName = () => {
        if(this.state.textVisible) {
            this.setState({textVisible: false, inputVisible: true})
        } else {
            if(this.state.newName.trim() !== '') {
                this.edit()
                    .then(() => alert('Ingredients name changed'))
                    .then(() => this.setState({textVisible: true, inputVisible: false, newName: ''}))
            } else {
            this.setState({textVisible: true, inputVisible: false, newName: ''})
            }
        }
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%',}}>
                    { this.state.textVisible &&
                        <Text style={styles.viinaStyle}>{this.props.ingredient.ingredient_name} </Text>
                    }
                    {this.state.inputVisible && <TextInput
                        placeholder="New name"
                        onChangeText={(newName) => this.setState({newName})}
                        value={this.state.newName}
                    />}
                    <Icon
                        name="edit"
                        size={20}
                        color="#698D3F"
                        onPress={this.changeName}
                        style={{ marginTop:'4%'}}
                    />
                </View>
                <View style = {styles.lineStyle} />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    ingredientStyle: {
        fontSize: 18,
        color: '#698D3F',
        margin: 20,
    },
    lineStyle: {
        borderWidth: 0.8,
        borderColor: '#B2C8D4',
        margin: 2,
    },
    viinaStyle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
});

export default EditableIngredient;