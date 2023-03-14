const city = 'New York City';
const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline()); //global


const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
const callMyNightSky = () => {
    stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};
console.log(callMyNightSky()); //global
console.log(stars);


const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
      }
    console.log(lightWaves);
    };
    logVisibleLightWaves();
    console.log(lightWaves); //reference error