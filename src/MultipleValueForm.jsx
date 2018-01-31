import React, {Component} from 'react';

export default class MultipleValueForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //怎么获取输入框对应的state属性名:  增加name属性 直接由event.target.name获取到name属性
        const target = event.target;
        const name = target.name;
        //复选框value的true,false值 由target.checked 属性获得
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    canSubmit() {
        const {username, password} = this.state;
        return username.length > 0 && password.length > 0;
    }

    handleSubmit(e) {
        if (!this.canSubmit()) {
            e.preventDefault();
            return;
        }
        const {isChecked, username, password} = this.state;
        console.log("submit value: " + this.state.isChecked + " " + this.state.username + " " + this.state.password);
    }

    render() {
        const enabledButton = this.canSubmit();
        return (
            <div>
                {/*form中普通button点击后触发提交表单按钮 是因为按钮默认的type="submit"
                    另: caveat!  在输入框有值时按回车键也会提交。google浏览器下输入项有空时按回车也无法提交
                */}
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox"
                           name="isChecked"
                           checked={this.state.isChecked}
                           onChange={this.handleChange}/>click the box!<br/>
                    <input type="text"
                           name="username"
                           value={this.state.username}
                           onChange={this.handleChange}/><br/>
                    <input type="text"
                           name="password"
                           value={this.state.password}
                           onChange={this.handleChange}/>
                    <button disabled={!enabledButton}>go</button>
                </form>
            </div>
        );
    }
}