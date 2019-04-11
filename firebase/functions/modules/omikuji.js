const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    const cost = request.query.cost;
    let data;
    if(!cost) {
        data = {
            unsei: '天罰',
        }
    } else if(cost<500) {
        data = {
            unsei: '小吉',
        }
    } else {
        data = {
            unsei: '大吉',
        }
    }
 response.send(data);
});
