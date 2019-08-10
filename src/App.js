import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: ''
  }
  
  textChangedHandler = (event) => {
    this.setState({text: event.target.value});
  }

  deleteCharHandler = (index) => {
    let text = this.state.text.split('');
    text.splice(index, 1);
    text = text.join('');
    this.setState({text: text});
  }
  
  render() {

    let charList = null;

    if(this.state.text.length > 0) {
      charList = this.state.text.split('').map((char, i) => {
        return <CharComponent char={char} key={i} click={() => this.deleteCharHandler(i)} />
      })
    }

    return (
      <div className="App">
        <input onChange={this.textChangedHandler} value={this.state.text} />
        <p>{this.state.text.length}</p>
        <ValidationComponent text={this.state.text.length} />
        {charList}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
