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
let i = 0;

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

            minify('./scripts/app.js')
            .then(res => 
            {
                let temp = res.replace('"', "'");
                let code = '"<script>' + temp + '</script>",';

                let result = replaceFile.sync({
                    files: dir + '/manifest.json',
                    from: new RegExp('\<(?:[^:]+:)?script\>.*?\<\/(?:[^:]+:)?script\>'),
                    to: code,
                    countMatches: true
                });
                i++;

                console.log(`[${i}] Changes (${result[0].numMatches}) pushed!\n`);
            });
        });
    });
});