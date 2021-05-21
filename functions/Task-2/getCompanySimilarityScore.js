const mockJobsData = require('../mockData/mockJobs.json');
const mockReactionsData = require('../mockData/mockReactions.json');

const jobsData = require('../../data/jobs.json');
const reactionsData = require('../../data/reactions.json');

const getCompanyApplicants = require('./getCompanyApplicants');
const getNumOfMatches = require('../Task-1/getNumOfMatches');

function getCompanySimilarityScore(reactionsData, jobsData) {
  const companyApplicants = getCompanyApplicants(reactionsData, jobsData);
  let maxNumOfMatches = 0;
  let similarityScoreArray;
  
  for (let property_1 in companyApplicants) {
    for (let property_2 in companyApplicants) {
      if(property_1 !== property_2) {
        const numOfMatches = getNumOfMatches(companyApplicants[property_1], companyApplicants[property_2]);

        if(numOfMatches > maxNumOfMatches) {
          maxNumOfMatches = numOfMatches

          similarityScoreArray = {
            similarityScore: numOfMatches,
            users: [property_1, property_2]
          }
        } else if(numOfMatches === maxNumOfMatches) {
          similarityScoreArray.users.push(property_1, property_2)
        }
      }
    }
  }

  similarityScoreArray.users = similarityScoreArray.users.filter((item, index) => similarityScoreArray.users.indexOf(item) === index)

  return similarityScoreArray
}

console.log(getCompanySimilarityScore(reactionsData, jobsData))