const reactionsData = require('./data/reactions.json');
const jobsData = require('./data/jobs.json');

const getSimilarityScore = require('./functions/Task-1/getSimilarityScore');
const getCompanySimilarityScore = require('./functions/Task-2/getCompanySimilarityScore');


console.log('Task-1', getSimilarityScore(reactionsData));
console.log('==========================================================');
console.log('Task-2:', getCompanySimilarityScore(reactionsData, jobsData));