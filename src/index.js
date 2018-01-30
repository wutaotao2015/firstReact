import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock.jsx';
import registerServiceWorker from './registerServiceWorker';
import Toggle from "./Toggle";
import Page from "./Page.jsx";
import ControlledForm from "./ControlledForm.jsx";
// ReactDOM.render( <App />, document.getElementById('root') );
// ReactDOM.render(<Clock/>, document.getElementById('root'))
function ClockArmy() {
    return (<div>
        <Clock/>
        <Clock/>
        <Clock/>
    </div>);
}
function DisableBaidu(){
    function onClick(e) {
        e.preventDefault();
        console.log("baidu not allowed")
    }
    return (<div>
        <a href="http://www.baidu.com" onClick={onClick}>Click me</a>
    </div>);
}
// ReactDOM.render( <Toggle />, document.getElementById('root') );
function UserGreeting(){
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(){
    return <h1>Please sign up!</h1>
}
function Greeting(props) {
    const isLoggIn = props.loggIn;
    if (isLoggIn) {
        return <UserGreeting/>;
    }else{
        return <GuestGreeting/>;
    }
}
function MailBox(props) {
    const unReadMessages = props.unReadMessages;
    return (<div>
        <h1>hello</h1>
        {unReadMessages.length > 0 &&
            <h1>you have {unReadMessages.length} messages.</h1>}
    </div>);
}
const messages = ['one', 'two', 'three'];
// ReactDOM.render(<Greeting loggIn={true}/>, document.getElementById('root'));
// ReactDOM.render(<MailBox unReadMessages={messages}/>, document.getElementById('root'));
// ReactDOM.render(<Page/>, document.getElementById('root'))

const items = [1+2, 2+3, 3, 4, 5];
const itemsElement = items.map(m => <li>{m}</li>);
// ReactDOM.render(itemsElement, document.getElementById('root'))
// const items = [1, 2, 3, 4];
function ListItem(props) {
    return <li>{props.item}</li>;
}
function NumberList(props) {
    const items = props.items;
    return <ul>{items.map((m, index) => <ListItem key={index} item={m}/>)}</ul>;
}
// ReactDOM.render(<NumberList items={items}/>, document.getElementById('root'))

const form = <form>
    <label>name
        <input type="text" name="name"/>
    </label>
    <input type="submit" value="Submit"/>
</form>;
// ReactDOM.render(form, document.getElementById('root'))
ReactDOM.render(<ControlledForm/>, document.getElementById('root'));
registerServiceWorker();



















