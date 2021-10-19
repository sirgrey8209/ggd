import React from 'react';
import './App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1 : undefined,
      num2 : undefined,
      answer : undefined,
      timerEnd : undefined,
      timerDuration : undefined,
      timerRatio : undefined,
    };
    //this.timer = setInterval(()=> this.updateTimer(), 100);
    
  }
  handleClick(i) {
    this.setTimer(5.0);
  }

  setTimer(duration)
  {
    let newState = {...this.state};
    newState.timerEnd = (+ new Date()) + duration * 1000;
    newState.timerDuration = duration;
    newState.timerRatio = 1.0;

    this.setState(newState);
    clearInterval(this.timer);
    this.timer = setInterval(()=> this.updateTimer(), 30);
  }
  updateTimer()
  {
    let newState = {...this.state};
    let timeLeft = newState.timerEnd - (+ new Date());
    if (timeLeft < 0)
    {
      newState.timerRatio = 0;
      clearInterval(this.timer);
    }
    else
    {
      newState.timerRatio = timeLeft / newState.timerDuration / 1000;
    }    
    this.setState(newState);
  }
  renderTimer()
  {        
    return (
    <div className="timer">
      <div className="timer-gauge" style={{ width: ((this.state.timerRatio * 100) + "%") }}/>
    </div>
    );
  }


  render() {
    return (
      <div className="game">
        <span className="text-num">{window.innerWidth}</span>
        <div className="problem">
          <div className="box">
            <span className="text-num">{7}</span>
          </div>
          <div className="text-op">{"×"}</div>
          <div className="box">
            <span className="text-num">{7}</span>
          </div>
          <div className="text-op">{"="}</div>
          <div className="box">
            <span className="text-num">{49}</span>
          </div>
        </div>
        { this.renderTimer() }
          
        <div className="input">
          <div className="input-row">
            <button className="input-button" onClick={() => this.handleClick(7)}>7</button>
            <button className="input-button" onClick={() => this.handleClick(8)}>8</button>
            <button className="input-button" onClick={() => this.handleClick(9)}>9</button>
          </div>
          <div className="input-row">
            <button className="input-button" onClick={() => this.handleClick(4)}>4</button>
            <button className="input-button" onClick={() => this.handleClick(5)}>5</button>
            <button className="input-button" onClick={() => this.handleClick(6)}>6</button>
          </div>
          <div className="input-row">
            <button className="input-button" onClick={() => this.handleClick(1)}>1</button>
            <button className="input-button" onClick={() => this.handleClick(2)}>2</button>
            <button className="input-button" onClick={() => this.handleClick(3)}>3</button>
          </div>
          <div className="input-row">
            <button className="input-button" onClick={() => {}}></button>
            <button className="input-button" onClick={() => this.handleClick(0)}>0</button>
            <button className="input-button" onClick={() => {}}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
