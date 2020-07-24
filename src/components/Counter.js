import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, timesClicked }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Times the Increment/Decrement buttons have been clicked: {timesClicked}</p>
          <input type='text' 
          onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}/>
          <button onClick={onInputNumber}>Change Count</button>
        </div>
      </div>
    );
}


export default Counter;