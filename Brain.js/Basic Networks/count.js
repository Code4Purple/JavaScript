// count to 5
const brain = require('brain.js');

const tranningData = [
    [1,2,3,4,5],
    [5,4,3,2,1],
];

const net = new brain.recurrent.LSTMTimeStep();
// I used this line of code to train and see the errors on hand as they come out.
//net.train(trainingData{log: (status) => console.log(status)});
net.train(tranningData);

console.log('What comes next out of 1,2,3,4... ');
console.log(net.run([1,2,3,4]));
console.log('What comes next 5,4,3,2.....');
console.log(net.run([5,4,3,2]))