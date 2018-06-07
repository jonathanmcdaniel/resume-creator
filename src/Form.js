import React, { Component } from 'react';
import fetch from 'node-fetch';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            addr1: '',
            addr2: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createJson = this.createJson.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let jsonString = JSON.stringify(this.createJson());
        fetch('http://localhost:3000/generate/basic/pdf', {
                method: 'POST',
                body: jsonString
            }
        )
        .then(res => console.log(res));
    }

    createJson() {
        return {
            name: this.state.name
        }
    }

    render() {
        return (
            <div>
            <h2>Resume Information</h2>
                <form>
                    <label>Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
                <h2>Preview</h2>
                <code>
                    name: {this.state.name}
                </code>
            </div>
        );
    }
}

export default Form;
