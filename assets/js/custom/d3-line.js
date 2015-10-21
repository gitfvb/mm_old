var n = 40,
    random = d3.random.normal(0, .2),
    data = d3.range(n).map(random);
    // first get the size from the window
    // if that didn't work, get it from the body
//var size = {
//      width: window.innerWidth || document.body.clientWidth,
//      height: window.innerHeight || document.body.clientHeight
//    }
var margin = {top: 20, right: 20, bottom: 20, left: 40},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var x = d3.scale.linear()
    .domain([0, n - 1])
    .range([0, width]);
var y = d3.scale.linear()
    .domain([-1, 1])
    .range([height, 0]);
var line = d3.svg.line()
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });
var svg = d3.select("#d3-line").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("id","svg")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("id","rect");
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.svg.axis().scale(x).orient("bottom"));
svg.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left"));
var path = svg.append("g")
    .attr("clip-path", "url(#clip)")
  .append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);
tick();
function tick() {
  // push a new data point onto the back
  data.push(random());
  // redraw the line, and slide it to the left
  path
      .attr("d", line)
      .attr("transform", null)
    .transition()
      .duration(500)
      .ease("linear")
      .attr("transform", "translate(" + x(-1) + ",0)")
      .each("end", tick);
  // pop the old data point off the front
  data.shift();
}

function combinedResponsiveFn() {
  responsiveWidth('svg', {top: 20, right: 20, bottom: 20, left: 40});
  responsiveWidth('rect');
}

// load() event and resize() event are combined
$(window)
.ready(function() {
  combinedResponsiveFn();
})
.resize(function() {
  combinedResponsiveFn();
});
