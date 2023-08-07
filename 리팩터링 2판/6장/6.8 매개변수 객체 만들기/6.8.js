/**
 * 예시
 */
const station = {
  name: 'ZB1',
  readings: [
    {
      temp: 47,
      time: '2016-11-10 09:10',
    },
    {
      temp: 53,
      time: '2016-11-10 09:20',
    },
    {
      temp: 58,
      time: '2016-11-10 09:30',
    },
    {
      temp: 53,
      time: '2016-11-10 09:40',
    },
    {
      temp: 51,
      time: '2016-11-10 09:50',
    },
  ],
};

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}

function readingsOutsideRange(station, min, range) {
  return station.readings.filter(r => r.temp < min || r.temp < range.max);
}

const range = new NumberRange(40, 50);
const alerts = readingsOutsideRange(station, 50, range);
console.log(alerts);


