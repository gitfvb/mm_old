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
customjs:
  - http://www.dataflo.de/assets/js/custom/custom.js
  - http://www.dataflo.de/assets/js/custom/d3-moon-viz.js
customcss:
  - http://www.dataflo.de/assets/css/custom/moon.css
---

In der letzten Nacht gab es eine herrliche Mondfinsternis um kurz nach 4 Uhr am Morgen. Ich habe mir Teile davon angeschaut. Dabei kamen ein paar glückliche Ereignisse zusammen. Der Mond war der Erde dabei auch näher als sonst. Bei der ARD wurde dies schön zusammengefasst: Der Größenunterschied zwischen dem "kleinen" und dem "großen" Mond entspricht in etwa dem Größenunterschied zwischen einer 1- und 2-Euro-Münze.

Als alter Astronomie-Fan war dies einfach ein tolles Ereignis.

Und woher wusste man das alles so genau?  
Weil die Menschen sich alle Ereignisse akribisch festhalten und daran erkannt haben, wie der ~~Hase~~ Mond läuft. So lässt sich die Laufbahn präzise vorhersagen... Darauf werde ich in Zukunft genauer eingehen, aber hier haben Menschen manuell Daten erfasst und ihre (richtigen) Schlüsse daraus gezogen.

Die nächste totale Mondfinsternis wird in Deutschland übrigens erst wieder am 27. August 2018 sichtbar sein. Hoffen wir, dass das Wetter wieder mitspielt.

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
