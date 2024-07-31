
const inquirer = require('inquirer')
const { renderLogo } = require('./lib/circle')
const { squareLogo} = require('./lib/square')
const {triangleLogo} = require('./lib/triangle')



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
        if (answer.selectedShape == 'Square'){
            squareLogo()
        }
        if (answer.selectedShape == 'Triangle'){
            triangleLogo()
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