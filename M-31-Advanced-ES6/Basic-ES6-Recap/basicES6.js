//01. var let const
// break up

const numbers = [12, 566, 45, 95];
let salary = 450;
salary = 455;
// console.log(salary);

//02. default parameter
function calculatorSlary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 03. template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Slaary: ${calculatorSlary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`

// 04. Arrow function
const doubleIt = x => x * 2;
const calculatorSlary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 05. spread 
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 69, 45];
// console.log(newAges);

//06 destructing
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'Sakib Al Hasan', salary: 450000 }
const [a, b, ...r] = [12, 45, 21, 65, 98];