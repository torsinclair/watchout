// modified example from: https://bost.ocks.org/mike/join/


var width = 700; // set up board size
var height = 450;

var svg = d3.select('.board').insert('svg', '.mouse') // insert SVG into DOM
  .attr('width', width)
  .attr('height', height);

var drag = d3.behavior.drag()
 .on('dragstart', function() { ship.style('fill', 'red'); })
 .on('drag', function() { ship.attr('cx', d3.event.x)
                                .attr('cy', d3.event.y); })
 .on('dragend', function() { ship.style('fill', 'orange'); });

var ship = svg.selectAll('.ship')
  .data([{ x: (width / 2), y: (height / 2), r: 15 }])
  .enter()
  .append('svg:circle')
  .attr('class', 'ship')
  .attr('cx', function(d) { return d.x; })
  .attr('cy', function(d) { return d.y; })
  .attr('r', function(d) { return d.r; })
  .call(drag)
  .style('fill', 'orange');

var moveEnemies = function (data) {

  var enemy = svg.selectAll('circle.enemies') // returns a new empty selection the first time, since SVG is emtpy in HTML
    // in subsequent calls, returns the circle elements in the SVG
  .data(data); // joins selection with array of data from input

  enemy.enter().append('circle') // enter selection = placeholder DOM nodes for data elements that
    // have no DOM nodes; append a circle for each one
    .attr('r', 10) // set attributes for each new circle
    .attr('class', 'enemies');

  enemy // update selection: change attributes of each circle per data point
    .transition()
    .duration(1000)
    .attr('cx', function(d) { return d.x; }) // cx: x coordinate of circle
    .attr('cy', function(d) { return d.y; }); // cy: y coordinate of circle

};

var enemyLocations = [ // a blank data set for enemy locations
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

var randomizeAxis = function(arr) { // creates new random locations
  return arr.map(function(value) {
    value.x = Math.random() * width; 
    value.y = Math.random() * height;
    return value;
  });
};
  
// invoke enemies in random locations 
moveEnemies(randomizeAxis(enemyLocations));

// move enemies to random locations every 1.5 sec
setInterval(function() {
  moveEnemies(randomizeAxis(enemyLocations));
}, 1500);




