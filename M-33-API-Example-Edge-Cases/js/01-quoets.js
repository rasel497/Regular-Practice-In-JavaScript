// console.log('Hi,,, For me, money is not my definition of success. Inspiring people is a definition of success');
//Today is the best day ever and tomorrow's going to be even better
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerText = quote.quote;
}