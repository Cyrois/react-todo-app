import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task.js';
import Form from './Form.js';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {tasks: [{name: "Clean the Dishes", taskKey: this.generateTimeHash()}]};
        this.clickAddListener = this.clickAddListener.bind(this);
        this.clickCheckboxListener = this.clickCheckboxListener.bind(this);
    }

    clickAddListener() {
        let $taskName = $("#taskName");
        let taskName = $taskName.val();
        if (taskName) {
            let existingTasks = this.state.tasks;
            let newTask = {name: taskName, taskKey: this.generateTimeHash()};
            existingTasks.push(newTask);
            $taskName.val("");
            this.setState({tasks: existingTasks})
        }
    }

    generateTimeHash() {
        return (+new Date).toString(36);
    }

    clickCheckboxListener(e) {
        let taskKey = e.target.name;
        if (taskKey) {
            let existingTasks = this.state.tasks;
            let newTasks = existingTasks.filter(task => task.taskKey !== taskKey);
            this.setState({tasks: newTasks})
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO APP</h1>
                </header>
                <div className="main-body">
                    <Form clickAddListener={this.clickAddListener}/>

                    <div className="todo-list">
                        {this.state.tasks.length
                            ?
                            this.state.tasks.map((task) => {
                                return (
                                    <div key={task.taskKey}>
                                        <Task name={task.name} taskKey={task.taskKey} onCheckboxListener={this.clickCheckboxListener}/>
                                    </div>);
                            })
                            :
                            <p>No Todo Items</p>
                        }
                    </div>
                </div>


            </div>
        );
    }
}

export default App;
