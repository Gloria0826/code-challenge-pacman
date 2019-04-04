const createFile = require('create-file');
const fs = require('fs');
const packageJson = require('./package.json');

const content = `{"version":"${packageJson.version}","build":"${new Date().getTime()}"}`;

fs.unlink('./public/version.json', err => {
  if (err) throw err;
  console.log(content);

  createFile('./public/version.json', content, err => {
    if (err) console.log(err);
  });
});
