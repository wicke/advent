const fs = require('fs');
var text = fs.readFileSync('data3.txt', 'utf8')
var data = text.split("\n")

function replaceFirstAndLastOccurrences(inputArray) {
    const numberWordsMap = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
        // Add more words as needed
    };

    const replaceFirstAndLast = (input) => {
        const words = input.match(/\b(?:zero|one|two|three|four|five|six|seven|eight|nine)\b/gi);

        if (words && words.length >= 2) {
            const firstWord = words[0];
            const lastWord = words[words.length - 1];

            // Replace only the first and last occurrences
            input = input.replace(new RegExp(`\\b${firstWord}\\b`, 'i'), numberWordsMap[firstWord.toLowerCase()]);
            input = input.replace(new RegExp(`\\b${lastWord}\\b`, 'i'), numberWordsMap[lastWord.toLowerCase()]);
        }

        // Remove spaces between digits
        input = input.replace(/\s+/g, '');

        return input;
    };

    const resultArray = inputArray.map(replaceFirstAndLast);

    return resultArray;
}

// Example usage:
// const inputArray = ["onetesttwo", "43three", 'eightwothree'];
// const outputArray = replaceFirstAndLastOccurrences(inputArray);

// console.log(outputArray);

let output = replaceFirstAndLastOccurrences(data);
console.log(output);

function removeLetterFromString(data) {
    return data.map(string => string.replace(/[a-zA-Z]/g, ''));
}

function extractFirstAndLastNumbers(data) {
    var sumNumber = 0;
    return data.map(string => {
        const firstNumber = string.match(/\d/)[0];
        const lastNumber = string.match(/\d$/)[0];
        const newNumber = parseInt(firstNumber + lastNumber);
        sumNumber += newNumber;
        return { firstNumber, lastNumber, newNumber, sumNumber };
    });
}


// let output = removeLetterFromString(data);
// let extractedNumbers = extractFirstAndLastNumbers(output);
// console.log(output);
// console.log(extractedNumbers[999]);

