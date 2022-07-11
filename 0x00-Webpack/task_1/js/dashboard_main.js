var $ = require("jquery");
var _ = require("lodash");
var count = 0;

$(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button>Click here to get started</button>");
  $("body").append("<p id='count'></p>");
  $("body").append("<p>Copyright - Holberton School</p>");

  function updateCounter() {
    count++;
    $("p#count").text(count + " clicks on the button");
  }
  _.debounce(
    $("button").on("click", function (e) {
      updateCounter();
    })
  );
});
