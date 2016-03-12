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




// modified example from: https://bost.ocks.org/mike/join/

// var svg = d3.select("body").append("div").selectAll("svg")
//     .data(d3.range(16).map(function() { return {x: width / 2, y: height / 2}; }))
//   .enter().append("svg")
//     .attr("width", width)
//     .attr("height", height);

var width = 700;
var height = 450;

var svg = d3.select('.board').insert('svg', '.mouse')
  .attr('width', width)
  .attr('height', height);

/*
var canvas = d3.select('body').selectAll('svg');  

var radius = 20;


// var svg = d3.select("body").append("div").selectAll("svg")
//     .data(d3.range(16).map(function() { return {x: width / 2, y: height / 2}; }))
//   .enter().append("svg")
//     .attr("width", width)
//     .attr("height", height);


*/

/*


canvas.append("circle")
    .attr("r", radius)
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .call(drag);

function dragmove(d) {
  d3.select(this)
      .attr("cx", d.x = Math.max(radius, Math.min(width - radius, d3.event.x)))
      .attr("cy", d.y = Math.max(radius, Math.min(height - radius, d3.event.y)));
}
var drag = d3.behavior.drag()
    .origin(function(d) { return d; })
    .on("drag", dragmove);
*/

var initializeShip = function (data) {
  var ship = svg.selectAll('circle.ship')

  .data(data);

  ship.enter().append('circle')
  .attr('r', 15)
  .attr('class', 'ship');

  ship // update selection: change attributes of each circle per data point
    .attr('cx', function(d) { return d.x; }) // cx: x coordinate of circle
    .attr('cy', function(d) { return d.y; }); // cy: y coordinate of circle

};

var moveEnemies = function (data) {

  var circle = svg.selectAll('circle.enemies') // returns a new empty selection the first time, since SVG is emtpy in HTML
    // in subsequent calls, returns the circle elements in the SVG
  .data(data); // joins selection with array of data from input

  // circle.exit().remove(); // exit selection = the DOM nodes that have no data elements; these are removed

  circle.enter().append('circle') // enter selection = placeholder DOM nodes for data elements that
    // have no DOM nodes; append a circle for each one
    .attr('r', 10) // set attributes for each new circle
    .attr('class', 'enemies');

  circle // update selection: change attributes of each circle per data point
    .transition()
    .duration(1000)
    .attr('cx', function(d) { return d.x; }) // cx: x coordinate of circle
    .attr('cy', function(d) { return d.y; }); // cy: y coordinate of circle

};

var shipData = [
{'x': 0, 'y': 0}
];


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
{'x': 0, 'y': 0},
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

var randomizeAxis = function(arr) {
  return arr.map(function(value) {
    value.x = Math.random() * width; 
    value.y = Math.random() * height;
    return value;
  });
};

initializeShip(randomizeAxis(shipData));
  
// invoke enemies  
moveEnemies(randomizeAxis(testData));

/*
d3.select('svg').selectAll('circle')
  .data(randomizeAxis(testData))
  .transition() .duration(1500);
*/

//.each('end', moveEnemies)



setInterval(function() {
  moveEnemies(randomizeAxis(testData));
}, 1500);




