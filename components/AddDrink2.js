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
import {addToList, addToList2} from "../Serviceclient";

class AddDrink extends Component {

    state = {
        name: '',
        instructions: '',
        ingredient: '',
        ingredientAmount: '',
        ingredientUnit: '',
        ingredient1: '',
        ingredientAmount1: '',
        ingredientUnit1: '',
        ingredient2: '',
        ingredientAmount2: '',
        ingredientUnit2: '',
        ingredient3: '',
        ingredientAmount3: '',
        ingredientUnit3: '',
        ingredient4: '',
        ingredientAmount4: '',
        ingredientUnit4: '',
        ingredient5: '',
        ingredientAmount5: '',
        ingredientUnit5: '',
        ingredient6: '',
        ingredientAmount6: '',
        ingredientUnit6: '',
        value: '',
        valueArray: [],
        visible: false,
    }

    send = (e) => {
        e.preventDefault();
        addToList2(this.state)
            .then(this.props.update)
        Keyboard.dismiss();
        this.setState({
            name: '',
            instructions: '',
            ingredient: '',
            ingredientAmount: '',
            ingredientUnit: '',
            ingredient1: '',
            ingredientAmount1: '',
            ingredientUnit1: '',
            ingredient2: '',
            ingredientAmount2: '',
            ingredientUnit2: '',
            ingredient3: '',
            ingredientAmount3: '',
            ingredientUnit3: '',
            ingredient4: '',
            ingredientAmount4: '',
            ingredientUnit4: '',
            ingredient5: '',
            ingredientAmount5: '',
            ingredientUnit5: '',
            ingredient6: '',
            ingredientAmount6: '',
            ingredientUnit6: '',
        });
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
                    onChangeText={ingredient => this.setState({ ingredient })}
                    value={this.state.ingredient} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount => this.setState({ ingredientAmount })}
                    value={this.state.ingredientAmount} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit => this.setState({ ingredientUnit })}
                    value={this.state.ingredientUnit} />
            </View>
        )
    }

    renderIngredient1 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredient"
                    onChangeText={ingredient1 => this.setState({ ingredient1 })}
                    value={this.state.ingredient1} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount1 => this.setState({ ingredientAmount1 })}
                    value={this.state.ingredientAmount1} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit1 => this.setState({ ingredientUnit1 })}
                    value={this.state.ingredientUnit1} />
            </View>
        )
    }

    renderIngredient2 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredient"
                    onChangeText={ingredient2 => this.setState({ ingredient2 })}
                    value={this.state.ingredient2} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount2 => this.setState({ ingredientAmount2 })}
                    value={this.state.ingredientAmount2} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit2 => this.setState({ ingredientUnit2 })}
                    value={this.state.ingredientUnit2} />
            </View>
        )
    }

    renderIngredient3 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredient"
                    onChangeText={ingredient3 => this.setState({ ingredient3 })}
                    value={this.state.ingredient3} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount3 => this.setState({ ingredientAmount3 })}
                    value={this.state.ingredientAmount3} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit3 => this.setState({ ingredientUnit3 })}
                    value={this.state.ingredientUnit3} />
            </View>
        )
    }

    renderIngredient4 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredient"
                    onChangeText={ingredient4 => this.setState({ ingredient4 })}
                    value={this.state.ingredient4} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount4 => this.setState({ ingredientAmount4 })}
                    value={this.state.ingredientAmount4} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit4 => this.setState({ ingredientUnit4 })}
                    value={this.state.ingredientUnit4} />
            </View>
        )
    }

    renderIngredient5 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredient"
                    onChangeText={ingredient5 => this.setState({ ingredient5 })}
                    value={this.state.ingredient5} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount5 => this.setState({ ingredientAmount5 })}
                    value={this.state.ingredientAmount5} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit5 => this.setState({ ingredientUnit5 })}
                    value={this.state.ingredientUnit5} />
            </View>
        )
    }

    renderIngredient6 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <TextInput
                    autoCapitalize="none"
                    placeholder="Ingredient"
                    onChangeText={ingredient6 => this.setState({ ingredient6 })}
                    value={this.state.ingredient6} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount6 => this.setState({ ingredientAmount6 })}
                    value={this.state.ingredientAmount6} />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Unit"
                    onChangeText={ingredientUnit6 => this.setState({ ingredientUnit6 })}
                    value={this.state.ingredientUnit6} />
            </View>
        )
    }

    addMore = () => {
        let newValue = {value: this.state.value}

        this.setState({valueArray: [...this.state.valueArray, newValue]}, () => {
            this.setState({value: this.state.value+1})
        })




    }

    render() {

        let newArray = this.state.valueArray
            .map((item, key) => {
                if (key == 0) return(this.renderIngredient(key))
                if (key == 1) return(this.renderIngredient1(key))
                if (key == 2) return(this.renderIngredient2(key))
                if (key == 3) return(this.renderIngredient3(key))
                if (key == 4) return(this.renderIngredient4(key))
                if (key == 5) return(this.renderIngredient5(key))
                if (key == 6) return(this.renderIngredient6(key))

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
                    <Text>Lisää Drinksu2</Text>
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