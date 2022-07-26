const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text, 
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

const output = network.run('computer'); //output: hardware



console.log(`Category: ${output}`);


/* 
    This is how text data is read within a network. 
    This file as it's tranning data in a spearate file so 
    the code to make it run isnt too long in textData.js. 
    this code takes a problem and tells you if it is harware or software.

*/