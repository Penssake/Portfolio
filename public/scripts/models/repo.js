'use strict';

(function(module) {
  const repos = {};
  function MyRepos(reposObj) {
    Object.keys(reposObj).forEach(key => this [key] = reposObj[key]);
}
repos.requestRepos = function(callback){
  $.get(`https://api.github.com/users/Penssake/repos?access_token=${token}`)
  .then(
    results => {
      repos.all = reults.map(ele => new MyRepos(ele));
      callback(MyRepos);
repos.with = attr => repos.all.filter(repo => repo[attr]));
})(window);
// module.repos = repos;
// const repos = {};
//
// $.ajax({
//   url: 'https://api.github.com/users/Penssake/repos?type=owner',
//   method: 'GET',
//   dataType: 'json',
//   data: repos;
//   headers: {
//     Authorization: `token ${token}`,
//   },
//   console.error('error');
// })
// .then(
//     data => {
//       data.forEach(repo)
//     }
//   }
// )
