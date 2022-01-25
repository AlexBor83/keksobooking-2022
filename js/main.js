import {createAdvertisement} from './create-advertisement.js';

const COUNT_ADVERTISEMENT = 10;

const advertisements = new Array(COUNT_ADVERTISEMENT).fill(null).map(() => createAdvertisement());

console.log(advertisements);
