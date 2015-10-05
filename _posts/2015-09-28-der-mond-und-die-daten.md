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




<link rel="stylesheet" href="css/highlightjs/default.css">

<style>

  html, body {
    background: #ffec8b;
    background: palegoldenrod;
    color: brown;
    color: black;
    font-size: 18px;
    line-height: 27px;
    font-family: sans-serif, times;
  }

  ul,ol li {
    margin: 7px 0;
  }

  a {
    color: blue;
    text-decoration: none;
    font-weight: bold;
  }

    a:hover {
      text-decoration: underline;
    }

  section {
    padding: 15px;
    margin: 15px;
    border-bottom: thin solid black;
  }

  .heading {
    font-weight: bold;
  }

  .disclaimer {
    font-size: 16px;
    font-style: italic;
    margin: 5px 0;
  }

  .legend {
    fill: #ff00ff;
    stroke: #ff00ff;
  }

  .timer {
    fill: #00ff7f;
    stroke: #00ff7f;
  }

  .code {
    white-space: pre;
  }

  .code.inline {
    white-space: pre-wrap;
    background: #f0f0f0;
    color: black;

    padding: 3px;
  }

  .highlight {
    background: black;
    color: #00ff7f;

    font-size: 18px;

    padding: 15px;
    margin: 15px;
    line-height: 28px;

    border: thin solid #333333;
  }

  .text-center {
    text-align: center;
  }

  #moon-viz {
    background: black;
    border: thin solid black;
  }

  #earth {
    fill: #000099;
  }

  #alternate-view {
    position: absolute;
    left: 900px;
    width: 400px;
    height: 500px;
    border: thin solid black;
    background: black;
  }

  .continent {
    fill: green;
    stroke: green;
    stroke-width: 3;
  }

  .bottom.earth {
    z-index: 1001;
  }

  .bottom.moon {
    z-index: 101;
  }

  .star {
    stroke-width: 1;
    fill: white;
    stroke: white;
  }

    .star.new {
      fill: blue;
      stroke: blue;
      stroke-width: 2;
    }

    .star.old {
      fill: tomato;
      stroke: tomato;
      stroke-width: 2;
    }

  .star.dim {
    fill: #505050;
    stroke: #505050;
  }

  .no-svg {
    background: red;
    color: white;
    text-align: center;
  }

</style>





<svg id="moon-viz">

  <g id="starCanvas"></g>

  <text x="20" y="40" class="legend">Fig A</text>
  <text x="770" y="40" class="phase timer"></text>

</svg>

<svg id="alternate-view">

  <text x="350" y="40" class="legend">Fig a</text>
  <text x="20" y="40" class="phase timer"></text>


  <text x="350" y="270" class="legend">Fig b</text>
  <text x="20" y="270" class="eclipse timer" id="eclipse-timer">Month 1</text>

  <path id="earth-shadow" style="stroke: grey" />
  <path id="moon-shadow" style="stroke: grey" />
</svg>

<div id="no-svg"></div>

<section>

  <h1 class="heading">About</h1>

  This tutorial aims to give a brief introduction to d3.js with which Moon phase visualizer demo is built.
  <ul>
    <li>To check the actual demo <a href="index.html">go here</a>.</li>
    <li>Check the <a href="https://github.com/palerdot/moon-phase-visualizer" target="_blank">Github page</a> of this project.</li>
  </ul>

</section>

<section>

  <h1 class="heading">Introduction</h1>

  This d3 tutorial gives a brief introduction to the following.

  <ul>
    <li>d3 Selectors</li>
    <li>d3 Data Joins</li>
  </ul>

  The above are just a fraction of the actual d3 library functionalities. The two topics are introduced here because the Moon Phase Visualizer demo is built with a basic usage of above functionalities of d3.js. This tutorial is intentionally short and aimed at just giving a good brief introduction for d3.js beginners.

</section>

<section>

  <h1 class="heading">What is d3.js?</h1>

  <ul>
    <li>d3.js associates data to an element or group of elements in the html page. Exactly what its definition says - Data Driven Documents.</li>
    <li>All the resulting complex visualizations (graphs, charts, maps etc) associated with d3.js are the result of how we choose to represent that data.</li>
  </ul>

</section>

<section>

  <h1 class="heading">d3 Selectors</h1>

  <ul>
    <li>d3.js helps to select elements from html page using two functions - <span class="code inline">select()</span>, <span class="code inline">selectAll()</span></li>
    <li><span class="code inline">select()</span> selects only one element. If there are more than one element for the given selector it selects the first one only.</li>
    <li><span class="code inline">selectAll()</span> selects all the elements for that selector. d3.js uses css style selectors. If you are familiar with selecting elements with jQuery, d3 selectors are almost the same.</li>
  </ul>

  <div>
  When you select html element(s) with the above functions, you can do all the fancy things like change its attributes, style etc. For example, in the Moon Phase Visualizer demo, the rotation of moon is just selecting the circle element (moon) and just update the x and y position over the period of the time.
  </div>

<pre>
<code class="javascript code">			
// select the moon using 'select'. 'select' returns only one element
var moon = d3.select("#moon");

// calculate the co-ordinates
// x = somevalue; y = somevalue;

// now update the position using our selection
moon.attr("cx", x).attr("cy", y);

// ------------------------------------------------------------------

// With 'selectAll' we can select all the elements for the selection
// Here there are 2 timer elements in the page; returns both
var timer = d3.selectAll(".phase.timer");

// calculate the time
// time = somevalue;

// now update 'all' the elements from the 'selectAll'.
timer.text( time );
</code>
</pre>

<script src="assets/js/vendor/d3.min.js"></script>
<script src="assets/js/custom/d3-moon-viz.js"></script>
<script src="assets/js/vendor/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
