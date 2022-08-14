function make_avg(bangla, english, physics, chemistry) {

    const grades = [bangla + english + physics + chemistry];
    const arrayAverage = grades / 4;

    return arrayAverage;
}

const banglaMarks = 8;
const englishMarks = 8;
const physicsMarks = 7;
const chemistryMarks = 11;

const getMarks = make_avg(banglaMarks, englishMarks, physicsMarks, chemistryMarks);


console.log(getMarks);
