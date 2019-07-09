const fs = require('fs');

// fs.readFile('./src/posts/hello.md', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   const showdown  = require('showdown'),
//     converter = new showdown.Converter(),
//     text      = data,
//     html      = converter.makeHtml(text);
//     console.log(html);
// });
const testFolder = './src/posts/';
fs.readdirSync(testFolder).forEach(file => {
  fs.readFile(`${testFolder}${file}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  const showdown  = require('showdown'),
    converter = new showdown.Converter();
    converter.setOption('completeHTMLDocument', true);
    const text      = data,
    html      = converter.makeHtml(text);
    console.log(html);
	});
});