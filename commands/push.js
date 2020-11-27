#!/usr/bin/env node

const
    SimpleTreeWatcher = require('simple-tree-watcher');
    readline = require('readline');
    dir = process.env.PWD;
    watcher = new SimpleTreeWatcher(dir);
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