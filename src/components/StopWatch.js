import React, { useState } from 'react'
// import './styles.css'

export const StopWatch = () => {

    const [intervalId, setIntervalId] = useState(0)
    const [number, setNumber] = useState(0);

    function stopWatch() {
        clearInterval(intervalId)
    }
    function startWatch(number) {
    
        const interval = setInterval(() => {
            number += 0.1
            setNumber(number)
        }, 1000)
        setIntervalId(interval)
    }

    function clear() {
        clearInterval(intervalId)
        setNumber(0)
    }
  return (
    <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{number.toFixed(1)}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={() => startWatch(number)}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={() => stopWatch()}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={() => clear()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}



 