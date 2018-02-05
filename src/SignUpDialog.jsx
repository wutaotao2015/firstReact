import React, {Component} from 'react';

// 组件组合的范例 不需要使用继承
function FancyBorder(props) {
    // 直接输出子组件
    return <div>
        {props.children}
    </div>;
}

function Dialogue(props) {
    return <FancyBorder>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        {props.children}
    </FancyBorder>;
}

export default class SignUpDialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            login: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(evt) {
        this.setState({login: evt.target.value})
    }
    handleClick(){
        alert(`Welcome, ${this.state.login}`)
    }
    render(){
        return (<Dialogue title="Mars Program" message="What's your name?">
            <input type="text" value={this.state.login} onChange={this.handleChange}></input>
            <button onClick={this.handleClick}>Sign Up</button>
        </Dialogue>);
    }
}
