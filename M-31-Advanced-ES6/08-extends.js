
// syntextic sugar 
class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedBack() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}

// extends korle Temmember er property gulapnbe
class Instructor extends TeamMember {
    designation = 'Web developer'
    team = 'we dev team'
    constructor(name, location) {
        super(name, location);
    }

    // class er vitor er function ke method bole
    developeFeatures(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }

}


// part-02: Developer
class Developer extends TeamMember {
    designation = 'Web developer'
    team = 'we dev team'
    tech;

    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }

    // class er vitor er function ke method bole
    developeFeatures(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }

}

//part-03: JobPlacement
class JobPlacement extends TeamMember {
    designation = 'Web developer'
    team = 'we dev team'
    region;

    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }

    // class er vitor er function ke method bole
    developeFeatures(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }

}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);

const Aslamm = new JobPlacement('Aslam Bhatt', 'Dilli', 'Europe');
console.log(Aslamm);

const Janker = new Instructor('Janker Mahbub Sir', 'NewYork', 'USA');
console.log(Janker);