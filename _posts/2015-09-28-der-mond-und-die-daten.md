---
layout: post
title: Der Mond und die Daten
excerpt: "Just about everything you'll need to style in the theme: headings, paragraphs, blockquotes, tables, code blocks, and more."
modified: 2015-09-28
tags: []
comments: true
published: true
image:
  feature: moon.jpg
  credit: Jake Hills
  creditlink: https://unsplash.com/jakehills
---

In der letzten Nacht gab es eine herrliche Mondfinsternis um kurz nach 4 Uhr am Morgen. Ich habe mir Teile davon angeschaut. Dabei kamen ein paar glückliche Ereignisse zusammen. Der Mond war der Erde dabei auch näher als sonst. Bei der ARD wurde dies schön zusammengefasst: Der Größenunterschied zwischen dem "kleinen" und dem "großen" Mond entspricht in etwa dem Größenunterschied zwischen einer 1- und 2-Euro-Münze.

Als alter Astronomie-Fan war dies einfach ein tolles Ereignis.

Und woher wusste man das alles so genau?  
Weil die Menschen sich alle Ereignisse akribisch festhalten und daran erkannt haben, wie der ~~Hase~~ Mond läuft. So lässt sich die Laufbahn präzise vorhersagen... Darauf werde ich in Zukunft genauer eingehen, aber hier haben Menschen manuell Daten erfasst und ihre (richtigen) Schlüsse daraus gezogen.

Die nächste totale Mondfinsternis wird in Deutschland übrigens erst wieder am 27. August 2018 sichtbar sein. Hoffen wir, dass das Wetter wieder mitspielt.



<style>
svg {
  font: 10px sans-serif;
}
.line {
  fill: none;
  stroke: #000;
  stroke-width: 1.5px;
}
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>


<script>
var n = 40,
    random = d3.random.normal(0, .2),
    data = d3.range(n).map(random);
var margin = {top: 20, right: 20, bottom: 20, left: 40},
    width = 960 - margin.left - margin.right,
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
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);
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
</script>

<script src="assets/js/vendor/d3.min.js"></script>
