import React, {Component} from 'react';

export default class ControlledForm extends Component {

    constructor(props) {
        super(props);
        // this.state = {value: 'please input something'};
        this.state = {value: 2};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value.toUpperCase()
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("submit " + this.state.value);
    }
    render(){
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    name
                    {/*<input type="text" value={this.state.value} onChange={this.handleOnChange}/>*/}
                    {/*<textarea value={this.state.value} onChange={this.handleChange}/>*/}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="0">a</option>
                        <option value="1">b</option>
                        <option value="2">c</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>);
    }
}