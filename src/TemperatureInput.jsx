import React, {Component} from 'react';

export default class TemperatureInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.props.onTemperatureChange(evt.target.value)
    }

    render() {
        const temps = {
            c : 'Celcius',
            f : 'Farenhit'
        }
        const temp = this.props.temperature;
        const tempKind = this.props.tempKind;
        return (
            <div>
                <fieldset>
                    <legend>please input the {temps[tempKind]} temperature!</legend>
                    <input value={temp} onChange={this.handleChange}/>
                </fieldset>
            </div>
        );
    }
}