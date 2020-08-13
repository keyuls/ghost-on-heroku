var ghost = require('ghost');

// Run a single Ghost process
ghost()
  .then( ghostServer => ghostServer.start() )
  .catch( error => {
    console.error(`Ghost server error: ${error.message} ${error.stack}`);
    process.exit(1);
  });


  app.set('port', (process.env.PORT || 5000));

  //For avoidong Heroku $PORT error
  app.get('/', function(request, response) {
      var result = 'App is running'
      response.send(result);
  }).listen(app.get('port'), function() {
      console.log('App is running, server is listening on port ', app.get('port'));
  }); 