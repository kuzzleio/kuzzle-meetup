function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Change here
const deviceEUI = '000042';

const payload = {
  deviceEUI,
  degree: randomNum(15, 30),
};

console.log(await sdk.query({
  controller: 'payload',
  action: 'temperature',
  body: payload,
}));