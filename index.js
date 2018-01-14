var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
  if (err) throw err;
  console.log(files);
  fs.writeFile('./files.txt', files, 'utf-8', function(err) {
    if (err) throw err;
  })
})


// read & write/append text file

// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//   console.log('Dane przed zapisem!'.blue);
//   console.log(data);
//   fs.appendFile('./tekst.txt', '\nDane po zapisie!', function(err) {
//     if (err) throw err;
//     console.log('Zapisano!'.blue);
//     fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//       console.log('Dane po zapisie'.blue)
//       console.log(data);
//     });
//   });
// });


// image details

// var StatMode = require('stat-mode');

// fs.stat('./cat.jpg', function(err, stats) {
//   var statMode = new StatMode(stats);
//   console.log(statMode.toString());
// });