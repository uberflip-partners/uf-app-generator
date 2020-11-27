#!/usr/bin/env node

const
    content  = require('./content.js');
    readline = require('readline');
    fs       = require('fs'),
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

                    fs.writeFile(`./${appName}/manifest.json`, content.manifest, function (err) {
                        if (err) throw err;
                        console.log('Manifest populated...');
                    });
                    fs.mkdir(`./${appName}/scripts`, function (err) {
                        if (err) throw err;
                        fs.writeFile(`./${appName}/scripts/themesCheck.js`, content.themesCheck, function (err) {
                            if (err) throw err;
                            console.log('Script files populated...');
                        });
                    });
                    fs.mkdir(`./${appName}/images`, function (err) {
                        if (err) throw err;
                    });
                }
            });
        rl.close();    
    });