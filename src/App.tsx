import React from 'react';
import Store from './Store';
import {observer} from 'mobx-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Example">
        <div>This demonstrates how to use an observable with a user input</div>
        <input
          value={Store.stringObservable}
          onChange={(e) => {
            Store.stringObservable = e.target.value
          }}/>
          <div>{`The value of stringObservable is: ${Store.stringObservable}`}</div>
      </div>



      <div className="Example">
        <div>This demonstrates how to use a "computed" value</div>
        <input
          type='number'
          value={Store.firstNumber}
          onChange={(e) => {
            Store.firstNumber = Number(e.target.value)
          }}
        />
        <input
          type='number'
          value={Store.secondNumber}
          onChange={(e) => {
            Store.secondNumber = Number(e.target.value)
          }}
        />
        <div>{`Both numbers are even: ${Store.bothNumbersEven}`}</div>
      </div>



    </div>
  );
}

// Passing App to the observer function means that when any observables or computed values that are used in App change,
// App will be re-rendered.
export default observer(App);
