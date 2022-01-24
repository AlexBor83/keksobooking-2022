'use strict';

const COUNT_ADVERTISEMENT = 10;



const getRandomNumber = () => {
  return Math.random();
};

const getRandomNumberIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//console.log(getRandomNumberIntInclusive(10, 7));
const getRandomNumberInt = (min, max, letter) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min + 1) + min).toFixed(letter);
};



//console.log(getRandomNumberInt(10, 5 , 2));

const createAdvertisement = () => {
  const author = {
    // avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 +
    avatar: 'img/avatars/user' + '0' + `${getRandomNumberIntInclusive(1, 8)}` + '.png',
  };

  const locationX = getRandomNumberInt (35.65000, 35.70000, 5);
  const locationY = getRandomNumberInt (139.70000, 139.80000, 5);
  const typeHouses = ['palace', 'flat', 'house', 'bungalow'];
  const time = ['12:00', '13:00', '14:00'];
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  const offer = {

    title: 'Сними квартиру',

    address: [+locationX, +locationY],

    price: Math.round(getRandomNumber() * 10000),

    type: typeHouses[getRandomNumberIntInclusive(0, 3)],

    rooms: getRandomNumberIntInclusive (1, 5),

    guests: getRandomNumberIntInclusive (1, 10),

    checkin: time[getRandomNumberIntInclusive(0, 2)],

    checkout: time[getRandomNumberIntInclusive(0, 2)],

    features: features.slice(getRandomNumberIntInclusive(0, features.length-1)),

    description: 'Заходи и живи',

    photos: photos.slice(getRandomNumberIntInclusive(0, photos.length-1)),

    location: {
      x: +locationX,
      y: + locationY,
    },
  };

  return [author, offer];
};

const advertisements = new Array(COUNT_ADVERTISEMENT).fill(null).map(() => createAdvertisement())

console.log(advertisements);


