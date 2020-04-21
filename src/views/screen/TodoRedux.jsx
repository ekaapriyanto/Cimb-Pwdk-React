import React from 'react';
import {connect} from 'react-redux';
import {todoInputHandler, usernameInputHandler, addTodoHandler} from "../../redux/action";

class TodoRedux extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Todo Screen</h1>
                <h2>{this.props.todo.todoInput}</h2>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input Todo Item"
                    onChange={(e) => this.props.onChangeTodo(e.target.value)}
                />
                <input
                    className="btn btn-primary"
                    type="button"
                    value="Add Todo"
                    onClick={() => this.props.onAddTodo(this.props.todo.todoInput)}
                />
                {this.props.todo.todoList.map((val) => {
                    return <p>{val}</p>;
                })}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        todo: state.haha,
        user: state.user,
    };
};
const mapDispatcToProps = {
    onChangeTodo: todoInputHandler,
    onChangeUsername: usernameInputHandler,
    onAddTodo: addTodoHandler,
};
export default connect(mapStateToProps, mapDispatcToProps)(TodoRedux);