/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var things = ["music", "Art", "Dance", "Theater", "Math", "Architecture"];
var programmers = ["musician", "artist", "choreographer", "director", "mathematician", "architect"]
var castles = ["museums", "bridges", "cities"]
var exertions = ["effort", "strain", "struggle", "toil", "endeavor", "hard work", "labor"];
var airs = ["sky", "atmosphere", "heavens", "ether", "wind"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = programmers[pick];
var castles = choose(castles);
var exertion = choose(exertions);
var air = choose(airs);

document.getElementById("thing").innerHTML = thing;
document.getElementById("person").innerHTML = programmer + "s";

var q = document.getElementById("quote");

q.innerHTML =
    "\"The " + programmer +
    ", like the poet, works only slightly removed from pure thought-stuff. He builds his " +
    castles + " in the " + air + ", from " + air + ", creating by " + exertion + " of the imagination.\"" +
    "\u2014" +  "Fred Brooks, " + programmer;

q.innerHTML += "<br><br><br>";


var is = ["is", "is not", "is like", "includes", "excludes", "is beyond",
	  "extends", "encodes", "represents", "signifies", "consists of"];

for (var i = 0; i < is.length; i = i + 1){
 <h5> "You miss 100% of the shots you don't take"</h5>
      <h3>- Wayne Gretzky </h3>
      <h5> -Michael Scott </h5>
}

