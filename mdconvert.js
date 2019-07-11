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
    // converter.setOption('completeHTMLDocument', true);
    const text      = data,
	fileName = file.replace(/\.[0-9a-z]+$/i,""),
	filePath = `posts/${fileName}.html`,
    html=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>${fileName}</title>
			<link rel="stylesheet" href="../main.bundle.css">
	
		</head>
		<body>
			<article class = "post">
				${converter.makeHtml(text)}
			</article>
			<script src="../js/main.bundle.js"></script>

		</body>
		</html>`;
		
		if (fs.existsSync(filePath)) {
    		fs.writeFile(filePath, html, function (err) {
  			if (err) throw err;
  				console.log('Replaced!');
			});
		}
		else{
			fs.appendFile(filePath, html, function (err) {
  			if (err) throw err;
  			console.log('Saved!');
		});
		}
 
    
	});
});