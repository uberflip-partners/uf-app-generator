const SimpleTreeWatcher = require('simple-tree-watcher');
const axios = require('axios');

module.exports = {

    buildDir: function () {
    const
        content  = require('./content');
        readline = require('readline');
        fs       = require('fs'),
        cyan     = '\x1b[36m',
        yellow   = '\x1b[33m',
        green    = '\x1b[32m',
        reset    = '\x1b[0m';
        dim      = '\x1b[2m';
        bold     = '\x1b[1m';
        
        console.log('', dim);        
        console.log(`                        __                ___ __ __            `);      
        console.log(`                 .--.--|  |--.-----.----.'  _|  |__.-----.      `);
        console.log(`                 |  |  |  _  |  -__|   _|   _|  |  |  _  |     `);   
        console.log(`                 |_____|_____|_____|__| |__| |__|__|   __|     `);     
        console.log(`                                                   |__|        `);       

        console.log('', `                                                             __  `);
        console.log('', `   .---.-.-----.-----.    .-----.-----.-----.-----.----.---.-|  |_.-----.----. `);
        console.log('', `   |  _  |  _  |  _  |    |  _  |  -__|     |  -__|   _|  _  |   _|  _  |   _| `);
        console.log('', `   |___._|   __|   __|    |___  |_____|__|__|_____|__| |___._|____|_____|__|   `);
        console.log('', `         |__|  |__|       |_____|                                              `);

        console.log('\n\n    Developer: Larsen Friis');
        console.log('    Contact @ larsen.friis@uberflip.com');

        console.log('\n\n    This package can generate the Uberflip Marketplace app file structure and');
        console.log('    seamlessly push local changes to your app during the app development process.');

        console.log('', dim);
        console.log(bold, '\nCommands:\n');
        console.log('   buildDir  generate folder structure and auto-populate with sample');  
        console.log('   push      pushes local changes to app\n');

        console.log('Options:\n'); 
        console.log('   --version  Show version number');
        console.log('   --help     Show help options', reset);

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
    },

    push: function () {
        const
            readline = require('readline');
            dir = process.env.PWD;
            watcher = new SimpleTreeWatcher(dir);
            fs = require('fs'),
            cyan = '\x1b[36m',
            yellow = '\x1b[33m',
            green = '\x1b[32m',
            reset = '\x1b[0m';

        console.log('\n');
        console.log('\x1b[45m','Uberflip App Generator', reset);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log(' ', yellow);
        rl.question('\nEnter marketplace app ID\n>', (appId) => {

            rl.question('\nApp Version\n>', (appVersion) => {
                console.log(' ', reset);
                console.log('\x1b[45m', '-- APP CONFIG --', reset);
                console.log('ID:      ' + appId);
                console.log('Version: ' + appVersion, reset);                

                console.log('', cyan);
                
                console.log('Looking for changes: ', dir, green);

                watcher.on('change', function(f, s) { 
                    console.log('Changes pushed!'); 
                });
            });
        });   
    }
};