import { person } from './person.js';

console.log(`whippersnapper, person.name = ${person.name}`);
console.log('whippersnapper will change person.name inside the module');
person.name = 'Leopold';

export const whippersnapper = '';
