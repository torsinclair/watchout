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


var width = 700;
var height = 450;

var svg = d3.select('.board').insert('svg', '.mouse')
  .attr('width', width)
  .attr('height', height);
 
// add an svg circle to represent the player's 'ship'



// make the ship respond to click + drag


var moveEnemies = function (data) {

  var circle = svg.selectAll('circle') // returns a new empty selection the first time, since SVG is emtpy in HTML
    // in subsequent calls, returns the circle elements in the SVG
  .data(data); // joins selection with array of data from input

  // circle.transition();


  circle.exit().remove(); // exit selection = the DOM nodes that have no data elements; these are removed

  circle.enter().append('circle') // enter selection = placeholder DOM nodes for data elements that
    // have no DOM nodes; append a circle for each one
    .attr('r', 10); // set attributes for each new circle

  circle // update selection: change attributes of each circle per data point
    .transition()
    .duration(1000)
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




