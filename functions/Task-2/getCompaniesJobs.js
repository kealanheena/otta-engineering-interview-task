const mockJobsData = require('../mockData/mockJobs.json');

module.exports = function getCompaniesJobs(data) {
  const companiesJobs = {}

  data.forEach((item) => {
    if(companiesJobs[item.company_id]) {
      companiesJobs[item.company_id].push(item.job_id);
    } else {
      companiesJobs[item.company_id] = [item.job_id];
    }
  })

  return companiesJobs;
}