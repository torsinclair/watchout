// modified example from: https://bost.ocks.org/mike/join/


var width = 700; // set up board size
var height = 450;

var svg = d3.select('.board').insert('svg', '.mouse') // insert SVG into DOM
  .attr('width', width)
  .attr('height', height);

// define ship drag and add ship to SVG

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


// Collision

var nodes = d3.selectAll('circle.enemies');

var testMe = function(){
for(var i = 0; i < nodes.length; i++){
  console.log(nodes[i].__data__);
}
};

var test = testMe();

/*
var force = d3.layout.force()
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -2000; })
    .nodes(nodes)
    .size([width, height]);

force.start();

var canvas = d3.select("body").append("canvas")
    .attr("width", width)
    .attr("height", height);

var context = canvas.node().getContext("2d");

force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i,
      d,
      n = nodes.length;

  for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

  context.clearRect(0, 0, width, height);
  context.fillStyle = "steelblue";
  context.beginPath();
  for (i = 1; i < n; ++i) {
    d = nodes[i];
    context.moveTo(d.x, d.y);
    context.arc(d.x, d.y, d.radius, 0, 2 * Math.PI);
  }
  context.fill();
});

canvas.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}

*/