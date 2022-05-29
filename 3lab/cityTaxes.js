function cityTaxes(name, population, treasury) {

    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    }



    function collectTaxes() {
        this.treasury += this.population * this.taxRate;
        this.treasury = Math.floor(this.treasury);
    }
    function applyGrowth(perc) {
        this.population += (perc / 100) * this.population;
        this.population = Math.floor(this.population);
    }
    function applyRecession(perc) {
        this.treasury -= (perc / 100) * this.treasury;
        this.treasury = Math.floor(this.treasury);
    }


}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);