import React, {Component} from 'react';
import TemperatureInput from "./TemperatureInput";


function ShowBoilStatus(props) {
    if (props.temperature >= 100) {
        return <p>water is boiling</p>;
    } else {
        return <p>water is NOT boiled</p>;
    }
}
function toCel(far){
    return (far - 32) * 5 / 9;
}
function toFar(cel) {
    return (cel * 9 / 5) + 32;
}
// 具体的转换函数作为参数， 这是一个高阶函数，体现了函数式编程的思想
function tryConvert(temp, convert) {
    //拿到的都是字符串
    const input = parseFloat(temp);
    if (Number.isNaN(input)) return "";
    const output = convert(temp);
    //保留3位小数
    const rounded = Math.round(output * 1000) / 1000;
    // 转换成String类型返回
    return rounded.toString();
}
export default class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            // props组件不可变，可以用google浏览器的react插件查看具体是哪个父组件保存了数据来源的state
            tempKind: 'c',
            temperature: ''
        }
        this.handleCelChange = this.handleCelChange.bind(this)
        this.handleFarChange = this.handleFarChange.bind(this)
    }
    // 它并不是原生的受控组件，可以直接拿到输入的值
    handleCelChange(temp){
        this.setState({tempKind:'c', temperature: temp})
    }
    handleFarChange(temp){
        this.setState({tempKind:'f', temperature: temp})
    }
    render(){
        const tempKind = this.state.tempKind;
        const temp = this.state.temperature;
        const cTemp = tempKind === 'c' ? temp : tryConvert(temp, toFar);
        const fTemp = tempKind === 'f' ? temp : tryConvert(temp, toCel);
        return (
            <div>
                <TemperatureInput
                    temperature = {cTemp}
                    tempKind='c'
                    onTemperatureChange = {this.handleCelChange}
                />
                <TemperatureInput
                    temperature = {fTemp}
                    tempKind='f'
                    onTemperatureChange = {this.handleFarChange}
                />
                {/*这里用cTemp是因为组件ShowBoilStatus内部返回的元素是以100Celcius为条件*/}
                <ShowBoilStatus temperature={parseFloat(cTemp)}/>
            </div>
        );
    }
}