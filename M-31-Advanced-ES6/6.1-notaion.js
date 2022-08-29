const student = {
    name: 'kolilim uddin',
    age: 26,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 86,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

// const chemistry = student['marks']['chemistry'];
// console.log(chemistry);
const subject = 'physics';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];
console.log(marks2);