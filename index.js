class Dog {
    constructor(nameDog, breed, color, birthYear, isVaccinated, passport ) {
        this.nameDog = nameDog;
        this.breed = breed;
        this.color = color;
        this.birthYear = birthYear;
        this.passport = passport;
        this.isVaccinated = isVaccinated;
        this.vaccine = []
    }
    addVaccine(vaccina){
       this.vaccine.push(vaccina);
    }
    giveAgeDog() {
        let curentYear = 2023;
        return curentYear - this.birthYear;
    }
    givePermissionToLeaveCountry() {
       return this.passport ? `are voie să iasă din Moldova` : `nu are voie să iasă din Moldova`;
    }
    countNumVaccine() {       
        return this.vaccine.length === 0 ? `si nu are vaccina` : `si are ${this.vaccine.length} vaccini`
    }
    giveDescriptionOfDog() {
        return `${this.nameDog} este un câine de rasă ${this.breed}, are culoarea ${this.color} vârsta de ${this.giveAgeDog()} ani ${this.givePermissionToLeaveCountry()} ${this.countNumVaccine()};  `
    }
    giveRegisterInfoVaccine () {
        for (let i = 0; i < this.vaccine.length; i++) {
            console.log(`${i+1}. ${this.nameDog} a primit vaccina ${this.vaccine[i][0]}, la data de ${this.vaccine[i][1]}`);
        }
    }

}
class Vaccine {
    constructor(typeOfVaccine, dataAplication) {
        this.typeOfVaccine = typeOfVaccine;
        this.dataAplication = dataAplication;
    }
    toArray() {
        return [this.typeOfVaccine, this.dataAplication];
    }
    
}
let vaccinaParvoviroza = new Vaccine('Parvoviroza', '18.09.2020');
let vaccinaLeptospiroza = new Vaccine ('Leptospiroza', '15.05.2019')
let rudy = new Dog('Rudy', `dog`, 'black', `2000`, true, true);
let jack = new Dog ('Jack', 'ogar', 'black', 2021, true, true);
let barsick = new Dog ('Barsick', 'bulterier', 'alb', true, false);
rudy.addVaccine(vaccinaParvoviroza);
rudy.addVaccine(vaccinaLeptospiroza);
console.log(rudy.giveDescriptionOfDog());
console.log(jack.giveDescriptionOfDog());
console.log(barsick.giveDescriptionOfDog());