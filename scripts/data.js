'use strict';

var projects = [];

function Project (dataSource) {
  this.title = dataSource.title;
  this.location = dataSource.location;
  this.body = dataSource.body;
}

Project.toHtml = function() {

};

Project();
