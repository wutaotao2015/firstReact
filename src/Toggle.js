import React from 'react';

export default class Toggle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toggleOn: true
        }
        //在 JavaScript 中，类方法默认没有 绑定 的。
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            toggleOn: !prevState.toggleOn
        }));
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.toggleOn ? "on" : "off"}
                </button>
            </div>
        );
    }
}