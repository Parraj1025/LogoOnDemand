const inquirer = require('inquirer')
const fs = require('fs')
const internal = require('stream')
const path = require('path')

const squareData = [
    {
        name: 'width',
        type: 'integer',
        message: 'enter width'
    },
    {
        name: 'height',
        type: 'integer',
        message: 'enter height'
    },
    {
        name: 'color',
        type: 'input',
        message: 'enter color of box'
    },
    {
        name: 'borderColor',
        type: 'input',
        message: 'box border color'
    },
    {
        name: 'text',
        type: 'input',
        message: 'enter company name'
    },
    {
        name: 'txtSize',
        type: 'list',
        choices: ['smaller', 'medium', 'large', 'x-large'],
        message: 'choose text size'
    },
    {
        name: 'txtColor',
        type: 'input',
        message: 'what color text?'
    }
]

function square() {
    console.log('for square make height = width')


    inquirer.prompt(squareData).then((answers) => {
        const x = ((answers.width)/2)+10
        const y = ((answers.height)/2)+10
        const squareSVG = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <g>
            <rect
                width ="${answers.width}"
                height="${answers.height}"
                x="10"
                y="10"
                style="fill: ${answers.color}; stroke: ${answers.borderColor}; stroke-width: 2;" />
                 <text fill="${answers.txtColor}" font-size="${answers.txtSize}" text-anchor="middle" x="${x}" y="${y}">
               ${answers.text}
             </text>
        </g>
      </svg>
      `

      const folderPath = path.join(__dirname, '../examples')
      const filePath = path.join(folderPath, `${answers.text}.svg`)

      fs.writeFile(filePath, squareSVG, (err) => {
        err ? console.log('error') : console.log('square logo created')
      })
    }
    
    )
}

async function squareLogo() {

    square()
}

module.exports = { squareLogo }