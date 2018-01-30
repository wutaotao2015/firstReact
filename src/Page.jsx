import React from 'react'

function MessageWarn(props){
    if (!props.showMessage) {
        return null;
    }
    return (<div>
        <h1> warning message</h1>
    </div>);
}
export  default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMessage: false
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => ({
            showMessage: !prevState.showMessage
        }));
    }
    render(){
        return (<div>
            <MessageWarn showMessage={this.state.showMessage}/>
            <button onClick={this.handleClick}>click me to hide or show the messageWarn</button>
        </div>);
    }
}