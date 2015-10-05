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
