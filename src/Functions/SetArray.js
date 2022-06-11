import rainy from '../Asserts/rainy.png';
import snow from '../Asserts/snow.png';
import sunny from '../Asserts/sunny.png';
import thunder from '../Asserts/thunder.png';
import thunderAndRainy from '../Asserts/thunderAndRainy.png';
import wind from '../Asserts/wind.png';

function setArray(dataArr) {
  var day = new Date();
  day = day.getDay();
  var weather = dataArr.daily;
  var arr = [];
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var j = 0;
  console.error(day, weather, j);
  for (var i = day; i < 7 + day; i++) {
    console.log('hellow');
    console.log(weather[j].temp.day);
    console.log(weather[j].weather[0].main);
    const obj = {
      day: days[i % 7],
      tem: weather[j].temp.day,
      statu: weather[j].weather[0].main,
    };
    if (weather[j].weather[0].main == 'Clouds') {
      obj.imag = thunder;
    }
    else if (weather[j].weather[0].main == 'Clear') {
      obj.imag = sunny;
    }
    else if (weather[j].weather[0].main == 'Rain') {
      obj.imag = thunderAndRainy;
    }
    else if (weather[j].weather[0].main == 'Snow') {
      obj.imag = snow;
    }
    else if (weather[j].weather[0].main == 'Wind') {
      obj.imag = wind;
    } else {
      obj.image = rainy;
    }
    arr.push(obj);
    j++;
  }
  console.log(arr);
  return arr;
}

export default setArray;
