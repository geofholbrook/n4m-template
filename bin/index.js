#! /usr/bin/env node
const fs = require('fs');
const dirName = process.argv[2];
fs.mkdirSync(dirName);
console.log(`Created ${dirName} directory`);