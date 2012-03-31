var async = require('async')
  , _ = require('underscore');

var hs = [
  {
      name: 'Sonali'
    , number: '3472642736'
  },
  {
      name: 'Dave'
    , number: '9145231085'
  },
  {
      name: 'Nick'
    , number: '6103487428'
  }
];

//Bias towards dave
hs.push({
      name: 'Dave'
    , number: '9145231085'
  });


module.exports = function routes(app){

  /* Routes */
  app.get('/api/incoming', function(req, res){
    
    var toCall = hs[Math.floor(Math.random()*hs.length)];

    var twiml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
    
    twiml += '<Response>\n<Say>Welcome. Calling ' + toCall.name + '</Say>\n';
    twiml += '<Dial>' + toCall.number + '</Dial>\n';
    twiml += '</Response>\n';
    res.send(twiml, {'Content-Type':'text/xml'}, 200)
  });


  //Nothing specified
  app.all('*', function notFound(req, res) {
    res.send('Nothing');
  });

}

