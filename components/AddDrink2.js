import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Keyboard,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight
} from 'react-native';
import {addToList} from "../Serviceclient";

class AddDrink extends Component {

    state = {
        name: '',
        instructions: '',
        ingredient: '',
        ingredientAmount: '',
        ingredientUnit: '',
        value: '',
        valueArray: [],
        ingredients: [{ingredient: '', ingredientAmount: '', ingredientUnit: ''}],
        visible: false,
    }

    send = (e) => {
        e.preventDefault();
        addToList(this.state)
            .then(this.props.update)
        Keyboard.dismiss();
        this.setState({name: '', instructions: '', ingredient: '', ingredientAmount: '', ingredientUnit: '',});
    }


    setModalVisible(visible) {
        this.setState({visible: visible, value: 0});
    }

    renderIngredient = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredient"
                    onChangeText={ingredient => this.setState({ ingredients: [{ingredient}] })}
                    value={this.state.ingredients.ingredient} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount => this.setState({ ingredients: [{ingredientAmount}] })}
                    value={this.state.ingredients.ingredientAmount} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit => this.setState({ ingredients: [{ingredientUnit}] })}
                    value={this.state.ingredients.ingredientUnit} />
                {console.log('moi ' + this.state.ingredients.length)}
            </View>
        )
    }

    addMore = () => {
        let newValue = {value: this.state.value}

        this.setState({valueArray: [...this.state.valueArray, newValue]}, () => {
            this.setState({value: this.state.value+1})
        })
        console.log('tää: ' + this.state.valueArray + ' ja tää: ' + this.state.value)

        console.log(this.state.ingredients)



    }

    render() {

        let newArray = this.state.valueArray
            .map((item, key) => {

                    return(this.renderIngredient(key))

            })

        return (
            <View>
                <Modal visible={this.state.visible}>
                    <TextInput
                        // style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Drink name"
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}/>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Instructions"
                        onChangeText={instructions => this.setState({ instructions })}
                        value={this.state.instructions}
                    />

                    {/*{this.renderIngredient()}*/}

                    {newArray}

                    <TouchableOpacity onPress={this.send}>
                        <Text style={styles.buttonStyle}> LISÄÄ DRINKSU </Text>
                    </TouchableOpacity>
                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(!this.state.visible);
                        }}>
                        <Text style={styles.footer}>Sulje Drinksu</Text>
                    </TouchableHighlight>
                    <Button
                        title={'Paina'}
                        onPress={this.addMore}/>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Lisää Drinksu</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'gold',
        color: 'gold',
        fontFamily: 'RobotoSlab-Thin',
        fontSize: 30,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },

});


export default AddDrink;