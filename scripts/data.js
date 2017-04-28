// 'use strict';
//
// var projects = [];
//
// function Portfolio () {
//   for (key in opts) {
//     this[key] = opts[key];
//   }
// };
//
// neighborhoodDataSet.forEach(function(neighborhoodObject) {
//   neighborhoods.push(new Neighborhood(neighborhoodObject));
// });
//
// projects.forEach(function(projectsObject) {
//   $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
// });
// var dataSource = dataSource.this;
//
// function Project (dataSource) {
//   this.title = dataSource.title;
//   this.location = dataSource.location;
//   this.body = dataSource.body;
//   console.log(this);
//
//   Project.toHtml = function() {
//     $(this).html('body');
//   };
// };
//
// Project();
$('#hamburger').on('click', function(){
  $('#nav-list').show();
});

$(document).ready(function() {
  $('#nav-list').mouseenter( function(){
    $('#aboutList, #portfolioList, #blogList, #contactList').animate( {marginLeft: '10px'}, 200 );
  });
  $().mouseleave( function(){
    $('#aboutList, #portfolioList, #blogList, #contactList').animate( {marginLeft: '0px'}, 200 );
  });
});
$('#aboutList').mouseenter( function(){
  $('#aboutList').animate({ marginLeft: '10px'}, 200);
  $('#aboutList').animate({ marginLeft: '0px' }, 200);
});

$('#aboutList').on('click', function(){
  $('#aboutList').animate({ width: '100%'});
  $('#aboutList').animate({ borderRadius: '0%'});
});

$('#portfolioList').mouseenter( function(){
  $('#portfolioList').animate({ marginLeft: '10px' }, 200);
  $('#portfolioList').animate({ marginLeft: '0px' }, 200);
});

$('#portfolioList').on('click', function(){
  $('#portfolioList').animate({ width: '100%'});
  $('#portfolioList').animate({ borderRadius: '0%'});
});

$('#blogList').mouseenter( function(){
  $('#blogList').animate({ marginLeft: '10px' }, 200);
  $('#blogList').animate({ marginLeft: '0px' }, 200);
});

$('#blogList').on('click', function(){
  $('#blogList').animate({ width: '100%'});
  $('#blogList').animate({ borderRadius: '0%'});
});

$('#contactList').mouseenter( function(){
  $('#contactList').animate({ marginLeft: '10px' }, 200);
  $('#contactList').animate({ marginLeft: '0px' }, 200);
});

$('#contactList').on('click', function(){
  $('#contactList').animate({ width: '100%'});
  $('#contactList').animate({ borderRadius: '0%'});
});
