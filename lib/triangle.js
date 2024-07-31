const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const tData = [
    {
        name: 'name',
        type: 'input',
        message: 'enter company name'
    },
    {
        name: 'txtColor',
        type: 'input',
        message: 'choose a color for your text'
    },
    {
        name: 'size',
        type: 'list',
        choices: [
            "small",
            "medium",
            "large"
        ],
        message: 'pick a size for the logo'
    },
    {
        name: 'color',
        type: 'input',
        message: 'choose a color'
    },
    {
        name: 'border',
        type: 'input',
        message: 'choose a color for the border'
    },
    {
        name: 'txtSize',
        type: 'list',
        choices: ['smaller', 'medium', 'large', 'x-large']
    }
]


function triangle() {
    inquirer.prompt(tData).then((answers) => {

        if (answers.size = "small") {
            x = 10,
                xx = 210,
                y = 200
        }

        if (answers.size = "medium") {
            x = 10,
                xx = 410,
                y = 400
        }

        if (answers.size = "large") {
            x = 10,
                xx = 310,
                y = 610
        }

        const folderPath = path.join(__dirname, '../examples')
        const filePath = path.join(folderPath, `${answers.name}.svg`)

        const triangleData =
            `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <g>
      <polygon points="${x},${y} ${xx},${x} ${y},${y}" style="fill:${answers.color};stroke:${answers.border};stroke-width:3" />
                 <text fill="${answers.txtColor}" font-size="${answers.txtSize}" text-anchor="middle" x="100" y="120">
               ${answers.name}
             </text>
        </g>
      </svg>`

        fs.writeFile(filePath, triangleData, (err) => {
            err ? console.log('messed up') : console.log('logo created')
        })
    })



}

async function triangleLogo() {

    await triangle()
}


module.exports = { triangleLogo }