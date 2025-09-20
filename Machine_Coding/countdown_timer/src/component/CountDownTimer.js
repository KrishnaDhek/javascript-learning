import React, { useEffect, useRef, useState } from 'react';

export default function CountDownTimer() {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;
    const copyTime = { ...time };
    copyTime[field] = value;

    // Normalize values
    copyTime.minute += Math.floor(copyTime.second / 60);
    copyTime.second = copyTime.second % 60;
    copyTime.hour += Math.floor(copyTime.minute / 60);
    copyTime.minute = copyTime.minute % 60;

    setTime(copyTime);
  };

  const handleStart = () => {
    if (time.hour === 0 && time.minute === 0 && time.second === 0) {
      return;
    }

    if (isRunning) {
      // pause
      clearInterval(intervalRef.current);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({ hour: 0, minute: 0, second: 0 });
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          let { hour, minute, second } = prev;

          if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return { hour: 0, minute: 0, second: 0 };
          }

          if (second > 0) {
            second--;
          } else if (minute > 0) {
            minute--;
            second = 59;
          } else if (hour > 0) {
            hour--;
            minute = 59;
            second = 59;
          }

          return { hour, minute, second };
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <div className="container">
      <div className="inputContainer">
        <input
          disabled={isRunning}
          value={time.hour}
          onChange={(e) => handleChange(e, 'hour')}
          onFocus={(e) => {
            if (e.target.value === '0') e.target.value = '';
          }}
          onBlur={(e) => {
            if (e.target.value === '') {
              e.target.value = 0;
              handleChange(e, 'hour');
            }
          }}
          type="number"
          placeholder="HH"
        />
        :
        <input
          disabled={isRunning}
          value={time.minute}
          onChange={(e) => handleChange(e, 'minute')}
          onFocus={(e) => {
            if (e.target.value === '0') e.target.value = '';
          }}
          onBlur={(e) => {
            if (e.target.value === '') {
              e.target.value = 0;
              handleChange(e, 'minute');
            }
          }}
          type="number"
          placeholder="MM"
        />
        :
        <input
          disabled={isRunning}
          value={time.second}
          onChange={(e) => handleChange(e, 'second')}
          onFocus={(e) => {
            if (e.target.value === '0') e.target.value = '';
          }}
          onBlur={(e) => {
            if (e.target.value === '') {
              e.target.value = 0;
              handleChange(e, 'second');
            }
          }}
          type="number"
          placeholder="SS"
        />
      </div>
      <div className="buttonContainer">
        <button onClick={handleStart}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
