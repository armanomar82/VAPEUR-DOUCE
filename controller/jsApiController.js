const request = require('request');
 
_EXTERNAL_URL = ' https://api.hmz.tf/?id=all';

exports. jsApiController = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
    }
    return callback(body);
    });
}