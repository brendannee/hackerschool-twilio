var async = require('async')
  , _ = require('underscore');

var hs = [
  {
      name: 'Sonali'
    , number: '3472642736'
  },
  {
      name: 'Dave'
    , number: '3472642736'
  },
  {
      name: 'Nick'
    , number: '3472642736'
  }
]

module.exports = function routes(app){

  /* Routes */
  app.get('/api/incoming', function(req, res){
    res.contentType('text/xml');
    
    var toCall = hs[Math.floor(Math.random()*hs.length)];

    var twiml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
    
    twiml += '<Response><Say>Calling ' + toCall.name + '</Say>';
    twiml += '<Play>http://api.twilio.com/Cowbell.mp3</Play>';
    twiml += '<Dial>' + toCall.number + '</Dial></Response>';
    res.send(twiml);
  });


  //Nothing specified
  app.all('*', function notFound(req, res) {
    res.send('Nothing');
  });

}

