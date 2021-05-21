const getUsersLikedJobsObject = require('../Task-1/getUsersLikedJobsObject');
const getCompaniesJobs = require('../Task-2/getCompaniesJobs');

module.exports = function getCompanyApplicants(reactionsData, jobsData) {
  const usersLikedJobsObject = getUsersLikedJobsObject(reactionsData)
  const companiesJobs = getCompaniesJobs(jobsData)

  const companiesApplicants = {}

  for (let property_1 in companiesJobs) {
    for (let property_2 in usersLikedJobsObject) {
      const postedJobs = companiesJobs[property_1]
      const jobApplications = usersLikedJobsObject[property_2]
      const jobsMatch = postedJobs.some( item => jobApplications.indexOf(item) >=0)

      if(jobsMatch && companiesApplicants[property_1]) {
        companiesApplicants[property_1].push(property_2);
      } else if(jobsMatch) {
        companiesApplicants[property_1] = [property_2];
      }
      
    }
  }

  return companiesApplicants
}