import React, {Component} from 'react';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input id="taskName" type="text" placeholder="Do the Laundry"/>
                <button onClick={this.props.clickAddListener}>Add</button>
            </div>
        )
    }
}

export default Form;