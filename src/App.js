import React from 'react';
import './App.css';


class Game extends React.Component {
  render() {
    return (
      <div className="game">
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
        <div className="input">
          <div className="input-row">
            <button className="input-button" />
            <button className="input-button" />
            <button className="input-button" />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
