// José Bezerra - 23/07/2018
// josebezerraneto@outlook.com


function Population() {
    this.population = [];
    this.maxFitness = 0;
    this.matingPool = [];
    this.mutRate = mutRate;
    this.totalPop = maxPop;
    this.bestDNA;
    this.generations = 0;
    for (var i = 0; i < this.totalPop; i++) {
        this.population[i] = new DNA();
    }
}

Population.prototype.calcMaxFitness = function () {
    for (var i = 0; i < this.totalPop; i++) {
        if (this.population[i].checkFit() > this.maxFitness) {
            this.maxFitness = this.population[i].checkFit();
            this.bestDNA = this.population[i].phenotype();
        }
    }
    return this.maxFitness;
}
Population.prototype.naturalSelection = function () {
    this.matingPool = [];
    var maxFit = this.calcMaxFitness();
    for (var i = 0; i < this.population.length; i++) {
        var fitness = map(this.population[i].fitness, 0, maxFit, 0, 1);
        var n = floor(fitness * 100);
        for (var j = 0; j < n; j++) {
            this.matingPool.push(this.population[i]);
        }
    }
}
Population.prototype.generateGens = function () {
    for (var i = 0; i < this.population.length; i++) {
        var indexA = floor(random(this.matingPool.length));
        var indexB = floor(random(this.matingPool.length)); 
        var a = this.matingPool[indexA];
        var b = this.matingPool[indexB];
        var child = a.crossover(b);
        child.mutation(this.mutRate);
        this.population[i] = child;
    }
    this.generations += 1;

    if (this.bestDNA == target) {
        finished = true;
    }

}


Population.prototype.allPhrases = function() {
    let everything = "";

    for (let i = this.population.length - 1; i >= this.population.length - 50; i--) {
      everything += this.population[i].phenotype() + "<br>";
    }
    return everything;
  }