// José Bezerra - 23/07/2018
// josebezerraneto@outlook.com


var target;
var maxPop;
var population;
var mutRate;
var finished = false;

let bestPhrase;
let allPhrases;
let stats;
let input, button;

function setup() {
    noCanvas();
    //DOM Elements
    bestPhrase = createP("Best phrase:");
    bestPhrase.class("best");

    stats = createP("Stats");
    stats.class("stats");

    allPhrases = createP("All phrases:");
    allPhrases.position(800, 10);
    allPhrases.class("all");

    // Genetic Algorithm Parameters
    target = "To be or not to be.";
    maxPop = 200;
    mutRate = 0.01;
    population = new Population();

    HTMLStuffs();
}

function draw() {
    background(255);
    if (!finished) {
        population.naturalSelection();
        population.generateGens();
    }
    displayInfo();
}

function displayInfo() {
    // Display current status of population
    let answer = population.bestDNA;

    bestPhrase.html("Best phrase:<br>" + answer);

    let statstext = "total generations:     " + population.generations + "<br>";
    statstext += "best fitness:       " + nf(population.maxFitness) + "<br>";
    statstext += "total population:      " + maxPop + "<br>";
    statstext += "mutation rate:         " + floor(mutRate * 100) + "%";

    stats.html(statstext);

    allPhrases.html("All phrases:<br>" + population.allPhrases());
}

function HTMLStuffs() {
    createElement("h2", "Change Parameters")
    createP("here are some values you can play with")
    
    // Change Phrase
    createElement("h3", "Change Phrase")
    input = createInput();

    // Change Pop Size
    createElement("h3", "Change Population Size")
    // createP("Pop. Size: " + maxPop);
    popMinus = createButton("-");
    popPlus = createButton('+');
    popPlus.mousePressed(plusPopSize);
    popMinus.mousePressed(minusPopSize);

    // Change Mut Rate
    createElement("h3", "Change Mutation Rate")
    // createP("Mut. Rate: " + population.mutRate * 100+"%");
    mutMinus = createButton("-");
    mutPlus = createButton('+');
    mutPlus.mousePressed(plusMutRate);
    mutMinus.mousePressed(minusMutRate);

    // Submit Changes
    createP("<br>");
    var changePhrase = createButton("Submit");
    changePhrase.mousePressed(changePhrasefunc);
}

function changePhrasefunc() {
    target = input.value();
    finished = false;
    population = new Population();
}

function plusPopSize() {
    maxPop += 10;
}
function minusPopSize() {
    maxPop -= 10;
}

function plusMutRate() {
    mutRate += 0.01;
}
function minusMutRate() {
    mutRate -= 0.01;
}