// 31-7 (semi-advanced) Class, constructor, method, create object from class

// syntextic sugar 

class Instructor {
    name;
    designation = 'Web developer'
    team = 'we dev team'
    location;
    //special function constructor keyword
    // name defined kore ta  Instructor function parameter set kora lagbe
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    // class er vitor er function ke method bole
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}

//called class,,,,and mush use new keyword
const aamir = new Instructor('aamir', 'bombaiii');
console.log(aamir);
// add new instructor
const solaiman = new Instructor('Solaiman', 'NewYork');
console.log(solaiman);


aamir.startSupportSession('09.00');
aamir.createQuiz(60);

