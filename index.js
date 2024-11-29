#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

console.log({ __dirname: __dirname });

(async () => {
    console.log("Welcome to Create Rubedo!");

    const { template } = await prompt([
        {
            type: 'list',
            name: 'template',
            message: 'Build system:',
            choices: [
                "rsbuild",
                "vite",
                "rspack",
                "webpack",
                "esbuild",
            ],
            default: 'rsbuild',
        },
    ]);

    const { destination } = await prompt([
        {
            type: 'input',
            name: 'destination',
            message: 'Project Location (default: "."):',
            default: '',
        },
    ]);

    const templatePath = path.join(__dirname, 'templates', template);
    const destinationPath = path.resolve(process.cwd(), destination);

    if (fs.existsSync(destinationPath)) {
        if (fs.readdirSync(destinationPath).length != 0) {
            console.error(`Not creating project in ${destinationPath}, target folder is not empty`);
        }
    }

    try {
        // Copie os arquivos do template para o destino
        fs.copySync(templatePath, destinationPath);
        console.log(`Project created at ${destinationPath}`);
    } catch (error) {
        console.error('Error creating project:', error);
    }
})();
