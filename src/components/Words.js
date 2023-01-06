import wordleBank from './wordle-bank.txt';

export const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
];

export const generateWordSet = async () => {
    let wordSet;
    await fetch(wordleBank)
        .then((response) => response.text()) 
        .then((result) => {
            const wordArray = result.split('\n')
            wordSet = new Set(wordArray);
        });
    return {wordSet};
};
