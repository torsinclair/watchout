// start slingin' some d3 here.
// var launchCircles = function() {
//   d3.select('svg').selectAll('div')
//     .data(['red', 'green', 'blue'])
//     .enter()
//     .append('div')
//     .style('background-color', function(d) {
//       return d;
//     });
// };

// launchCircles();


var width = 700;
var height = 450;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);



// modified example from: https://bost.ocks.org/mike/join/

var svg = d3.select('svg');

var moveEnemies = function (data) {

  var circle = svg.selectAll('circle') // returns a new empty selection the first time, since SVG is emtpy in HTML
    // in subsequent calls, returns the circle elements in the SVG
    .data(data); // joins selection with array of data from input

  circle.exit().remove(); // exit selection = the DOM nodes that have no data elements; these are removed

  circle.enter().append('circle') // enter selection = placeholder DOM nodes for data elements that
    // have no DOM nodes; append a circle for each one
    .attr('r', 10); // set attributes for each new circle

  circle // update selection: change attributes of each circle per data point
    .attr('cx', function(d) { return d.x; }) // cx: x coordinate of circle
    .attr('cy', function(d) { return d.y; }); // cy: y coordinate of circle
};


var testData = [
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0},
{'x': 0, 'y': 0}
];

var randomizeAxis = function(arr){

  arr.map(function(value){
    return {value.x = Math.random() * 100
  })
}
  
moveEnemies(testData);

var testData2 = [{'x': 81.0, 'y': 21.1}, {'x': 22.0, 'y': 92.5}];

setTimeout(function() { moveEnemies(testData2); }, 1000);

setInterval(function() {
  moveEnemies

  (d3.shuffle(alphabet)
      .slice(0, Math.floor(Math.random() * 26))
      .sort());


}, 1500);


