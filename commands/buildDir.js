#!/usr/bin/env node

const
    content  = require('./content.js');
    readline = require('readline');
    fs       = require('fs'),
    shell    = require("shelljs");
    cyan     = '\x1b[36m',
    yellow   = '\x1b[33m',
    green    = '\x1b[32m',
    reset    = '\x1b[0m';
    dim      = '\x1b[2m';
    bold     = '\x1b[1m';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\n');
console.log('\x1b[45m','Uberflip App Generator', reset);

console.log(' ', yellow);
rl.question('\nEnter App Name?\n>', (appName) => {
    fs.mkdir(`./${appName}`, { recursive: true }, function(err) {
        if (err) throw err;
        else {
            console.log(' ', green);
            console.log(`'${appName}'` + ' app directory created!', cyan);

            // Creating images folder
            fs.mkdir(`./${appName}/images`, function (err) {
                if (err) throw err;
                console.log('Asset directory created...');                        
            });

            // Populating manifest
            fs.writeFile(`./${appName}/manifest.json`, content.manifest, function (err) {
                if (err) throw err;
                console.log('Manifest populated...');
            });

            // Creating script folder and populating files
            fs.mkdir(`./${appName}/scripts`, function (err) {
                if (err) throw err;
                fs.writeFile(`./${appName}/scripts/themesCheck.js`, content.themesCheck, function (err) {
                    if (err) throw err;
                    console.log('Script directory created...');
                    console.log('Script files populated...', yellow);

                    rl.question('\nDo you want to commit to a GitHub repo? (Y/N)\n>', (gitAnswer) => {

                        if (gitAnswer === 'Y' || gitAnswer === 'y') {
                            rl.question('\nEnter git repository URL for initial commit\n>', (gitURL) => {
    
                                console.log('', cyan);
                                fs.writeFile(`./${appName}/README.md`, content.README, function (err) {
                                    if (err) throw err;
                                });
    
                                console.log('', reset);
                                shell.exec("git init");
                                shell.exec("git add .");
                                shell.exec("git commit -m 'Initial commit'");
                                shell.exec(`git remote add origin ${gitURL}`);
                                shell.exec("git push -u origin master");

                                console.log('Changes pushed to GitHub repo...', green);            

                                console.log('\nHappy developing (<>..<>)\n');

                                rl.close();
                            });
                        } else if (gitAnswer === 'N' || gitAnswer === 'n') {

                            console.log('', green);
                            console.log('\nHappy developing (<>..<>)\n');

                            rl.close();
                        }
                    });
                });
            });
        }
    });
});