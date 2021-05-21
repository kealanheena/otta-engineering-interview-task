const mockReactionsData = require('../mockData/mockReactions.json')
const reactionsData = require('../../data/reactions.json')

const getUsersLikedJobsObject = require('./getUsersLikedJobsObject')
const getNumOfMatches = require('./getNumOfMatches')

function getSimilarityScore(data) {
  const usersLikedJobs = getUsersLikedJobsObject(data);
  let maxNumOfMatches = 0;
  let similarityScoreObject;
  
  for (let property_1 in usersLikedJobs) {
    for (let property_2 in usersLikedJobs) {
      if(property_1 !== property_2) {
        const numOfMatches = getNumOfMatches(usersLikedJobs[property_1], usersLikedJobs[property_2]);

        if(numOfMatches > maxNumOfMatches) {
          maxNumOfMatches = numOfMatches

          similarityScoreObject = {
            similarityScore: numOfMatches,
            users: [property_1, property_2]
          }
        } else if(numOfMatches === maxNumOfMatches) {
          similarityScoreObject.users.push(property_1, property_2)
        }
      }
    }
  }

  similarityScoreObject.users = similarityScoreObject.users.filter((item, index) => similarityScoreObject.users.indexOf(item) === index)

  return similarityScoreObject
}

console.log(getSimilarityScore(reactionsData));
