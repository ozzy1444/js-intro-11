export const name = 'John';

export const hi = () => console.log('Hi');

export const obj = {
    name: 'John Doe', 
    city: 'Chicago'
};

// CommonJS way of doing it 
//module.exports.name = name; 
//module.exports.hi = hi;
//module.exports.obj = obj;

// ES6 / just add export infront of what you want to export


