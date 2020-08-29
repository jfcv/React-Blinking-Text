import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>Hi, I'm velveet</h3>
        <p>I am a {' '}
          <Typical 
            loop={Infinity}
            wrapper='b'
            steps={[
              'FullStack Developer',
              1000,
              'Mechatronic Engineer',
              1000,
              'Writer',
              1000,
              'Dreamer',
              1000,
              'Data Scientist',
              1000
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
