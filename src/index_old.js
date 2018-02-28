import React from 'react';
import ReactDOM from 'react-dom';
import './index_old.css';
import App from './App';
import Clock from './Clock.jsx';
import registerServiceWorker from './registerServiceWorker';
import Toggle from "./Toggle";
import Page from "./Page.jsx";
import ControlledForm from "./ControlledForm.jsx";
import MultipleValueForm from "./MultipleValueForm";
import Calculator from "./Calculator";
import SignUpDialog from "./SignUpDialog";
import FilterableProductTable from "./FilterableProductTable";
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
// ReactDOM.render(<ControlledForm/>, document.getElementById('root'));
const select = <select>
    <option>a</option>
    <option selected>b</option>
    <option>b</option>
</select>;
// ReactDOM.render(select, document.getElementById('root'))
// ReactDOM.render(<MultipleValueForm/>, document.getElementById('root'));
// ReactDOM.render(<Calculator/>, document.getElementById('root'))
// ReactDOM.render(<SignUpDialog/>, document.getElementById('root'))
const datasource = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
ReactDOM.render(<FilterableProductTable products={datasource}/>, document.getElementById('root'));
registerServiceWorker();



















