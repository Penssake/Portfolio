'use strict';

(function(module) {
  const repos = {};
  function MyRepos(reposObj) {
    Object.keys(reposObj).forEach(key => this [key] = reposObj[key]);
}
console.log(repos);
repos.all = [];
console.log(repos.all);
repos.requestRepos = function(callback){
  $.get(`https://api.github.com/users/Penssake/repos?access_token=${token}`)
  .then(
    results => {
      console.log(results);
      repos.all = reults.map(ele => new MyRepos(ele));
      callback(MyRepos);
    });
};
repos.with = attr => repos.all.filter(repo => repo[attr]);
module.repos = repos;
})(window);
