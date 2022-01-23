import React from "react";
import {JanerName} from "../../App";



export default class Janer extends React.Component {



    render(){
        return(<div>
            <h1>This is Janer component {JanerName._currentValue}</h1>
        </div>)
    }
}