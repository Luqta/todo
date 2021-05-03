import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import TodolistItem from './toDoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

const todoList = ({ 
    todos, 
    dispatchToggleTodo, 
    dispatchSetEditingTodo 
}) => (
    <View>
        {todos.map(todo =>( 
            <TodolistItem 
                key ={todo.id} 
                todo={todo}
                onPressTodo={() => dispatchToggleTodo(todo.id)} 
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
            />
        ))}
    </View>
);
const styles = StyleSheet.create({

})

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapStateToProps, 
    { 
        dispatchToggleTodo: toggleTodo,
        dispatchSetEditingTodo: setEditingTodo,
    }
    )(todoList);