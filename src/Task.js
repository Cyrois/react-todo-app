import React, {Component} from 'react';
import './App.css';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" name={this.props.taskKey} onClick={this.props.onCheckboxListener}/>
                <label htmlFor={this.props.name}>{this.props.name}</label>
            </div>
        )
    }
}

export default Task;