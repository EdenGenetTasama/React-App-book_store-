import logo from "./logo.svg";
import "./App.css";
import BookCom from "./components/book";
import React from "react";

export const JanerName = React.createContext();
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <JanerName.Provider value={"Hip-Hop"}>
            <BookCom nameOfBook="Harry potter" />
          </JanerName.Provider>
        </header>
      </div>
    );
  }
}
