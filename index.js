const firstNames = [
  'John',
  'Frank',
  'Byll',
  'Sinthya',
  'Kathy',
  'Daschel',
  'Zeke',
  'Rudolph',
  'Sleve',
  'Onson',
  'Daryle',
  'Frunkson',
  'Dilly',
  'Scoots',
  'Scamps',
  'Twight',
  'Jeromby',
  'Todd',
  'Glenallen',
  'Sleve',
  'Arby',
  'Nert',
  'Kent',
  'Fergil',
  'Lood',
  'Taenis',
  'Marnel',
  'Dawnie',
  'Wobb',
  'Hudgyn',
  'Fraven',
  'Dorge',
  'Varlink',
  'Paut',
  'Snarnie',
  'Bobs',
  'Gary',
  'Jarfin',
  'Erl',
  'Danfin',
  'Yanse',
  'Jinayle'
];

const lastnamePrefix = [
  'De',
  'Mc',
  'Von ',
  'Le'
];

const lastnameFirsthalf = [
  'Stunk',
  'Feather',
  'Laug',
  'Lark',
  'Hard',
  'Snickle',
  'Finkle',
  'Jiddle',
  'Tankus',
  'Pebble',
  'Stank',
  'Tankus',
  'Finger',
  'Phunkle',
  'Bessil',
  'Nit',
  'Janglo',
  'Tell',
  'Waunk',
  'Sass',
  'Poot',
  'Hintle',
  'Kor',
  'Koob',
  'Wobs',
  'Looven',
  'Swerm',
  'Phunkle',
  'Royben',
  'Slab'
];

const lastnameSecondhalf = [
  'bottom',
  'sonzo',
  'wallop',
  'sels',
  'obble',
  'feroni',
  'ber',
  'ton',
  'fensens',
  'irsitz',
  'bampse',
  'twon',
  'enko',
  'fogger',
  'pesk',
  'fard',
  'yloob',
  'tobbles',
  'gaggle'
];

const lastnamePreset = [
  'Hardmeat',
  'Cornfoot',
  'Rattlebag',
  'Clutterbuck',
  'Hardmeat'
];

const buildFirstname = () => {
  return firstNames[Math.floor(Math.random() * firstNames.length)];
};

const buildLastnamePrefix = () => {
  return lastnamePrefix[Math.floor(Math.random() * lastnamePrefix.length)];
};

const buildLastname = () => {
  let lastName = '';
  const presetLastname = lastnamePreset[Math.floor(Math.random() * lastnamePreset.length)] 
  const builtLastname = (Math.floor(Math.random() * lastnamePrefix.length) >= 9 ? buildLastnamePrefix() : '') +
    lastnameFirsthalf[Math.floor(Math.random() * lastnameFirsthalf.length)] +
    lastnameSecondhalf[Math.floor(Math.random() * lastnameSecondhalf.length)];

  Math.random() >= 0.1 ? lastName = builtLastname : lastName = presetLastname

  return lastName;
};

const name = () => {
  // let nameArray = [];
  // for (let i = 0; i < 20; i++) {
  //   nameArray.push(buildFirstname() + ' ' + buildLastname())
  // }
  return buildFirstname() + ' ' + buildLastname(); 
};

module.exports = {
  name
};