let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    'Active Mission' : true,
    'Secret Mission' : 'Discover life outside of Earth.',
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  let crewCount =  spaceship.numCrew;
  let planetArray = spaceship.flightPath;
  
  let isActive = spaceship['Active Mission'];
  console.log(spaceship['Active Mission']);

  spaceship.color = 'glorious gold';
  spaceship.numEngines = 8;
  delete spaceship['Secret Mission'];

  //console.log(spaceship);


  //methods (means functions inside object)
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!') 
  }
};
alienShip.retreat()
alienShip.takeOff()

//new object
let spaceShip = {
    passengers: [{name: 'Space Dog'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceShip.crew.captain['favorite foods'][0];
  let firstPassenger = spaceShip.passengers[0];

  //console.log(firstPassenger);


  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  
  greenEnergy(spaceship);
  
  remotelyDisable(spaceship);
  
  console.log(spaceship)


//for-in loop
//syntax

// for (let variableName in outerObject.innerObject) {
//     console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
//   };

// for (let variableName in outerObject.innerObject) {
//     console.log(`${outerObject.innerObject[variableName].propertyName}: ${outerObject.innerObject[variableName].differentPropertyName}`)
//   };


let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};
