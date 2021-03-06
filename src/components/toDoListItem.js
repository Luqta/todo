import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TodolistItem = ({ todo, onPressTodo, onLongPressTodo }) => (
    <TouchableOpacity 
    onPress={onPressTodo}
    onLongPress={onLongPressTodo}>
        <View style={styles.line}>
            <Text style={[
                styles.lineText,
                todo.done ? styles.lineThough : null
                ]}>
                    { todo.text }
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#8c8c8c',

        alignItems: 'center',
        flexDirection: 'row'
    },

    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    lineThough:{
        textDecorationLine: 'line-through'
    },

    avatar:{
        aspectRatio: 1,
        flex: 1,

        marginLeft: 15,
        borderRadius:50
    }
})

export default TodolistItem;