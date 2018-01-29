import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';
import Toggle from "./Toggle";
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
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
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );
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
ReactDOM.render(<Greeting loggIn={true}/>, document.getElementById('root'));

registerServiceWorker();
