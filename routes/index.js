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
    twiml += '<Response>\n'
    twiml += '<Say>Welcome. Calling ' + toCall.name + '</Say>\n';
    twiml += '<Dial>' + toCall.number + '</Dial>\n';
    twiml += '</Response>\n';
    res.send(twiml, {'Content-Type':'text/xml'}, 200)
  });

  app.get('/api/sms', function(req, res){
    var toText = hs[Math.floor(Math.random()*hs.length)];

    var twiml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
    twiml += '<Response>\n';
    twiml += '<Sms>Texting ' + toText.name + '</Sms>\n';
    //twiml += '<Sms to="' + toText.number + '">' + req.params.Body + '</Sms>\n';
    twiml += '<Sms to="4153736442">' + req.query.Body + '</Sms>\n';
    twiml += '</Response>\n';
    res.send(twiml, {'Content-Type':'text/xml'}, 200)
  });

  app.get('/', function(req, res){
    res.send('<!DOCTYPE html><html><head><title>516-864-HACK</title><style>h1{text-align:center;}</style></head><body><h1>516-864-4225</h1><h1>516-864-HACK</h1></body></html>');
  });

  //Nothing specified
  app.all('*', function notFound(req, res) {
    res.send('Nothing');
  });

}

