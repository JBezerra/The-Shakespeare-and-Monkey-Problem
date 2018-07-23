// José Bezerra - 23/07/2018
// josebezerraneto@outlook.com


function newChar() {
    var ascii = floor(random(63, 122 + 1)); //open interval
    if(ascii == 63) ascii = 32;
    if(ascii == 64) ascii = 46;
    return String.fromCharCode(ascii);
}

function DNA() {
    this.genes = [];
    this.fitness = 0;

    for (var i = 0; i < target.length; i++) {
        this.genes[i] = newChar();
    }
}

DNA.prototype.phenotype = function () {
    return this.genes.join('');
}

DNA.prototype.checkFit = function () {
    var fitScore = 0;
    for (var i = 0; i < target.length; i++) {
        if (this.genes[i] == target[i]) {
            fitScore++;
        }
    }
    this.fitness = pow((fitScore / target.length),3);
    return this.fitness;
}

DNA.prototype.crossover = function (partner) {
    var index = floor(random(this.genes.length));
    var child = new DNA();
    for (var i = 0; i < this.genes.length; i++) {
        if (i > index) {
            child.genes[i] = this.genes[i];
        }
        else {
            child.genes[i] = partner.genes[i];
        }
    }
    return child;
}

DNA.prototype.mutation = function(mutRate){
    for(var i=0; i<this.genes.length; i++){
        if(random(1) < mutRate){
            this.genes[i] = newChar();
        }
    }
}