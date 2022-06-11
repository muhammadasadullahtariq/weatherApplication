import {API_CONFIG} from '@env';

const getMediaFile = async (long, lati) => {
  var day = new Date();
  console.error(day.getDay());
  console.log('long', long);
  console.log('long', lati);
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
        lati +
        '&lon=' +
        long +
        '&exclude=current%2Cminutely%2Chourly%2Calert&appid=4c0e8cd0e351fd927a7eeabfbbb07a9a',
      {
        method: 'GET',
        headers: {
          'cache-control': 'no-cache',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
    console.error(response);
    const json = await response.json();
    console.log('g g ');
    return json;
  } catch (error) {
    console.log('asad', error);
    return 'Media not found';
  }
};

export default getMediaFile;
