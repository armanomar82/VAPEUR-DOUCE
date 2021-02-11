const apiController = require('./controller/apiController');
// const jsApiController = require('./controller/jsApiController');

const express  = require('express');
// const home     = require('./routes/index');
// const aloments = require('./routes/aloments');

const app = express();
// mdelwer route
// app.use('/', home);
// app.use('/aloments', aloments);
// app.use('/overView', aloments);


const http = require('http')
const PORT = process.env.PORT || 5000 ;

http.createServer((req, res) => {
        if(req.url === "/?id=all"){
            apiController.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/?id"){
            apiController.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        
        // res.end();
}).listen(PORT , console.log(`server run on port ${PORT} ....`));



