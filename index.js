const fs = require('fs')
const inquirer = require('inquirer')
const { circle, renderLogo } = require('./lib/circle')
const { ellipse } = require('./lib/ellipse');
const { polygon } = require('./lib/polygon');
const internal = require('stream');

const shape = [
    // Define your prompt configuration here (questions, type, etc.)
    {
        type: 'list',
        name: 'selectedShape',
        message: 'What shape do you want?',
        choices: ['Square', 'Circle', 'Triangle']
    }
];

async function init () {
    inquirer.prompt(shape).then(async (answer) => {
        try {
        if (answer.selectedShape == 'Circle') {
            renderLogo()
        }
    }
    catch{}
    })}




// const circleData = [
//     {
//         name: 'radius',
//         type: 'integer',
//         message: 'input desired radius'
//     },
//     {
//         name: 'fill',
//         type: 'input',
//         message: 'chose color for circle'
//     },
//     {
//         name: 'border',
//         type: 'input',
//         message: 'enter border color'
//     }
// ]
// const questions = [
//     {
//         name: 'text',
//         type: 'input',
//         message: 'enter logo text'
//     },
//     {
//         name: 'txtColor',
//         type: 'input',
//         message: 'enter text color'
//     }
// ]

// // fs.writeFile('logo.svg', logocontent, (err) => {
// //     err ? console.log('wrong') : console.log('right')
// // })

// circle(circleData);
// ellipse('ellipse');
// polygon('polygon')
init()