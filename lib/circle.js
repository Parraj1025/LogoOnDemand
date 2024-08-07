const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

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
        choices: ['smaller','medium', 'large', 'x-large', '2em', '4em'],
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
        const circleSVG = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" >
        <g>
          <circle  r="${answers.radius}" cx="${answers.radius}" cy="${answers.radius}" fill="${answers.fill}" stroke="${answers.border}"  />
          <text x="${answers.radius}" y="${answers.radius}" fill="${answers.txtColor}" font-size="${answers.txtSize}" text-anchor="middle">
            ${answers.text}
          </text>
        </g>
      </svg>`
      const folderPath = path.join(__dirname, '../examples')
      const filePath = path.join(folderPath, `${answers.text}.svg`)

      fs.writeFile(filePath, circleSVG, (err) => {
        err ? console.log('nope') : console.log('yup')
      })
        return circleSVG
    })}

async function renderLogo() {
    const logo = await circle()
}


module.exports = {renderLogo}