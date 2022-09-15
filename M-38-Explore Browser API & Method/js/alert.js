//show altert
/*
const showAlert = () => {
    alert('Congratulations!');
}
*/
// alert
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('Work Hard, Go ahead!'); // num 5 thke coto hole alert dibe
    }
}

// confirm
const askSomething = () => {
    const decision = confirm('Are you comming picnic');
    console.log(decision); //  true or false
    if (decision === true) {
        console.log('dosto 500tk bkash kor');
    }
    else {
        console.log('DGM!!  dhure giye mor');
    }
}

// prompt
const getInput = () => {
    // prompt('Tor full nam lekh beda');
    const name = prompt('Tor full nam lekh beda');
    console.log(name);
    if (!!name) {
        // console.log('Welcome dosto', name);
        console.log('Welcome dosto');
    }
}