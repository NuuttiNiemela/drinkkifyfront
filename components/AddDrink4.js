import React, {Component,  Fragment} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Keyboard,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import {addToList, addToList2} from "../Serviceclient";
import SearchableDropDown from "react-native-searchable-dropdown";
import {Dropdown} from 'react-native-material-dropdown';

class AddDrink extends Component {

    state = {
        name: '',
        instructions: '',
        ingredientSearch: '',
        ingredient: '',
        ingredientAmount: '',
        ingredientUnit: '',
        ingredientSearch1: '',
        ingredient1: '',
        ingredientAmount1: '',
        ingredientUnit1: '',
        ingredientSearch2: '',
        ingredient2: '',
        ingredientAmount2: '',
        ingredientUnit2: '',
        ingredientSearch3: '',
        ingredient3: '',
        ingredientAmount3: '',
        ingredientUnit3: '',
        ingredientSearch4: '',
        ingredient4: '',
        ingredientAmount4: '',
        ingredientUnit4: '',
        ingredientSearch5: '',
        ingredient5: '',
        ingredientAmount5: '',
        ingredientUnit5: '',
        ingredientSearch6: '',
        ingredient6: '',
        ingredientAmount6: '',
        ingredientUnit6: '',
        value: '',
        valueArray: [],
        visible: false,
        allIngredients: [],
        units:[]
    }

    send = (e) => {
        e.preventDefault();
        addToList2(this.state)
            .then(this.props.update)
        Keyboard.dismiss();
        this.setState({
            name: '',
            instructions: '',
            ingredientSearch: '',
            ingredient: '',
            ingredientAmount: '',
            ingredientUnit: '',
            ingredientSearch1: '',
            ingredient1: '',
            ingredientAmount1: '',
            ingredientUnit1: '',
            ingredientSearch2: '',
            ingredient2: '',
            ingredientAmount2: '',
            ingredientUnit2: '',
            ingredientSearch3: '',
            ingredient3: '',
            ingredientAmount3: '',
            ingredientUnit3: '',
            ingredientSearch4: '',
            ingredient4: '',
            ingredientAmount4: '',
            ingredientUnit4: '',
            ingredientSearch5: '',
            ingredient5: '',
            ingredientAmount5: '',
            ingredientUnit5: '',
            ingredientSearch6: '',
            ingredient6: '',
            ingredientAmount6: '',
            ingredientUnit6: '',
        });
        this.setModalVisible(!this.state.visible)
    }


    setModalVisible(visible) {
        this.setState({visible: visible, value: 0, valueArray: [] ,allIngredients: this.props.all, units: [  {name: 'cl'}, {name: 'dl'}, {name: 'for garnish'}, {name: 'top with'}, {name: 'stick'}, {name: 'piece'}, {name: 'serving'}, {name: 'pieces'}, {name: 'cut to pretty shapes.'}, {name: 'dashes'}, {name: 'optional'}, {name: 'for garnish'}, {name: 'tbsp for the rim'}, {name: 'spoonfuls'}, {name: 'piece'}, {name: 'grated'}, {name: 'to garnish'}, {name: 'to taste'}, {name: 'pieces'}, {name: 'to garnish'}, {name: 'to top with'}, {name: 'leaves'}, {name: 'pinch'}, {name: 'dash of'}, {name: 'according to taste'}, {name: 'serving'}, {name: 'according to your taste'}, {name: 'dl, or according to taste.'}, {name: 'shavings'}, {name: 'small bunch'}, {name: 'splash'}, {name: 'shaving'}, {name: 'dash'}]
        });
    }


    renderIngredient = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch: text})}
                    onItemSelect={(item) => this.setState({ingredient: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemContainerStyle={styles.itemsContainerStyle}
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount => this.setState({ ingredientAmount })}
                    value={this.state.ingredientAmount} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

            </View>
        )
    }

    renderIngredient1 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch1: text})}
                    onItemSelect={(item) => this.setState({ingredient1: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount1 => this.setState({ ingredientAmount1 })}
                    value={this.state.ingredientAmount1}
                />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit1: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

            </View>
        )
    }

    renderIngredient2 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch2: text})}
                    onItemSelect={(item) => this.setState({ingredient2: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount2 => this.setState({ ingredientAmount2 })}
                    value={this.state.ingredientAmount2} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit2: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />
            </View>
        )
    }

    renderIngredient3 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch3: text})}
                    onItemSelect={(item) => this.setState({ingredient3: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount3 => this.setState({ ingredientAmount3 })}
                    value={this.state.ingredientAmount3} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit3: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />
            </View>
        )
    }

    renderIngredient4 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch4: text})}
                    onItemSelect={(item) => this.setState({ingredient4: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount4 => this.setState({ ingredientAmount4 })}
                    value={this.state.ingredientAmount4} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit4: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />
            </View>
        )
    }

    renderIngredient5 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch5: text})}
                    onItemSelect={(item) => this.setState({ingredient5: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount5 => this.setState({ ingredientAmount5 })}
                    value={this.state.ingredientAmount5} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit5: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />
            </View>
        )
    }

    renderIngredient6 = (number) => {
        return(
            <View key={number} style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>

                <SearchableDropDown
                    onTextChange={text => this.setState({ingredientSearch6: text})}
                    onItemSelect={(item) => this.setState({ingredient6: item.ingredient_name})}
                    items={this.state.allIngredients}
                    placeholder="Ingredient"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    autoCapitalize="none"
                    placeholder="Amount"
                    onChangeText={ingredientAmount6 => this.setState({ ingredientAmount6 })}
                    value={this.state.ingredientAmount6} />

                <SearchableDropDown
                    onTextChange={text => console.log(text)}
                    onItemSelect={(item) => this.setState({ingredientUnit6: item.name})}
                    items={this.state.units}
                    placeholder="Unit"
                    resetValue={false}
                    underlineColorAndroid='transparent'
                />
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
                <Modal visible={this.state.visible}
                       onRequestClose={() => {
                           this.setModalVisible(!this.state.visible);
                       }}
                >
                    <Fragment>
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
                        title={'Add Ingredient'}
                        onPress={this.addMore}/>
                    </Fragment>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Add Drink 4</Text>
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
    // inputStyle: {
    //     padding: 12,
    //     borderWidth: 1,
    //     borderColor: '#ccc',
    //     borderRadius: 5
    // },
    itemStyle: {
        padding: 10,
        marginTop: 2,
        backgroundColor: '#ddd',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius:5
    },
    itemTextStyle: {
        color: '#222'
    },
    itemsContainerStyle: {
        maxHeight: 140
    },
});


export default AddDrink;