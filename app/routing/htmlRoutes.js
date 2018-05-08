var path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../app/index.html'));
  });

  app.get('/survey', function(req, res) {
      res.sendFile(path.join(__dirname, '../app/survey.html'));
  });
};