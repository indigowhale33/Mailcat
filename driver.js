var zerorpc = require('zerorpc')
var client = new zerorpc.Client();
client.connect('tcp://127.0.0.1:4242');
client.invoke('categorize', 'physics', function(error, res, more) { console.log(res);});
