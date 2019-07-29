var newman = require('newman');

newman.run({
   collection: './BookingAPIs.postman_collection.json',
   reporters: 'CustomReporter_Newman',
   reporter: {
     myreporter: {
       'option-name': 'option-value' // this is optional
     }
   }
}, function (err, summary) {
  if (err) { throw err; }
  console.info('collection run complete!');
});


var newman = require('newman'); // require newman in your project
// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./BookingAPIs.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
