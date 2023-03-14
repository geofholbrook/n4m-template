#! /usr/bin/env node
const fs = require("fs");
const dirName = process.argv[2];
fs.mkdirSync(dirName);
fs.writeFileSync(`${dirName}/package.json`, "");
console.log(`Created ${dirName} directory`);
