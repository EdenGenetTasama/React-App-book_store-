import React from "react";
import Janer from "./janerComponent/janer";


export default class  BookCom extends React.Component{
constructor(props){
    super(props)
this.state = {inputValue: " "};
this.GetWritterName = this.GetWritterName.bind(this);
this.InputOnChange = this.InputOnChange.bind(this);

}

GetWritterName(){
    this.setState({inputValue: this.state.inputValue});
}

InputOnChange(event){
    this.state.inputValue  = event.target.value;
}

componentWillMount(){
    alert("Welcome to the page ☺")
}
componentDidMount(){
    console.log("Component load Up!");
}

componentWillUpdate(){
    alert("Before Update Writher Name")
}
componentDidUpdate(){
console.log("UPDATE HAPPENED")
}

render(){
    return(
        <div>
            <h1>{this.props.nameOfBook}</h1>
            <input type="text" onChange={this.InputOnChange}/>
            <button type="button"  onClick={this.GetWritterName} >click to change component</button>
            <h1>{this.state.inputValue}</h1>
            <Janer/>
        </div>
    )
}

}