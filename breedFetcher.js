const request = require('request');
// const arg = process.argv.slice(2);

const fetchBreedDescription = function(breedNames, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedNames}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    if (!data[0]) {
      desc = 'There is no such breed of cat.';
      callback(null, desc);
    } else {
      callback(null, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };



// request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
//   if (error) {
//     console.log('please refer the message below: ' + error);
//   }
//   // console.log('status code:', response && response.statusCode);
//   const data = JSON.parse(body);
//   if (!data[0]) {
//     console.log('There is no such breed of cat.');
//   } else {
//     console.log(data[0].description);
//   }
// });

