'use strict';

(function(module) {

function AboutTwo (todoData) {
Object.keys(todoData).forEach(key => this [key] = todoData[key]);
}

todo.all = [];

About.prototype.toHtml = function() {
  let renderToDo = Handlebars.compile($('#todo-template').text());
  return renderAbout(this);
};

$.getJSON('/data/todo.json', function(todoData) {
  todoData.map(function(todoObject) {
    let todo = new About(todoObject);
    $('#aboutTwo').append(todo.toHtml());
  });
});

})(window);
