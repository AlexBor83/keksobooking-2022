
const getRandomNumber = () => {
  return Math.random();
};

const getRandomNumberIntInclusive = (min, max) => {

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min>max) {
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

  if (min>max) {
    [min, max] = [max, min];
  }

  return (Math.random() * (max - min + 1) + min).toFixed(letter);
};

//console.log(getRandomNumberInt(10, 5 , 2));
