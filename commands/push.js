#!/usr/bin/env node

const
    SimpleTreeWatcher = require('simple-tree-watcher');
    minify = require('minify');
    readline = require('readline');
    replaceFile = require('replace-in-file');
    fs = require('fs');
    dir = process.env.PWD;
    watcher = new SimpleTreeWatcher(dir);
    cyan = '\x1b[36m',
    yellow = '\x1b[33m',
    green = '\x1b[32m',
    reset = '\x1b[0m';
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log('\n');
    console.log('\x1b[45m','Uberflip App Generator', reset);

    console.log('', yellow);
    rl.question('Enter marketplace app ID\n> ', (appId) => {

        rl.question('\nApp Version\n> ', (appVersion) => {
            console.log(' ', reset);
            console.log('\x1b[45m', '-- APP CONFIG --', reset);
            console.log('ID:      ' + appId);
            console.log('Version: ' + appVersion, reset);                

            console.log('', cyan);
            console.log('Looking for changes in current directory:', dir, green);

            watcher.on('change', function(f, s) {

                minify('./scripts/contents.js')
                    .then(res => 
                    {
                        let temp = res.replace(/"/g, "'");
                        let contents = '"content:" <script>' + temp + '</script>",';

                        const options = {
                            files: './manifest.json',
                            from: '"content: "<script>"',
                            to: '</script>',
                        };

                        replaceFile(options)
                            .then(res => {
                                console.log(res);
                            })
                            .catch(e => {
                                console.error('Error occurred:', e);
                            });
                    })
                    .catch(console.error);
            });
        });
});