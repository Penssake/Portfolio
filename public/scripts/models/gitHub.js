'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
 $.get(`https://api.github.com/users/penssake/repos?access_token=${token}`)
 .then(
   results => {
     repos.all = results.map(ele => new MyRepos(ele));
     callback();
   });
 };
 repos.with = attr => repos.all.filter(repo => repo[attr]);

 module.repos = repos;
})(window);
