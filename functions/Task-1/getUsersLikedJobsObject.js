module.exports = function getUsersLikedJobsObject(data) {
  const usersLikedJobs = {}

  const likedJobsData = data.filter((item) => item.direction)

  likedJobsData.forEach((item) => {
    if(usersLikedJobs[item.user_id]) {
      usersLikedJobs[item.user_id].push(item.job_id);
    } else {
      usersLikedJobs[item.user_id] = [item.job_id];
    }
  })

  return usersLikedJobs;
}