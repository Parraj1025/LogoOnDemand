const inquirer = require('inquirer')
const fs = require('fs')

const circleData = [
    {
        name: 'radius',
        type: 'integer',
        message: 'input desired radius'
    },
    {
        name: 'fill',
        type: 'input',
        message: 'chose color for circle'
    },
    {
        name: 'border',
        type: 'input',
        message: 'enter border color'
    },
    {
        name: 'text',
        type: 'input',
        message: 'enter company name'
    },
    {
        name: 'txtSize',
        type: 'list',
        choices: ['smaller','medium', 'large', 'x-large'],
        message: 'choose text size'
    },
    {
        name: 'txtColor',
        type: 'input',
        message: 'what color text?'
    }
]

async function circle() {
    inquirer.prompt(circleData)
    .then((answers) => {
        const circleSVG = `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <g>
        <circle r="${answers.radius}" cx="50" cy="50" fill="${answers.fill}" stroke="${answers.border}" />
        <text x="50%" y="50%" fill="${answers.txtColor}" font-size="${answers.txtSize}" text-anchor="middle">
        ${answers.text}
      </text>
        </g>
      </svg>`
      
      fs.writeFile('logo.svg', circleSVG, (err) => {
        err ? console.log('nope') : console.log('yup')
      })
        return circleSVG
    })}

async function renderLogo() {
    const logo = await circle()
}


module.exports = {renderLogo}