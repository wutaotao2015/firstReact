import React, {Component} from 'react';
import TemperatureInput from "./TemperatureInput";



export default class Calculator extends Component {

    render(){
        return (
            <div>
                <TemperatureInput tempKind='c'/>
                <TemperatureInput tempKind='f'/>
            </div>
        );
    }
}