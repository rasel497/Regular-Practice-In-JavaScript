Problem: 02 - isJavaScriptFile

function isJavaScriptFile(String) {

    if (typeof (String) !== 'string') {
        return 'please enter the valied input';
    }

    else if (String.endsWith('.js')) {
        return true;
    }

    else {
        return 'error: please write valid input';
    }
}

//console.log(isJavaScriptFile('index.js'));
