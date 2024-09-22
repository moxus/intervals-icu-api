const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://intervals.icu/api/v1/docs';
const filePath = path.join(__dirname, '..', 'spec.yaml');

const file = fs.createWriteStream(filePath);

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to get '${url}' (${response.statusCode})`);
    response.resume(); // Consume response data to free up memory
    return;
  }

  response.pipe(file);

  file.on('finish', () => {
    file.close(() => {
      console.log('Download completed.');
    });
  });
}).on('error', (err) => {
  fs.unlink(filePath, () => {
    console.error(`Error downloading the file: ${err.message}`);
  });
});
