const express = require('express');

const path = require('path');
const application = express();

application.use(
  express.static(path.join(__dirname, 'production'))
);

application.get('/*', (request, response) => {
  console.log(`${Date.now()}|${request.get('X-Forwarded-For')}|${request.url}`);
  response.sendFile(
    path.join(__dirname, 'production', 'index.html')
  );
});

application.listen(5500);