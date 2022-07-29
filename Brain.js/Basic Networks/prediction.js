const brain = require('brain.js');

const network = new brain.NeuralNetwork(); 

network.train([
    { input:[1,2], output:[1] },    // Team 2 wins
    { input:[1,3], output:[1] },    // Team 3 wins
    { input:[2,3], output:[0] },    // Team 2 wins
    { input:[2,4], output:[1] },    // Team 4 wins
    { input:[1,2], output:[0] },    // Team 1 wins
    { input:[1,3], output:[0] },    // Team 1 wins
    { input:[3,4], output:[0] },    // Team 4 wins
]);

const output =  network.run([1,4]); 

console.log(`Prob: ${output}` );

/* 
    The idea is to predict the outcome of the furture games. 
    The outcome is in 1 & 0s and that is base on the 1st or 2nd team
    in order; Team 1 vs Team 2 = 1 becuase team 2 wins.


*/
