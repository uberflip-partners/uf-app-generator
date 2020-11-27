#!/usr/bin/env node

const
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
    console.log('   --help     Show help options\n', reset);