import React, {Component} from 'react';

export default class ControlledForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOnChange(event){
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
            <form >
                <label>
                    name
                    <input value={this.state.value} onChange={this.handleOnChange}/>
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        </div>);
    }
}