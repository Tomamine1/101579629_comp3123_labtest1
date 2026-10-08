const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        const words = array
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());

        resolve(words);
    });
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));