module.exports = function getNumOfMatches(arr_1, arr_2) {
  let arr = [];

  for (let i in arr_1) {
    if(arr_2.indexOf(arr_1[i]) !== -1) {
      arr.push(arr_1[i]); 
    }
  }

  arr = arr.filter((item, index) => arr.indexOf(item) === index)

  return arr.sort((x, y) => x - y).length;
}