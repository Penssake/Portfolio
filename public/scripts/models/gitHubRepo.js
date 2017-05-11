'use strict';

(function(module) {
  $.get({
    url: 'https://api.github.com/users/{penssake}/repos{?type,page,per_page,sort}',
    method: 'GET',
    headers: {Authorization: 'token ${token}'
    }
  })
  .then(
    data => {
      data.forEach(repo => $('#gitHubResults').append(`<p>${repo.name}</p>`))
    },
    err => {
      console.error(err);
    }
  )
})(window);
