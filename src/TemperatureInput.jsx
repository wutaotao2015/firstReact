import React, {Component} from 'react';

const temps = {
    c : 'Celcius',
    f : 'Farenhit'
}
function ShowBoilStatus(props) {
    if (props.temperature >= 100) {
        return <p>water is boiling</p>;
    } else {
        return <p>water is NOT boiled</p>;
    }
}
export default class TemperatureInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({
            temperature: evt.target.value
        })
    }

    render() {
        const temp = this.state.temperature;
        const tempKind = this.props.tempKind;
        return (
            <div>
                <fieldset>
                    <legend>please input the {temps[tempKind]} temperature!</legend>
                    <input value={temp} onChange={this.handleChange}/>
                    <ShowBoilStatus temperature={parseFloat(temp)}/>
                </fieldset>
            </div>
        );
    }
}