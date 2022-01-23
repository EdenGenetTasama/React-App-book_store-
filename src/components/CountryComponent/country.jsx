import React from "react";
import { JanerName } from "../../App";


export default class Country extends React.Component {
  render() {
    return (
      <div>
        <JanerName.Consumer>
            {(value) => <h2>{value}</h2>}
        </JanerName.Consumer>

      </div>
    );
  }
}
