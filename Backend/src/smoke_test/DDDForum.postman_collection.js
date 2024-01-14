const newman = require('newman');

// Define the path to your Postman collection JSON file
const collectionPath = './DDDForum.postman_collection.json';

newman.run({
    collection: require(collectionPath),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});