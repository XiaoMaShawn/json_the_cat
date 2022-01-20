const arg = process.argv.slice(2);

const { fetchBreedDescription } = require('./breedFetcher');

const breedNames = arg[0];

fetchBreedDescription(breedNames, (error, desc) => {
  if (error) {
    console.log('error fetch details: ', error);
  } else {
    console.log(desc);
  }
});