const brain = require('brain.js');
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });


const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny's": "Tuesday",
    "Right Coast Wings":"Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "IHop": "Saturday",
    "Owls": "Sunday",
};

// Input: {Monday, Tuesday, Wednesday, Thrusday, Friday, Saturday, Sunday}
// Output: {Restaurant1, Restaurant2}

const trainingData = [];

for (let restaurantName in restaurants){
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    });
}


const stats = net.train(trainingData);
console.log(stats);
//console.log(net.run({ 'Monday': 1 }));
//console.log(net.run({ 'Tuesday': 1 }));
//console.log(net.run({ 'Wednesday': 1 }));
//console.log(net.run({ 'Thrusday': 1 }));
//console.log(net.run({ 'Friday': 1 }));
//console.log(net.run({ 'Saturday': 1 }));
//console.log(net.run({ 'Sunday': 1 })); 


// Before the Function
/* { error: 0.004998284376282422, iterations: 1478 }
{
  'Brilliant Yellow Corral': 0.8991313576698303,
  "Penny's": 0.13116541504859924,
  'Right Coast Wings': 0.07278646528720856,
  'The Delusion Last Railway Car': 0.0007336072740145028,
  'Fun Day Inn': 0.00004762883691000752,
  'IHop': 0.027907337993383408,
  'Owls': 0.03500419482588768
}*/

function restaurantForDay(dayOfWeek) {
    const result = net.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for ( let restaurantName in result){
        if (result[restaurantName] > highestValue) {
            highestValue = result[restaurantName];
            highestRestaurantName = restaurantName;
        }
    }
    return highestRestaurantName;
}
console.log('This shows which day is better to eat at for your kids for free meals.');
console.log('Monday');
console.log(restaurantForDay('Monday'));
console.log('Tuesday')
console.log(restaurantForDay('Tuesday'));
console.log('Wednesday');
console.log(restaurantForDay('Wednesday'));
console.log('Thursday');
console.log(restaurantForDay('Thursday'));
console.log('Friday');
console.log(restaurantForDay('Friday'));
console.log('Saturday');
console.log(restaurantForDay('Saturday'));
console.log('Sunday');
console.log(restaurantForDay('Sunday'));

// After the Function(dayOfWeek)
/* { error: 0.004996979750938867, iterations: 2410 }
Brilliant Yellow Corral
Penny's
Right Coast Wings
The Delusion Last Railway Car
Fun Day Inn
IHop
Owls*/