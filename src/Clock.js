
import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            para: 1
        };
    }

    componentDidMount() {
        this.timeTick = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeTick);
    }

    tick() {
        this.setState(
            {date: new Date()}
        )
        this.setState(
            {para: 2}
        )
    }
    render(){
        return (
            <div>
                <h1>Real Time</h1>
                <h2>It is {this.state.date.toLocaleTimeString()} {this.state.para}</h2>
            </div>
        );
    }
}